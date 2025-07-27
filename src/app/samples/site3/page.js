export const metadata = {
  title: 'Sample Site 3 - Northeast Web Studio',
  description: 'Photography blog homepage with inviting hero section.',
};

import Link from 'next/link';

export default function Site3() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 space-y-4">
      <h1 className="text-4xl font-bold text-center">Photography</h1>
      <p className="max-w-2xl mx-auto text-center">
        Here we showcase a simple blog homepage layout with clear typography and an inviting hero section.
      </p>
      <div className="text-center mt-6">
        <Link href="/" className="text-amber-600 underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
