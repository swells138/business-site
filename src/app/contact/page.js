export const metadata = {
  title: 'Contact - Northeast Web Studio',
  description: 'Get in touch with Northeast Web Studio',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 p-8 space-y-4">
      <h1 className="text-4xl font-bold text-amber-400">Contact</h1>
      <p className="text-zinc-300">
        Email us at{' '}
        <a href="mailto:sydneywells103@gmail.com" className="text-amber-300 underline">
          sydneywells103@gmail.com
        </a>
        . We look forward to hearing from you.
      </p>
    </main>
  );
}
