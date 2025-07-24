export const metadata = {
  title: 'Sample Sites - Northeast Web Studio',
  description: 'Preview sample websites built by Northeast Web Studio',
};

import Link from 'next/link';

const sites = [
  {
    title: 'Food Truck',
    href: '/samples/site1',
    snippet: 'A flavorful landing page for a mobile kitchen.',
  },
  {
    title: 'Pop-up Shop',
    href: '/samples/site2',
    snippet: 'Quick-hit retail presence for short-term shops.',
  },
  {
    title: 'Photography Portfolio',
    href: '/samples/site3',
    snippet: 'Clean gallery layout to highlight your work.',
  },
  {
    title: 'Dog Grooming',
    href: '/samples/site4',
    snippet: 'Bright design for pet care services.',
  },
];

export default function SamplesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 p-8 space-y-8">
      <h1 className="text-4xl font-bold text-amber-400 text-center">Sample Sites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sites.map((site) => (
          <div key={site.href} className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl space-y-3 shadow">
            <h2 className="text-2xl font-semibold text-amber-300">{site.title}</h2>
            <p className="text-zinc-300">{site.snippet}</p>
            <Link href={site.href} className="text-amber-400 underline">Visit Site</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
