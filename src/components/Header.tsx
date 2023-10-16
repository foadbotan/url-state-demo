import { HiOutlineShoppingBag as CartIcon } from 'react-icons/hi';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <div className=" bg-stone-500 w-8 h-8 rounded-full" />
      <CartIcon className=" text-stone-500" size={32} />
    </header>
  );
}
