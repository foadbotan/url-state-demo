import { cn } from '@/lib/cn';

const HEX_COLORS: Record<string, string> = {
  black: '#2a2a2a',
  khaki: '#7c7557',
  coyote: '#9b6f2a',
};

export default function ColorOption({
  color,
  isSelected,
  setSelectedColor,
}: {
  color: string;
  isSelected: boolean;
  setSelectedColor: (color: string) => void;
}) {
  return (
    <button
      className={cn('h-8 w-8 rounded-full', {
        'ring-2 ring-neutral-800 ring-offset-2': isSelected,
      })}
      style={{ backgroundColor: HEX_COLORS[color] }}
      onClick={() => setSelectedColor(color)}
    ></button>
  );
}
