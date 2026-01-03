'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '../types/user';

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('user');
    if (!saved) return null;
    try {
      return JSON.parse(saved) as User;
    } catch (err) {
      console.error('Failed to parse saved user from localStorage:', err);
      localStorage.removeItem('user');
      return null;
    }
  });

  const login = (email: string, password: string, admin = false) => {
    // Dummy login: replace with real API call
    const loggedUser: User = { email, name: email.split('@')[0], isAdmin: admin };
    setUser(loggedUser);
    localStorage.setItem('user', JSON.stringify(loggedUser));

    if (admin) router.push('/admin');
    else router.push('/');
  };

  const register = (email: string, password: string, name: string) => {
    const newUser: User = { email, name, isAdmin: false };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    router.push('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  return { user, login, logout, register };
}
