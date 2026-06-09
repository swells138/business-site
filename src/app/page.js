'use client';
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
    <main className="font-sans bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <section
        id="hero"
        className="grid min-h-[92vh] md:grid-cols-[1.05fr_0.95fr] bg-zinc-100 pt-20 dark:bg-zinc-950"
      >
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 reveal">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-600">
            Northeast Ohio web design
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Get a professional small-business website live without dragging it out for months.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Northeast Web Studio builds clean, mobile-friendly websites for local shops, service businesses, makers, and first-time founders who need more trust, calls, bookings, and clicks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
            >
              Request a Free Website Plan
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-300 px-6 py-3 font-semibold text-zinc-900 transition-colors hover:border-amber-500 hover:text-amber-600 dark:border-zinc-700 dark:text-zinc-100"
            >
              See Example Sites
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-zinc-300 pt-6 text-left dark:border-zinc-800">
            <div>
              <p className="text-2xl font-bold text-amber-600">1-2 wk</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">typical launch</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-600">$300+</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">starter builds</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-600">30 days</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">launch support</p>
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px] reveal">
          <Image
            src="/images/building (1).png"
            alt="Downtown building representing Northeast Ohio small business"
            fill
            priority
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/15 via-transparent to-amber-500/25" />
          <div className="absolute bottom-6 left-6 right-6 rounded-md bg-white/90 p-5 shadow-xl backdrop-blur dark:bg-zinc-950/85">
            <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              Built for practical local businesses
            </p>
            <p className="mt-2 text-lg font-bold">
              Clear services, fast pages, simple contact, and a site customers can trust from their phone.
            </p>
          </div>
        </div>
      </section>

      <section className="reveal border-y border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 text-sm font-semibold text-zinc-700 sm:grid-cols-3 dark:text-zinc-200">
          <p>Mobile-first layouts that work on real customer screens</p>
          <p>Simple pricing before the project starts</p>
          <p>Copy, SEO basics, launch, and handoff handled with you</p>
        </div>
      </section>

      <ServiceCards />

      <section
        id="portfolio"
        className="reveal py-24 bg-zinc-50 dark:bg-zinc-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-600">
              Example work
            </p>
            <h2 className="text-4xl font-bold">Sites made for the kinds of customers you serve</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Use these as starting points, then we shape the words, pages, and look around your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {previewSites.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <article className="relative overflow-hidden rounded-md shadow-lg transition-transform duration-200 group-hover:shadow-xl group-hover:-translate-y-1">
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
                    <span className="bg-amber-500 group-hover:bg-amber-600 text-white px-3 py-1 rounded">
                      View Project
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="reveal py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-600">
                How launch works
              </p>
              <h2 className="text-4xl font-bold">A clear path from “we need a site” to “send people here.”</h2>
              <p className="mt-5 text-zinc-600 dark:text-zinc-300">
                You do not need a giant brand strategy project to look legitimate online. You need the right pages, clear calls to action, and a build that is easy to keep alive.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["1", "Plan", "We map your offer, audience, pages, and the fastest route to a useful first launch."],
                ["2", "Write & design", "We turn your services, photos, and story into a polished mobile-first experience."],
                ["3", "Build & revise", "You review a working site, request changes, and approve the final version."],
                ["4", "Launch & support", "We connect the domain, publish the site, and stay close for post-launch fixes."],
              ].map(([step, title, text]) => (
                <div key={step} className="rounded-md border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
                  <p className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 font-bold text-white">
                    {step}
                  </p>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="reveal bg-zinc-950 py-24 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-400">
            Start here
          </p>
          <h2 className="text-4xl font-bold">Tell me what you do. I’ll send back a practical website plan.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Share your business, timeline, and what you want customers to do next. You will get a straightforward recommendation for pages, package, and next steps.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Request My Website Plan
          </Link>
        </div>
      </section>

      <p className="text-xs text-zinc-500 text-center py-8">
        Northeast Web Studio is a trade name of Sydney Wells, sole proprietor.
      </p>
    </main>
  );
}
