export const metadata = {
  title: 'Services - Northeast Web Studio',
  description: 'Website design packages and maintenance plans',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1c1c1e] to-[#2f2f31] text-zinc-100 px-4 sm:px-8 py-12 space-y-16 font-sans">
      <section className="space-y-8 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-amber-400 drop-shadow">Website Design Packages</h1>
        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-xl p-6 shadow border border-zinc-700 text-left">
            <h2 className="text-2xl font-bold text-amber-300">Starter Site — $300–$500</h2>
            <p className="text-zinc-300 mt-2">Best for small businesses, food trucks, or pop-up shops that need a simple online presence fast.</p>
            <h3 className="text-amber-200 font-semibold mt-4">Includes:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-zinc-300">
              <li>Up to 3 pages (Home, About, Contact)</li>
              <li>Mobile-friendly responsive design</li>
              <li>Basic SEO setup (page titles, meta descriptions)</li>
              <li>1 round of revisions</li>
              <li>30 days post-launch support</li>
              <li>Optional add-ons: logo integration, contact form, social media links</li>
            </ul>
            <h3 className="text-amber-200 font-semibold mt-4">Why choose this:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-zinc-300">
              <li>Fastest turnaround (often 1 week)</li>
              <li>Lowest cost</li>
              <li>Perfect for “just need something up” situations</li>
            </ul>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6 shadow border border-zinc-700 text-left">
            <h2 className="text-2xl font-bold text-amber-300">Multi-Page Site — $800–$1,000</h2>
            <p className="text-zinc-300 mt-2">Best for growing businesses that want more space for content, features, and a polished user experience.</p>
            <h3 className="text-amber-200 font-semibold mt-4">Includes:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-zinc-300">
              <li>Up to 6 pages (e.g., Home, About, Services, Portfolio, Blog, Contact)</li>
              <li>Mobile-friendly responsive design</li>
              <li>Basic SEO setup + image optimization for faster load times</li>
              <li>2 rounds of revisions</li>
              <li>45 days post-launch support</li>
              <li>Optional add-ons: blog setup, e-commerce store integration, advanced contact forms, photo gallery</li>
            </ul>
            <h3 className="text-amber-200 font-semibold mt-4">Why choose this:</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-zinc-300">
              <li>More room to tell your story &amp; show your work</li>
              <li>More revisions for a refined look</li>
              <li>Better performance with image optimization</li>
              <li>Flexible for adding advanced features</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-400 drop-shadow">Hourly Work – $30/hour</h2>
        <p className="text-zinc-300">Need changes to your existing site or want a unique feature added? I offer hourly work for things like:</p>
        <ul className="list-disc pl-6 text-left space-y-1 text-zinc-300">
          <li>Site edits and updates</li>
          <li>New page additions</li>
          <li>Troubleshooting</li>
          <li>Feature enhancements</li>
        </ul>
        <p className="text-zinc-400">Perfect for one-off help or upgrades later on.</p>
      </section>

      <section className="space-y-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-400 drop-shadow">Website Maintenance Plans</h2>
        <p className="text-zinc-300">Keep your site running smoothly, secure, and up-to-date with a monthly plan.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse border border-zinc-700">
            <thead>
              <tr className="bg-zinc-800">
                <th className="p-3 border border-zinc-700">Plan</th>
                <th className="p-3 border border-zinc-700">What&apos;s Included</th>
                <th className="p-3 border border-zinc-700">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-zinc-700 font-semibold">Basic</td>
                <td className="p-3 border border-zinc-700">Website hosting help, uptime monitoring, and <strong>1 minor content update per week</strong> (like swapping out a photo or changing text)</td>
                <td className="p-3 border border-zinc-700 font-semibold">$40/month</td>
              </tr>
              <tr className="bg-zinc-800">
                <td className="p-3 border border-zinc-700 font-semibold">VIP</td>
                <td className="p-3 border border-zinc-700">Everything in Basic, plus <strong>priority support</strong> and <strong>regular content updates</strong> (great if you post events, menus, or news often)</td>
                <td className="p-3 border border-zinc-700 font-semibold">$80/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-400 drop-shadow">Extras & Add-ons</h2>
        <ul className="list-disc pl-6 text-left space-y-2 text-zinc-300">
          <li><strong>Domain + Hosting Setup – $50</strong><br/>I’ll help you register a domain, set up your hosting, and connect everything — hands-free for you.</li>
          <li><strong>Simple Logo Design – $50</strong><br/>If you don’t have a logo, I’ll create a clean, custom one to get you started.</li>
          <li><strong>Rush Fee – +20–30%</strong><br/>Need your site live ASAP? I offer expedited timelines with priority scheduling.</li>
        </ul>
      </section>
      <section className="max-w-3xl mx-auto text-center text-sm text-zinc-400">
        <p>Northeast Web Studio is not a registered LLC. All services are provided by Sydney Wells, operating as a sole proprietor.</p>
      </section>
    </main>
  );
}
