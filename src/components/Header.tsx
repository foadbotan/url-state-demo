import { HiOutlineShoppingBag as CartIcon } from 'react-icons/hi';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 sm:p-10">
      <div className=" h-8 w-8 rounded-full bg-stone-500" />
      <CartIcon className=" text-stone-500" size={32} />
    </header>
  );
}
