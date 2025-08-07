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
    <nav className="bg-zinc-900 text-zinc-100 p-4 flex items-center shadow-md">
      <div className="flex space-x-6">
        <Link href="/" className={linkClasses('/')}>Home</Link>
        <Link href="/about" className={linkClasses('/about')}>About</Link>
        <Link href="/services" className={linkClasses('/services')}>Services</Link>
        <Link href="/samples" className={linkClasses('/samples')}>Samples</Link>
        <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
      </div>
      <Link
        href="/contact#contact-form"
        className="ml-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded"
      >
        Request a Demo
      </Link>
    </nav>
  );
}
