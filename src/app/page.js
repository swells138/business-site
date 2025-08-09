'use client';
// Template redesigned for sleek modern web agency
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { sampleSites } from "../data/sampleSites";
import ServiceCards from "./components/ServiceCards";

export default function Home() {
  const previewSites = sampleSites.slice(0, 6);


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
      <ServiceCards />

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

