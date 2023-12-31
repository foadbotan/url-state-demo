'use client';

import ProductDetails from '@/components/ProductDetails';
import ProductImage from '@/components/ProductImage';
import ProductSelection from '@/components/ProductSelection';
import ProductVariant from '@/components/ProductVariant';
import { cn } from '@/lib/cn';
import { Color, Size } from '@/types';
import { useState } from 'react';

const HEX: Record<Color, string> = {
  black: '#2a2a2a',
  green: '#7c7557',
  gold: '#9b6f2a',
};

const colors: Color[] = ['black', 'gold', 'green'];
const sizes: Size[] = ['400ml', '600ml', '800ml'];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <main className="grid max-w-7xl grid-cols-[1fr,2fr,1fr] items-center justify-center">
      <ProductDetails />
      <ProductImage color={selectedColor} />
      <ProductSelection>
        <ProductVariant label="Size" value={selectedSize}>
          {sizes.map((size) => (
            <button
              key={size}
              className={cn(
                'bg-neutral-200 px-4 py-2',
                selectedSize === size && 'bg-neutral-800 text-neutral-100',
              )}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </ProductVariant>
        <ProductVariant label="Color" value={selectedColor}>
          {colors.map((color) => (
            <button
              key={color}
              className={cn(
                'h-8 w-8 rounded-full',
                selectedColor === color && 'ring-2 ring-neutral-800 ring-offset-2',
              )}
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: HEX[color] }}
            />
          ))}
        </ProductVariant>
      </ProductSelection>
    </main>
  );
}
