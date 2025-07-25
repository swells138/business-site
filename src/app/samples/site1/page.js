export const metadata = {
  title: 'Sample Site 1 - Northeast Web Studio',
};

import Link from 'next/link';

export default function Site1() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 space-y-4">
      <h1 className="text-4xl font-bold text-center">Food Trucks</h1>
      <p className="max-w-2xl mx-auto text-center">
        Welcome to the first sample site. This simple landing page demonstrates a clean layout for a local coffee shop.
      </p>
      <div className="text-center mt-6">
        <Link href="/" className="text-amber-600 underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
