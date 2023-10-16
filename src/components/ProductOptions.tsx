import { Product } from '@/app/page';
import { cn } from '@/lib/cn';
import ColorOption from './ColorOption';

export default function ProductOptions({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}: {
  product: Product;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}) {
  return (
    <div className="flex justify-start">
      <div className="flex  w-80 flex-col items-center justify-between text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="mr-3 text-3xl font-semibold">Size</p>
          <div>
            {product.sizes.map((size) => (
              <button
                key={size}
                className={cn(
                  'mr-2  px-4 py-2',
                  selectedSize === size
                    ? 'bg-neutral-800 text-white hover:bg-neutral-950'
                    : 'bg-neutral-200 text-neutral-500 hover:bg-neutral-300',
                )}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-3xl font-light">{selectedSize}</p>
        </div>

        <div className="h-0.5 w-1/2 bg-neutral-200" />

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="mr-3 text-3xl font-semibold">Color</p>

          <div className="space-x-2">
            {product.colors.map((color) => (
              // <button
              //   key={color}
              //   className={cn('h-8 w-8 rounded-full', {
              //     'ring-2 ring-neutral-800 ring-offset-2': selectedColor === color,
              //   })}
              //   style={{ backgroundColor: HEX_COLORS[color] }}
              //   onClick={() => setSelectedColor(color)}
              // ></button>
              <ColorOption
                key={color}
                color={color}
                isSelected={selectedColor === color}
                setSelectedColor={setSelectedColor}
              />
            ))}
          </div>
          <p className="text-3xl font-light capitalize">{selectedColor}</p>
        </div>

        <div className="h-0.5 w-1/2 bg-neutral-200" />

        <button className="w-2/3 bg-neutral-800 py-4 font-bold text-white hover:bg-neutral-950">
          Buy
        </button>
      </div>
    </div>
  );
}
