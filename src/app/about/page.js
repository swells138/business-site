export const metadata = {
  title: 'About - Northeast Web Studio',
  description: 'Learn more about Northeast Web Studio',
};

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 px-4 sm:px-8 py-16 space-y-12 font-sans">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-amber-400 drop-shadow">About Us</h1>
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
          Northeast Web Studio is proudly based in Ohio, serving Cleveland and beyond. My name is Sydney, and I’m a Navy veteran, dog/cat lover, and passionate builder—whether it’s websites, furniture, or home renovations.
        </p>
        <Image
          src="/images/rustbelt.png"
          alt="Working on a project"
          width={1200}
          height={800}
          className="w-full max-w-3xl mx-auto rounded-xl shadow-xl border border-zinc-700 object-cover"
          style={{ maxHeight: '400px' }}
        />
      </section>

      <section className="max-w-3xl mx-auto space-y-6">
        <p className="text-zinc-300">
          When I’m not coding, you’ll find me working on my house, spending time with my cats and dog, or exploring new ways to create and improve things. I believe in quality, reliability, and building lasting relationships with my clients.
        </p>
        <div className="bg-zinc-900 rounded-xl p-6 shadow-inner border border-zinc-700 space-y-2">
          <h2 className="text-2xl font-bold text-amber-400">Why Work With Me?</h2>
          <ul className="list-disc pl-6 text-zinc-300 space-y-1">
            <li>Veteran-owned and operated</li>
            <li>Personal, hands-on approach to every project</li>
            <li>Committed to clear communication and fast turnaround</li>
            <li>Deep roots in the Northeast Ohio community</li>
          </ul>
        </div>
        <p className="text-zinc-400 text-sm">
          Let’s build something great together—whether it’s your next website or your next big idea.
        </p>
      </section>
    </main>
  );
}
