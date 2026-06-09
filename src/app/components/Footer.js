import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Northeast Web Studio</h3>
          <p className="text-sm">
            Fast, affordable websites for local businesses that need more trust,
            calls, bookings, and simple online momentum.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/#services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/#process" className="hover:underline">
                Process
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm">Sydney Wells<br />Northeast Ohio</p>
          <Link
            href="mailto:sydneywells103@gmail.com"
            className="mt-4 inline-block text-sm font-semibold text-amber-300 hover:underline"
          >
            sydneywells103@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
