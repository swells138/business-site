export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-28 text-zinc-100 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <section className="space-y-6">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
            Website intake
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Tell me what your business needs. I’ll help turn it into a site people can act on.
          </h1>
          <p className="text-lg leading-8 text-zinc-300">
            Send the basics: what you sell, where customers find you now, when you want to launch, and what a win looks like. You will get a practical recommendation for pages, package, and next steps.
          </p>
          <div className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-3 lg:grid-cols-1">
            <p className="rounded-md border border-zinc-800 bg-zinc-900 p-4">
              Clear pricing before build work starts
            </p>
            <p className="rounded-md border border-zinc-800 bg-zinc-900 p-4">
              Starter launches often fit a 1-2 week timeline
            </p>
            <p className="rounded-md border border-zinc-800 bg-zinc-900 p-4">
              Based in Northeast Ohio, serving Cleveland and beyond
            </p>
          </div>
          <div className="text-sm text-zinc-400">
            <p>
              Prefer email?{" "}
              <a href="mailto:sydneywells103@gmail.com" className="font-semibold text-amber-300 underline">
                sydneywells103@gmail.com
              </a>
            </p>
          </div>
        </section>
        <section className="rounded-md border border-zinc-800 bg-zinc-900 p-4 shadow-2xl sm:p-6">
          <h2 className="mb-4 text-2xl font-bold text-amber-400">Request your website plan</h2>
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
        </section>
      </div>
    </main>
  );
}
