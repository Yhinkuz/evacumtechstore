'use client';


import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';


export default function HomePage() {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
{PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
</div>
);
}