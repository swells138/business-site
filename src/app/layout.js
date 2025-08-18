// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://northeastwebstudio.com";
const ogImage = "/og.jpg"; // 1200x630 in /public

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Northeast Web Studio",
    template: "%s | Northeast Web Studio",
  },
  description: "Northeast Ohio Web Studio - Crafting Beautiful Websites",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Northeast Web Studio",
    title: "Northeast Web Studio",
    description: "Northeast Ohio Web Studio - Crafting Beautiful Websites",
    images: [
      {
        url: ogImage, // becomes https://northeastwebstudio.com/og.jpg
        width: 1200,
        height: 630,
        alt: "Northeast Web Studio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northeast Web Studio",
    description: "Northeast Ohio Web Studio - Crafting Beautiful Websites",
    images: [ogImage],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
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
