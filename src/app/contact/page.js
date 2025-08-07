export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 p-8 space-y-8 text-center">
      <div className="bg-zinc-900 rounded-xl p-8 max-w-xl mx-auto shadow-inner border border-zinc-700 space-y-4 text-center">
        <h2 className="text-2xl font-bold text-amber-400">Send a Message</h2>
        <iframe
          id="contact-form"
          src="https://app.hellobonsai.com/f/b0d94697a5335e9?embed=true"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ border: 'none', minHeight: '600px' }}
        ></iframe>
        <div className="text-zinc-400 text-sm pt-4 border-t border-zinc-800">
          <p>Email: <a href="mailto:sydneywells103@gmail.com" className="text-amber-300 underline">sydneywells103@gmail.com</a></p>
          <p>Based in Northeast Ohio • Serving Cleveland & beyond</p>
        </div>
      </div>
    </main>
  );
}
