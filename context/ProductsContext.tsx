// src/context/ProductsContext.tsx
'use client';

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import { Product } from '../types/product';
import { PRODUCTS as INITIAL_PRODUCTS } from '../data/products';

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: number, updates: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  getProductById: (id: number) => Product | undefined;
}

const STORAGE_KEY = 'evacumtech_products';

export const ProductsContext = createContext<ProductsContextType | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  // Load products from localStorage on mount
  useEffect(() => {
    const loadProducts = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setProducts(parsed);
          } else {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
          }
        } else {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
        }
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    loadProducts();
  }, []);

  const addProduct = useCallback((product: Product): void => {
    setProducts((prev) => {
      const updated = [...prev, product];
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const updateProduct = useCallback(
    (id: number, updates: Partial<Product>): void => {
      setProducts((prev) => {
        const updated = prev.map((p) =>
          p.id === id ? { ...p, ...updates } : p
        );
        if (typeof window !== 'undefined') {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        }
        return updated;
      });
    },
    []
  );

  const deleteProduct = useCallback((id: number): void => {
    setProducts((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const getProductById = useCallback(
    (id: number): Product | undefined => {
      return products.find((p) => p.id === id);
    },
    [products]
  );

  const value: ProductsContextType = useMemo(
    () => ({
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductById,
    }),
    [products, addProduct, updateProduct, deleteProduct, getProductById]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}