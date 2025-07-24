'use client';
// Template: Rust Belt-Inspired Web Services Site — Moody + Cool Look
import { useState } from 'react';
import Image from "next/image";

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
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
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
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 px-4 sm:px-8 py-16 space-y-24 font-sans">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-amber-400 tracking-tight drop-shadow">Northeast Web Studio</h1>
        <p className="text-lg text-zinc-300 max-w-xl mx-auto">
          Web design forged in the Rust Belt. Clean. Fast. Built to last.
        </p>
        <Image
          src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-cb90-61f6-b252-5cc6023009ab/raw?se=2025-07-23T03%3A59%3A02Z&sp=r&sv=2024-08-04&sr=b&scid=b9553a3d-645d-5911-a673-6a0a7697bfa9&skoid=0da8417a-a4c3-4a19-9b05-b82cee9d8868&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-22T23%3A10%3A12Z&ske=2025-07-23T23%3A10%3A12Z&sks=b&skv=2024-08-04&sig=5d4Vf%2B/l%2BG4m79hHoMKjTbH55C0RLGcM4SjYgt0%2B81Y%3D"
          alt="Rust Belt theme"
          width={1200}
          height={800}
          className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl border border-zinc-700 object-cover"
          style={{ maxHeight: "500px" }}
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-amber-400">About</h2>
          <p className="text-zinc-300">
            I am a Navy veteran turned web dev based in Northeast Ohio. I build legit sites for local businesses
            that want to stand out online. Everything I make is sharp, mobile-friendly, and just works.
          </p>
        </div>
        <Image
          src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-5904-61fd-8a2e-6a0b21d43f4e/raw?se=2025-07-23T04%3A04%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=1f9a1dc4-9119-5e4f-bbdc-aedf97d6b71a&skoid=0da8417a-a4c3-4a19-9b05-b82cee9d8868&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-22T23%3A10%3A19Z&ske=2025-07-23T23%3A10%3A19Z&sks=b&skv=2024-08-04&sig=R508uNRHC/5MhVXngQh2Y5nXju5EWoFjK89Ijjwo/Ho%3D"
          alt="moody coding setup"
          width={1200}
          height={800}
          className="w-full object-cover rounded-xl shadow-xl border border-zinc-700"
          style={{ maxHeight: "500px" }}
        />
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-10">Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-amber-300">Landing Pages</h3>
            <p className="text-sm text-zinc-400 mt-2">One-page sites that make an impact fast.</p>
          </li>
          <li className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-amber-300">Multi-Page Sites</h3>
            <p className="text-sm text-zinc-400 mt-2">The full package: Home, Services, About, Contact — all polished.</p>
          </li>
          <li className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-amber-300">Fixes & Tweaks</h3>
            <p className="text-sm text-zinc-400 mt-2">Make your current site faster, sharper, and less broken.</p>
          </li>
        </ul>
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

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-amber-400">Website Care Plans</h2>
        <p className="max-w-xl mx-auto text-zinc-300">
          Keep your site running tight. Choose a care plan and never worry about tech headaches.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-amber-300">Basic - $25/mo</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>✔ Monthly edits</li>
              <li>✔ Security checks</li>
              <li>✔ Software updates</li>
            </ul>
          </div>
          <div className="bg-zinc-800 border-2 border-amber-400 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-amber-400">Pro - $50/mo</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>✔ Weekly updates</li>
              <li>✔ Backups + SEO boosts</li>
              <li>✔ Priority support</li>
            </ul>
          </div>
          <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-amber-300">Full - $75/mo</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>✔ Unlimited edits</li>
              <li>✔ Analytics + uptime monitoring</li>
              <li>✔ Monthly strategy call</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
