import Link from 'next/link';
import { services } from '../../data/services';

export default function ServiceCards() {
  return (
    <section
      id="services"
      className="reveal py-24 max-w-6xl mx-auto px-6 text-center"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-600">
        Packages
      </p>
      <h2 className="text-4xl font-bold">Pick the level that matches this season of your business</h2>
      <p className="mx-auto mt-4 mb-12 max-w-2xl text-zinc-600 dark:text-zinc-300">
        Every build is designed to make your business easier to trust, find, and contact from a phone.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
        {services.map((service) => (
          <div
            key={service.name}
            className={`relative flex flex-col h-full rounded-md border p-6 md:p-8 shadow-sm space-y-4 transition-transform duration-200 hover:shadow-md motion-safe:hover:-translate-y-1 motion-reduce:hover:transform-none bg-white dark:bg-zinc-900 ${service.featured ? 'ring-2 ring-amber-400 bg-amber-50 dark:bg-amber-900/20' : ''}`}
          >
            {service.tag && (
              <span className="absolute right-4 top-4 rounded bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                {service.tag}
              </span>
            )}
            <div className="pr-20">
              <h3 className="text-2xl font-semibold">{service.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-amber-500">
                {service.price}
              </p>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {service.bestFor}
            </p>
            <div>
              <h4 className="font-semibold">Features</h4>
              <ul className="list-disc list-inside text-sm leading-tight space-y-1">
                {service.features.slice(0, 5).map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Why choose this</h4>
              <ul className="list-disc list-inside text-sm leading-tight space-y-1">
                {service.whyChoose.slice(0, 5).map((why) => (
                  <li key={why}>{why}</li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              aria-label={`${service.cta} - ${service.name}`}
              className="mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-center font-semibold text-white transition-colors hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              {service.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center max-w-2xl mx-auto">
        All prices shown are estimates to help you understand the typical cost of a website based on your needs. Monthly maintenance is completely optional if you prefer to manage updates yourself.
      </p>
    </section>
  );
}
