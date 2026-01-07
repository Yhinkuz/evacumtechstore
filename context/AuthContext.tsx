// src/context/AuthContext.tsx
'use client';

import { createContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../types/user';

interface AuthResponse {
  success: boolean;
  message: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, admin?: boolean) => AuthResponse;
  logout: () => void;
  register: (email: string, password: string, name: string) => AuthResponse;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = 'evacumtech_user';
const ADMIN_EMAIL = 'admin@evacumtech.com';
const ADMIN_PASSWORD = 'admin123';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setUser(parsed);
        }
      } catch (error) {
        console.error('Failed to load user:', error);
        localStorage.removeItem(STORAGE_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = (email: string, password: string, admin = false): AuthResponse => {
    if (!email || !password) {
      return { success: false, message: 'Email and password are required' };
    }

    if (!email.includes('@')) {
      return { success: false, message: 'Invalid email format' };
    }

    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters' };
    }

    if (admin) {
      if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
        return { success: false, message: 'Invalid admin credentials' };
      }
    }

    const loggedUser: User = {
      email,
      name: email.split('@')[0],
      isAdmin: admin,
    };

    setUser(loggedUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));
    }

    return { success: true, message: 'Login successful' };
  };

  const register = (email: string, password: string, name: string): AuthResponse => {
    if (!name || !email || !password) {
      return { success: false, message: 'All fields are required' };
    }

    if (name.trim().length < 2) {
      return { success: false, message: 'Name must be at least 2 characters' };
    }

    if (!email.includes('@')) {
      return { success: false, message: 'Invalid email format' };
    }

    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters' };
    }

    const newUser: User = {
      email,
      name: name.trim(),
      isAdmin: false,
    };

    setUser(newUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    }

    return { success: true, message: 'Registration successful' };
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}