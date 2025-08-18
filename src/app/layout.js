const siteUrl = "https://northeastwebstudio.com";

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
        url: `${siteUrl}/og.jpg`,  // full absolute URL
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
    images: [`${siteUrl}/og.jpg`],
  },
  robots: { index: true, follow: true },
};
