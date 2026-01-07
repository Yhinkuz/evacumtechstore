'use client';

import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { Package, Truck, Shield, HeadphonesIcon } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <Carousel />

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Truck className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Quick and reliable shipping</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600">Safe payment methods</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Package className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold mb-2">Quality Products</h3>
              <p className="text-sm text-gray-600">Authentic tech items</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <HeadphonesIcon className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-green-600 hover:text-blue-200 font-semibold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Upgrade Your Tech?</h2>
          <p className="text-xl mb-8 text-green-100">
            Discover the latest gadgets at unbeatable prices
          </p>
          <Link href="/products">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}