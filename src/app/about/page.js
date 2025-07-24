export const metadata = {
  title: 'About - Northeast Web Studio',
  description: 'Learn more about Northeast Web Studio',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 p-8 space-y-6">
      <h1 className="text-4xl font-bold text-amber-400">About Us</h1>
      <p className="text-zinc-300 max-w-2xl">
        Northeast Web Studio is proudly based in Ohio. My name is Sydney—born and raised here in the Buckeye State—and I served in the U.S. Navy before shifting my focus to building websites and other creative projects.
      </p>
      <p className="text-zinc-300 max-w-2xl">
        When I’m not coding, you’ll find me fixing up my house or hanging out with my three cats and rambunctious boxer. I believe in quality, reliability, and building lasting relationships with my clients.
      </p>
      <div className="bg-zinc-900 rounded-xl p-6 max-w-xl shadow-inner border border-zinc-700 space-y-2">
        <h2 className="text-xl font-bold text-amber-400">Why Work With Me?</h2>
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>Veteran-owned and operated</li>
          <li>Personal, hands-on approach to every project</li>
          <li>Committed to clear communication and fast turnaround</li>
          <li>Deep roots in the Northeast Ohio community</li>
        </ul>
      </div>
      <p className="text-zinc-400 text-sm pt-4">
        Let’s build something great together—whether it’s your next website or your next big idea.
      </p>
    </main>
  );
}
