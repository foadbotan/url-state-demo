import Logo from './Logo';

export default function ProductSelection({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-80 flex-col items-center justify-between gap-12 text-center">
      <Logo />
      {children}
      <button className="w-2/3 bg-neutral-800 py-4 font-bold text-white hover:bg-neutral-950">
        Buy
      </button>
    </div>
  );
}
