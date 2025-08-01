'use client';
// Template: Rust Belt-Inspired Web Services Site — Moody + Cool Look
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

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
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400 tracking-tight drop-shadow">
            Northeast Web Studio
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-md">
            Web design forged in the Rust Belt. Clean. Fast. Built to last.
          </p>
          <p className="text-lg md:text-xl text-zinc-300 max-w-md">
            Affordable, mobile-friendly websites for local businesses. Get online fast—with a site that works as hard as you do.
          </p>
        </div>
        <Image
          src="/images/building (1).png"
          alt="Rust Belt theme"
          width={1200}
          height={800}
          priority
          className="w-full rounded-xl shadow-2xl border border-zinc-700 object-cover"
          style={{ maxHeight: "450px" }}
        />
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

      <section className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-400 drop-shadow">Services</h2>
        <p className="text-zinc-300">
          From simple landing pages to multi-page sites, I build fast and reliable websites and offer ongoing maintenance.
        </p>
        <p>
          <Link href="/services" className="text-amber-300 underline">
            View full service details
          </Link>
        </p>
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
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded w-full"
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
