export default function ProductDetails({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) {
  return (
    <div className="flex justify-end">
      <div className="flex w-80 flex-col items-center justify-between text-center">
        <p className="text-3xl font-semibold text-red-500">
          <span className="mr-1 align-top text-xl">$</span>
          {price}
        </p>
        <div className="h-0.5 w-1/2 bg-neutral-200" />
        <h1 className="wrap text-6xl font-bold tracking-tight text-gray-900">{name}</h1>
        <div className="h-0.5 w-1/2 bg-neutral-200" />
        <p className="leading-loose text-neutral-500">{description}</p>
      </div>
    </div>
  );
}
