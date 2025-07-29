export const metadata = {
  title: 'Sample Sites - Northeast Web Studio',
  description: 'Preview sample websites built by Northeast Web Studio',
};

import Link from 'next/link';
import Image from 'next/image';

const sites = [
  {
    title: 'Food Trucks',
    href: 'https://foodtruck-site.vercel.app',
    snippet: 'A clean landing page design for a food truck.',
    image: '/images/foodtruck.png', // Add your image path here
  },
   {
    title: 'Pet Salon',
    href: 'https://dogwash-site.vercel.app/',
    snippet: 'Modern portfolio layout showcasing projects.',
    image: '/images/dogwash.png',
  },
  {
    title: 'Pop-up Shop',
    href: 'https://popupshop-site.vercel.app/',
    snippet: 'Modern portfolio layout showcasing projects.',
    image: '/images/Pop-up.png',
  },
  {
    title: 'Photography',
    href: 'https://photography-site-brown.vercel.app/',
    snippet: 'Simple photography blog homepage with inviting typography.',
    image: '/images/Photography.png',
  },
    {
    title: 'Tattoo Shop',
    href: 'https://tattoo-site.vercel.app/',
    snippet: 'Edgy multi-page layout for local tattoo artists.',
    image: '/images/tattoo.png',
  },
  {
    title: 'Custom',
    href: 'https://oddjobs-site.vercel.app/',
    snippet: 'Event landing page featuring a strong call to action.',
    image: '/images/oddjobs.png',
  },
];

export default function SamplesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 p-8 space-y-8">
      <h1 className="text-4xl font-bold text-amber-400 text-center">Sample Sites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sites.map((site) => (
          <div key={site.href} className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl space-y-3 shadow">
            <Image
              src={site.image}
              alt={`${site.title} preview`}
              width={600}
              height={400}
              className="rounded-lg mb-3 w-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-amber-300">{site.title}</h2>
            <p className="text-zinc-300">{site.snippet}</p>
            <Link
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 underline"
            >
              Visit Site
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
