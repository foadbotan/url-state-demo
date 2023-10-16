'use client';
import ProductDetails from '@/components/ProductDetails';
import ProductImage from '@/components/ProductImage';
import ProductOptions from '@/components/ProductOptions';
import { cn } from '@/lib/cn';
import { useState } from 'react';

const product = {
  name: 'Kinto Travel Tumbler',
  brand: 'Ugmonk',
  price: 57,
  description:
    'The Kinto Travel Tumbler is a compact, double-walled bottle for hot or cold beverages. The two part lid allows for easy filling, cleaning, and drinking (from any angle), yet it’s completely spill-proof and perfect for on-the-go.',

  colors: ['black', 'khaki', 'coyote'],
  sizes: ['400ml', '600ml'],
};

export type Product = typeof product;

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <main className="grid grid-cols-3">
      <ProductDetails
        name={product.name}
        description={product.description}
        price={product.price}
      />

      <ProductImage color={selectedColor} />

      <ProductOptions
        product={product}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </main>
  );
}
