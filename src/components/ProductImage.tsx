import Image from 'next/image';

export default function ProductImage({ color }: { color: string }) {
  return (
    <div className="overflow-hidden">
      <Image
        src={`/${color}.webp`}
        alt="Kinto Travel Tumbler"
        className="scale-[1.8] transform"
        width={1480}
        height={1836}
        priority
      />
    </div>
  );
}
