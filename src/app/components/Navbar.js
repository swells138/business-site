'use client';
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { href: '/#services', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-200 bg-white/85 text-zinc-900 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-100">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-3 font-sans sm:px-6">
        <Link href="/" className="mr-6 font-bold text-lg sm:text-xl nav-link">
          Northeast Web Studio
        </Link>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link hover:text-amber-400">
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="ml-auto inline-flex min-h-11 items-center rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-600 sm:text-base"
        >
          Get a Plan
        </Link>
      </div>
    </nav>
  );
}
