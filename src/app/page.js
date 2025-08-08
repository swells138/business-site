'use client';
// Template redesigned for sleek modern web agency
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { sampleSites } from "../data/sampleSites";

export default function Home() {
  const previewSites = sampleSites.slice(0, 6);

  const services = [
    {
      name: "Starter Site",
      price: "$300–$500",
      bestFor:
        "Best for small businesses, food trucks, or pop-up shops that need a simple online presence fast.",
      features: [
        "Up to 3 pages (Home, About, Contact)",
        "Mobile-friendly responsive design",
        "Basic SEO setup (page titles, meta descriptions)",
        "1 round of revisions",
        "30 days post-launch support",
      ],
      cta: "Get Started",
    },
    {
      name: "Multi-Page Site",
      price: "$800–$1,000",
      bestFor:
        "Best for growing businesses that want more space for content, features, and a polished user experience.",
      features: [
        "Up to 6 pages (Home, About, Services, Portfolio, Blog, Contact)",
        "Mobile-friendly responsive design",
        "Basic SEO setup + image optimization",
        "2 rounds of revisions",
        "45 days post-launch support",
      ],
      cta: "Get Started",
    },
    {
      name: "Hourly Work",
      price: "$30/hour",
      bestFor:
        "Need changes to your existing site or want a unique feature added?",
      features: [
        "Site edits and updates",
        "New page additions",
        "Troubleshooting",
        "Feature enhancements",
      ],
      cta: "Request Help",
    },
    {
      name: "Maintenance Plans",
      price: "Basic $40/mo · VIP $80/mo",
      bestFor:
        "Keep your site running smoothly, secure, and up to date.",
      features: [
        "Hosting help & uptime monitoring",
        "1 minor content update per week (Basic)",
        "Priority support & regular updates (VIP)",
        "Security checks & backups",
      ],
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Extras & Add-ons",
      price: "Starting at $50",
      bestFor: "Enhance your site with optional upgrades.",
      features: [
        "Domain + hosting setup",
        "Simple logo design",
        "Rush project delivery",
      ],
      cta: "Request a Quote",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen grid md:grid-cols-2 bg-zinc-100 dark:bg-[#1c1c1e]"
      >
        <div className="flex flex-col justify-center px-8 space-y-6 reveal">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Northeast Web Studio
          </h1>
          <p className="text-lg md:text-xl max-w-md">
            Web design forged in the Rust Belt. Clean. Fast. Built to last.
          </p>
          <p className="text-lg md:text-xl max-w-md">
            Affordable, mobile-friendly websites for local businesses. Get
            online fast—with a site that works as hard as you do.
          </p>
          <div className="space-x-4 pt-4">
            <Link
              href="/#services"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/#contact"
              className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="relative reveal">
          <Image
            src="/images/building (1).png"
            alt="Rust Belt theme"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="reveal py-24 max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 text-left">
          {services.map((service) => (
            <div
              key={service.name}
              className={`flex flex-col h-full rounded-xl p-8 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white dark:bg-zinc-800 ${service.highlight ? 'bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400' : ''}`}
            >
              <h3 className="text-2xl font-semibold mb-1">{service.name}</h3>
              <p className="text-3xl font-bold text-amber-500 mb-2">{service.price}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                {service.bestFor}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-300 flex-1">
                {service.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="mt-6 inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold text-center py-2 px-4 rounded-md"
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="reveal py-24 bg-zinc-50 dark:bg-zinc-900"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Portfolio</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {previewSites.map((site) => (
              <div
                key={site.href}
                className="relative group rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={site.image}
                  alt={`${site.title} preview`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
                  <h3 className="text-xl font-semibold mb-3">
                    {site.title}
                  </h3>
                  <Link
                    href={site.href}
                    target="_blank"
                    className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="reveal py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-4">
              <Image
                src="/file.svg"
                alt="Discover"
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">1. Discover</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                We learn about your business and goals.
              </p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <Image
                src="/window.svg"
                alt="Design"
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">2. Design</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Craft a custom look that fits your brand.
              </p>
            </div>
            <div className="p-4">
              <Image
                src="/globe.svg"
                alt="Develop"
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">3. Develop</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Build a fast, responsive website.
              </p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <Image
                src="/file.svg"
                alt="Launch"
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">4. Launch</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Deploy and support your new site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="reveal py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-lg mb-6">
            Ready to see what we can build? Visit our contact page to request a
            demo or reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Go to Contact Page
          </Link>
        </div>
      </section>

      <p className="text-xs text-zinc-500 text-center py-8">
        Northeast Web Studio is a trade name of Sydney Wells, sole proprietor.
      </p>
    </main>
  );
}

