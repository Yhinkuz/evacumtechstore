'use client';

import React from 'react';
import Image from 'next/image';
import { Plus, Minus, Trash2, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Product } from '../types/product';

// UI Cart Sidebar
interface CartItem extends Product {
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button onClick={onClose} className="hover:bg-gray-100 p-2 rounded">
              <X size={24} />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4 p-4 overflow-y-auto">
              {cart.map((item: CartItem) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-blue-600 font-bold">₦{item.price.toLocaleString()}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 p-1 rounded">
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 p-1 rounded">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50 p-2 rounded">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex-1" />
          {cart.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-blue-600">₦{total.toLocaleString()}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Checkout
              </button>
              <button onClick={clearCart} className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
