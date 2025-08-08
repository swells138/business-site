'use client';
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { href: '/#services', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#process', label: 'Process' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4 font-sans">
        <Link href="/" className="mr-8 font-bold text-xl nav-link">
          NWS
        </Link>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link hover:text-amber-400">
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#contact"
          className="ml-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-md transition-colors nav-link"
        >
          Request a Demo
        </Link>
      </div>
    </nav>
  );
}

