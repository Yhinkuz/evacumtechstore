// src/components/Header.tsx
'use client';

import React, { useState } from 'react';
import { ShoppingCart, LogOut, Search, Menu, X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
    setMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer hover:text-blue-200 transition">
              EvacumTechStore
            </h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-200 transition">Products</Link>
            <Link href="/about" className="hover:text-blue-200 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-white/10 rounded-lg px-4 py-2">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none outline-none ml-2 w-48 placeholder-white/60 text-white"
            />
          </div>

          <button
            onClick={onCartClick}
            className="relative hover:bg-white/10 p-2 rounded-lg transition"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>

          {user ? (
            <div className="flex items-center space-x-2">
              <span className="hidden md:inline text-sm">
                {user.name}
                {user.isAdmin && (
                  <span className="ml-1 text-xs bg-yellow-500 text-gray-900 px-2 py-0.5 rounded">
                    Admin
                  </span>
                )}
              </span>
              {user.isAdmin && (
                <Link
                  href="/admin/dashboard"
                  className="hidden md:block text-sm bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition"
                >
                  Dashboard
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="hover:bg-white/10 p-2 rounded-lg transition"
                aria-label="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Link href="/login" className="hover:underline px-3 py-1 rounded hover:bg-white/10 transition">
                Login
              </Link>
              <Link href="/register" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition font-semibold">
                Register
              </Link>
            </div>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden hover:bg-white/10 p-2 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden mt-2 pb-4 space-y-2 px-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:bg-white/10 px-4 py-2 rounded">
            Home
          </Link>
          <Link href="/products" onClick={() => setMenuOpen(false)} className="block hover:bg-white/10 px-4 py-2 rounded">
            Products
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:bg-white/10 px-4 py-2 rounded">
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:bg-white/10 px-4 py-2 rounded">
            Contact
          </Link>
          {user ? (
            <>
              <div className="px-4 py-2 text-sm border-t border-white/20">
                Logged in as: <strong>{user.name}</strong>
              </div>
              {user.isAdmin && (
                <Link href="/admin/dashboard" onClick={() => setMenuOpen(false)} className="block hover:bg-white/10 px-4 py-2 rounded">
                  Admin Dashboard
                </Link>
              )}
              <button onClick={handleLogout} className="w-full text-left hover:bg-white/10 px-4 py-2 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setMenuOpen(false)} className="block hover:bg-white/10 px-4 py-2 rounded">
                Login
              </Link>
              <Link href="/register" onClick={() => setMenuOpen(false)} className="block hover:bg-white/10 px-4 py-2 rounded">
                Register
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
