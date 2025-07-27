import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://neastwebstudio.com"),
  title: {
    default: "Northeast Web Studio",
    template: "%s | Northeast Web Studio",
  },
  description: "Northeast Ohio Web Studio - Crafting Beautiful Websites",
  openGraph: {
    title: "Northeast Web Studio",
    description: "Northeast Ohio Web Studio - Crafting Beautiful Websites",
    url: "https://neastwebstudio.com/",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
