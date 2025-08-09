import Link from 'next/link';
import { services } from '../../data/services';

export default function ServiceCards() {
  return (
    <section
      id="services"
      className="reveal py-24 max-w-6xl mx-auto px-6 text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
        {services.map((service) => (
          <div
            key={service.name}
            className={`relative flex flex-col h-full rounded-2xl border p-6 md:p-8 shadow-sm space-y-4 transition-transform duration-200 hover:shadow-md motion-safe:hover:-translate-y-1 motion-reduce:hover:transform-none bg-white dark:bg-zinc-800 ${service.featured ? 'ring-2 ring-amber-400 bg-amber-50 dark:bg-amber-900/20' : ''}`}
          >
            {service.tag && (
              <span className="absolute right-4 top-4 bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                {service.tag}{/* Edit badge text in services data */}
              </span>
            )}
            <h3 className="text-2xl font-semibold">{service.name}</h3>
            <p className="text-3xl font-semibold text-amber-500">
              {service.price}{/* Edit price in services data */}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {service.bestFor}
            </p>
            <div>
              <h4 className="font-semibold">Features</h4>
              <ul className="list-disc list-inside text-sm leading-tight space-y-1">
                {service.features.slice(0, 5).map((feat) => (
                  <li key={feat}>{feat}{/* Edit feature bullets in services data */}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Why choose this</h4>
              <ul className="list-disc list-inside text-sm leading-tight space-y-1">
                {service.whyChoose.slice(0, 5).map((why) => (
                  <li key={why}>{why}{/* Edit why-choose bullets in services data */}</li>
                ))}
              </ul>
            </div>
            <Link
              href="/#contact"
              aria-label={`${service.cta} – ${service.name}`}
              className="mt-auto w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              {service.cta}{/* Edit CTA text in services data */}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
