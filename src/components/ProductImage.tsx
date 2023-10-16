import Image from 'next/image';

export default function ProductImage({ color }: { color: string }) {
  return (
    <div className="max-w-xl overflow-hidden">
      <Image
        src={`/${color}.webp`}
        alt="Kinto Travel Tumbler"
        className="h-full w-full scale-[1.8] transform object-contain object-center"
        width={1000}
        height={1000}
      />
    </div>
  );
}
