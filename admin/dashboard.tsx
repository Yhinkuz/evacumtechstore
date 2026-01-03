'use client';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-800 text-white p-6 shadow-lg flex justify-between max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={logout} className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition">
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex space-x-2 mb-6">
          <button onClick={() => setActiveTab('overview')} className={`px-6 py-2 rounded-lg font-semibold ${activeTab==='overview'?'bg-blue-600 text-white':'bg-white text-gray-700'}`}>
            Overview
          </button>
          <button onClick={() => setActiveTab('products')} className={`px-6 py-2 rounded-lg font-semibold ${activeTab==='products'?'bg-blue-600 text-white':'bg-white text-gray-700'}`}>
            Products
          </button>
        </div>

        {activeTab === 'overview' && <div>...Your stats and orders...</div>}
        {activeTab === 'products' && <div>...Product management...</div>}
      </div>
    </div>
  );
}
