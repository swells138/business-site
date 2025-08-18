import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://northeastwebstudio.com"),
  title: {
    default: "Northeast Web Studio",
    template: "%s | Northeast Web Studio",
  },
  description: "Northeast Ohio Web Studio - Crafting Beautiful Websites",
  openGraph: {
    title: "Northeast Web Studio",
    description: "Northeast Ohio Web Studio - Crafting Beautiful Websites",
    url: "https://northeastwebstudio.com/",
    siteName: "Northeast Web Studio",
    images: [
      {
        url: "/images/rustbelt.png",
        width: 1200,
        height: 800,
        alt: "Northeast Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northeast Web Studio",
    description: "Northeast Ohio Web Studio - Crafting Beautiful Websites",
    images: ["/images/rustbelt.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100`}>
        <Navbar />
        <div className="pt-24">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

