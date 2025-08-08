import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Northeast Web Studio</h3>
          <p className="text-sm">
            Web design agency crafting sleek, high-performance sites for growing
            businesses.
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
              <Link href="/#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm">Sydney Wells<br />Northeast Ohio</p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="mailto:contact@example.com"
              className="hover:scale-110 transition-transform"
            >
              <Image src="/file.svg" alt="Email" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

