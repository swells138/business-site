import { useState } from 'react';

export const metadata = {
  title: 'Contact - Northeast Web Studio',
  description: 'Get in touch with Northeast Web Studio',
};

export default function ContactPage() {
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
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 p-8 space-y-8">
      <h1 className="text-4xl font-bold text-amber-400">Contact</h1>
      <p className="text-zinc-300 max-w-2xl">
        Have a project in mind, need a quote, or just want to say hello? Fill out the form below or email us directly. We respond to all inquiries within 1 business day.
      </p>
      <div className="bg-zinc-900 rounded-xl p-8 max-w-xl mx-auto shadow-inner border border-zinc-700 space-y-4">
        <h2 className="text-2xl font-bold text-amber-400">Send a Message</h2>
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
        <div className="text-zinc-400 text-sm pt-4 border-t border-zinc-800">
          <p>Email: <a href="mailto:sydneywells103@gmail.com" className="text-amber-300 underline">sydneywells103@gmail.com</a></p>
          <p>Based in Northeast Ohio • Serving Cleveland & beyond</p>
        </div>
      </div>
    </main>
  );
}
