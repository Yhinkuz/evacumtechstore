'use client';


import { createContext, useState, ReactNode } from 'react';
import { User } from '../types/user';


interface AuthContextType {
user: User | null;
isAdmin: boolean;
login: (email: string, admin?: boolean) => void;
logout: () => void;
}


export const AuthContext = createContext<AuthContextType | null>(null);


export function AuthProvider({ children }: { children: ReactNode }) {
const [user, setUser] = useState<User | null>(null);
const [isAdmin, setIsAdmin] = useState(false);


const login = (email: string, admin = false) => {
setUser({ email, name: email.split('@')[0] });
setIsAdmin(admin);
};


const logout = () => {
setUser(null);
setIsAdmin(false);
};


return (
<AuthContext.Provider value={{ user, isAdmin, login, logout }}>
{children}
</AuthContext.Provider>
);
}