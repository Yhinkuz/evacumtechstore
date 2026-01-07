// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">EvacumTechStore</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop shop for quality electronics, gadgets, and tech accessories.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-gray-700 p-2 rounded hover:bg-blue-600 transition" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded hover:bg-blue-400 transition" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded hover:bg-pink-600 transition" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition text-sm">Home</Link></li>
              <li><Link href="/products" className="hover:text-white transition text-sm">Products</Link></li>
              <li><Link href="/about" className="hover:text-white transition text-sm">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Shipping Information</Link></li>
              <li><Link href="#" className="hover:text-white transition">Returns & Exchanges</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>support@evacumtechstore.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} EvacumTechStore. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Made in Nigeria</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;