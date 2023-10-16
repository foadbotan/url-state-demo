import link from 'next/link';

const links = ['Details', 'Gallery', 'Reviews'];

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-6 divide-solid divide-x divide-stone-400">
      {links.map((link) => (
        <div
          key={link}
          className="text-stone-500 hover:text-stone-600 px-4 cursor-pointer"
        >
          {link}
        </div>
      ))}
    </footer>
  );
}
