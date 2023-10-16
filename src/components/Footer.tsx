import link from 'next/link';

const links = ['Details', 'Gallery', 'Reviews'];

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 p-6 sm:gap-6">
      {links.map((link, index) => (
        <>
          <div
            key={link}
            className="cursor-pointer text-stone-500 hover:text-stone-600 hover:underline"
          >
            {link}
          </div>
          {index !== links.length - 1 && <div className="mx-2 text-stone-500">•</div>}
        </>
      ))}
    </footer>
  );
}
