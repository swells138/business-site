export const metadata = {
  title: 'About - Northeast Web Studio',
  description: 'Learn more about Northeast Web Studio',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 p-8 space-y-4">
      <h1 className="text-4xl font-bold text-amber-400">About Us</h1>
      <p className="text-zinc-300 max-w-2xl">
        We craft websites for local businesses in Cleveland and beyond. Quality and reliability are at the core of every project.
      </p>
    </main>
  );
}
