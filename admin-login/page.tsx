'use client';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, true); // admin login
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Admin Portal</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
              required
            />
          </div>
          <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
            Admin Sign In
          </button>
        </form>
        <p className="mt-6 text-center">
          <a href="/login" className="text-gray-600 hover:text-gray-800">
            Back to User Login
          </a>
        </p>
      </div>
    </div>
  );
}
