import ProductDetails from '@/components/ProductDetails';
import ProductImage from '@/components/ProductImage';
import ProductSelection from '@/components/ProductSelection';
import ProductVariant from '@/components/ProductVariant';
import { cn } from '@/lib/cn';
import { Color, SearchParams, Size } from '@/types';
import Link from 'next/link';
import { z } from 'zod';

const HEX: Record<Color, string> = {
  black: '#2a2a2a',
  green: '#7c7557',
  gold: '#9b6f2a',
};

const colors: Color[] = ['black', 'gold', 'green'];
const sizes: Size[] = ['400ml', '600ml', '800ml'];

const paramsSchema = z.object({
  color: z.enum(['black', 'gold', 'green']).catch(colors[0]),
  size: z.enum(['400ml', '600ml', '800ml']).catch(sizes[0]),
});

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const { color: selectedColor, size: selectedSize } = paramsSchema.parse(searchParams);

  // const searchParams = useSearchParams();
  // const color = searchParams.get('color') as Color | null;
  // const size = searchParams.get('size') as Size | null;

  // const selectedColor = color && colors.includes(color) ? color : colors[0];
  // const selectedSize = size && sizes.includes(size) ? size : sizes[0];

  return (
    <main className="grid max-w-7xl grid-cols-[1fr,2fr,1fr] items-center justify-center">
      <ProductDetails />
      <ProductImage color={selectedColor} />
      <ProductSelection>
        <ProductVariant label="Size" value={selectedSize}>
          {sizes.map((size) => (
            <Link
              href={{
                pathname: '/',
                query: { size, color: selectedColor },
              }}
              key={size}
              className={cn(
                'bg-neutral-200 px-4 py-2',
                selectedSize === size && 'bg-neutral-800 text-neutral-100',
              )}
            >
              {size}
            </Link>
          ))}
        </ProductVariant>
        <ProductVariant label="Color" value={selectedColor}>
          {colors.map((color) => (
            <Link
              key={color}
              href={{
                pathname: '/',
                query: { size: selectedSize, color },
              }}
            >
              <button
                className={cn(
                  'h-8 w-8 rounded-full',
                  selectedColor === color && 'ring-2 ring-neutral-800 ring-offset-2',
                )}
                style={{ backgroundColor: HEX[color] }}
              />
            </Link>
          ))}
        </ProductVariant>
      </ProductSelection>
    </main>
  );
}
