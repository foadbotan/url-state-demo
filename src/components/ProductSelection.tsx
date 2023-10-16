import Logo from './Logo';

export default function ProductSelection({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-start">
      <div className="flex w-80 flex-col items-center justify-between text-center">
        <Logo />
        {children}
        <button className="w-2/3 bg-neutral-800 py-4 font-bold text-white hover:bg-neutral-950">
          Buy
        </button>
      </div>
    </section>
  );
}
