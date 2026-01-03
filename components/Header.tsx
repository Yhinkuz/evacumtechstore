import React, { useState } from 'react';
import { ShoppingCart, User, LogOut, Search, Menu, X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';

interface HeaderProps {
  onCartClick: () => void;
}

// Header Component
const Header = ({ onCartClick }: HeaderProps) => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">EvacumTechStore</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-200 transition">Home</a>
              <a href="#" className="hover:text-blue-200 transition">Products</a>
              <a href="#" className="hover:text-blue-200 transition">About</a>
              <a href="#" className="hover:text-blue-200 transition">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-white/10 rounded-lg px-4 py-2">
              <Search size={18} />
              <input type="text" placeholder="Search products..." className="bg-transparent border-none outline-none ml-2 w-48 placeholder-white/60" />
            </div>
            
            <button onClick={onCartClick} className="relative hover:bg-white/10 p-2 rounded-lg transition">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="hidden md:inline">{user.name}</span>
                <button onClick={logout} className="hover:bg-white/10 p-2 rounded-lg transition">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button className="hover:bg-white/10 p-2 rounded-lg transition">
                <User size={24} />
              </button>
            )}
            
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#" className="block hover:bg-white/10 px-4 py-2 rounded">Home</a>
            <a href="#" className="block hover:bg-white/10 px-4 py-2 rounded">Products</a>
            <a href="#" className="block hover:bg-white/10 px-4 py-2 rounded">About</a>
            <a href="#" className="block hover:bg-white/10 px-4 py-2 rounded">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;