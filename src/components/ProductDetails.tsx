export default function ProductDetails() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 text-center">
      <p>
        <span className="mr-1 align-top text-xl font-semibold text-red-500">$</span>
        <span className="text-3xl font-semibold text-red-500">57</span>
      </p>
      <div className="h-0.5 w-2/3 bg-neutral-200" />
      <h1 className="wrap text-6xl font-bold tracking-tight text-gray-900">
        Kinto Travel Tumbler
      </h1>
      <div className="h-0.5 w-2/3 bg-neutral-200" />
      <p className="leading-loose text-neutral-500">
        The Kinto Travel Tumbler is a compact, double-walled bottle for hot or cold
        beverages. The two part lid allows for easy filling, cleaning, and drinking (from
        any angle), yet it’s completely spill-proof and perfect for on-the-go.
      </p>
    </div>
  );
}
