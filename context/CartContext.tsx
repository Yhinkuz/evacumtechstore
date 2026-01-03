'use client';

import { createContext, useState, ReactNode } from 'react';
import { Product } from '../types/product';

interface CartItem extends Product {
	quantity: number;
}

interface CartContextType {
	cart: CartItem[];
	addToCart: (product: Product) => void;
	removeFromCart: (id: number) => void;
	updateQuantity: (id: number, quantity: number) => void;
	clearCart: () => void;
	total: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>(() => {
		if (typeof window === 'undefined') return [];
		const saved = localStorage.getItem('cart');
		return saved ? (JSON.parse(saved) as CartItem[]) : [];
	});

	const sync = (data: CartItem[]) => {
		setCart(data);
		localStorage.setItem('cart', JSON.stringify(data));
	};

	const addToCart = (product: Product) => {
		const exists = cart.find(i => i.id === product.id);
		const updated = exists
			? cart.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
			: [...cart, { ...product, quantity: 1 }];

		sync(updated);
	};

	const removeFromCart = (id: number) => {
		sync(cart.filter(i => i.id !== id));
	};

	const updateQuantity = (id: number, quantity: number) => {
		if (quantity <= 0) return removeFromCart(id);
		sync(cart.map(i => i.id === id ? { ...i, quantity } : i));
	};

	const clearCart = () => {
		setCart([]);
		localStorage.removeItem('cart');
	};

	const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
			{children}
		</CartContext.Provider>
	);
};