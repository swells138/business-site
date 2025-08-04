'use client';
// Template: Rust Belt-Inspired Web Services Site — Moody + Cool Look
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { sampleSites } from "../data/sampleSites";

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const previewSites = sampleSites.slice(0, 3);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/sydneywells103@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send.');
      }
    } catch {
      setStatus('Failed to send.');
    }
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 px-4 sm:px-8 py-12 space-y-16 font-sans">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left order-last md:order-first">
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400 drop-shadow">
            Northeast Web Studio
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-md mx-auto md:mx-0">
            Clean, fast websites built in the Rust Belt.
          </p>
          <ul className="text-zinc-300 space-y-1 md:list-disc md:pl-6 text-left md:text-left max-w-md mx-auto md:mx-0">
            <li>🍔 Food trucks</li>
            <li>🛍️ Boutiques</li>
            <li>🔨 Contractors</li>
            <li>🏪 Local shops</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded"
          >
            Get a Free Quote
          </Link>
        </div>
        <Image
          src="/images/foodtruck.png"
          alt="Website demo"
          width={1200}
          height={800}
          priority
          className="w-full rounded-xl shadow-2xl border border-zinc-700 object-cover"
          style={{ maxHeight: "450px" }}
        />
      </section>

      <section className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-400 drop-shadow">Services</h2>
        <p className="text-zinc-300">
          From single-page sites for food trucks to multi-page websites for boutiques, contractors, and local shops—I build clean, fast, and mobile-friendly websites that make your business look professional.
        </p>
        <ul className="space-y-1 text-zinc-300">
          <li>✅ Starter sites from $300</li>
          <li>✅ Multi-page sites from $800</li>
          <li>✅ Mobile-friendly + basic SEO</li>
          <li>✅ Live in under 2 weeks</li>
        </ul>
        <Link
          href="/services"
          className="inline-block bg-yellow-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded"
        >
          View Full Service Details
        </Link>
      </section>

      <section className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold text-amber-400 drop-shadow">Samples</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {previewSites.map((site) => (
            <div key={site.href} className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 space-y-2 shadow">
              <Image
                src={site.image}
                alt={`${site.title} preview`}
                width={400}
                height={250}
                className="rounded-lg w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-amber-300">{site.title}</h3>
              <p className="text-zinc-300 text-sm">{site.snippet}</p>
            </div>
          ))}
        </div>
        <p>
          <Link href="/samples" className="text-amber-300 underline">
            View all sample sites
          </Link>
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-zinc-900/40 rounded-xl p-8">
        <Image
          src="/images/building (2).png"
          alt="moody coding setup"
          width={1200}
          height={800}
          className="w-full object-cover rounded-xl shadow-xl border border-zinc-700 order-first md:order-none"
          style={{ maxHeight: "400px" }}
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-400">About</h2>
          <p className="text-zinc-300">
            I am a Navy veteran turned web dev based in Northeast Ohio. I build legit sites for local businesses that
            want to stand out online. Everything I make is sharp, mobile-friendly, and just works.
          </p>
        </div>
      </section>

      <section className="max-w-xl mx-auto bg-zinc-900 rounded-xl p-8 text-center space-y-4 shadow-inner border border-zinc-700">
        <h2 className="text-3xl font-bold text-amber-400">Contact</h2>
        <p className="text-lg text-zinc-300">Want a website or have a question? Let&apos;s talk.</p>

        <p>Email: <a href="mailto:sydneywells103@gmail.com" className="text-amber-300 underline">sydneywells103@gmail.com</a></p>
        <p className="text-zinc-400">Based in Northeast Ohio and proud to serve small businesses in the Cleveland area.</p>

        <h3 className="text-2xl font-bold text-amber-400 mt-6">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            required
            className="w-full p-2 rounded bg-zinc-800 border border-zinc-700"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded w-full"
          >
            Send
          </button>
          {status && (
            <p className="text-sm text-center text-amber-300">{status}</p>
          )}
        </form>
      </section>

      <p className="text-xs text-zinc-500 text-center pt-8">
        Northeast Web Studio is a trade name of Sydney Wells, sole proprietor.
      </p>

    </main>
  );
}
