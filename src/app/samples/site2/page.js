export const metadata = {
  title: 'Sample Site 2 - Northeast Web Studio',
};

import Link from 'next/link';

export default function Site2() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 space-y-4">
      <h1 className="text-4xl font-bold text-center">Pop-up Shop</h1>
      <p className="max-w-2xl mx-auto text-center">
        This example site highlights a modern portfolio design suitable for freelancers and agencies alike.
      </p>
      <div className="text-center mt-6">
        <Link href="/" className="text-amber-600 underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
