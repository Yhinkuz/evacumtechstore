import React from 'react';
import Image from 'next/image';
import { useCart } from '../hooks/useCart';
import { Product as ProductType } from '../types/product';

// Product Card Component
const ProductCard = ({ product }: { product: ProductType }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <Image src={product.image} alt={product.name} width={400} height={192} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">₦{product.price.toLocaleString()}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">Stock: {product.stock}</p>
      </div>
    </div>
  );
};

export default ProductCard;