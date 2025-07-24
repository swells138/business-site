import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-zinc-100 p-4 flex space-x-6 shadow-md">
      <Link href="/" className="font-semibold text-amber-400 hover:text-amber-300">
        Home
      </Link>
      <Link href="/about" className="hover:text-amber-300">
        About
      </Link>
      <Link href="/contact" className="hover:text-amber-300">
        Contact
      </Link>
    </nav>
  );
}
