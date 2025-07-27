'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (href) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
    return `${isActive ? 'font-semibold text-amber-400' : ''} hover:text-amber-300`;
  };

  return (
    <nav className="bg-zinc-900 text-zinc-100 p-4 flex space-x-6 shadow-md">
      <Link href="/" className={linkClasses('/')}>Home</Link>
      <Link href="/about" className={linkClasses('/about')}>About</Link>
      <Link href="/services" className={linkClasses('/services')}>Services</Link>
      <Link href="/samples" className={linkClasses('/samples')}>Samples</Link>
      <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
    </nav>
  );
}
