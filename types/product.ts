// src/types/product.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'electronics' | 'accessories' | 'misc';
  stock: number;
  description?: string;
}