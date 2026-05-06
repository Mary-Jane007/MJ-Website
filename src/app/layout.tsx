import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Dancing_Script,
  Jost,
} from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BRAND, SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();
const defaultTitle = `${BRAND.name} | Interieurarchitectuur ${BRAND.location}`;
const ogImage =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=630&fit=crop&q=80";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND.name,
  description: BRAND.metaDescription,
  url: siteUrl,
  email: SITE.email,
  telephone: SITE.phoneDisplay,
  areaServed: [
    { "@type": "Place", name: "Curaçao" },
    { "@type": "Place", name: "Suriname" },
  ],
  founder: { "@type": "Person", name: BRAND.founder },
  sameAs: [SITE.instagramUrl, SITE.facebookUrl].filter(
    (u) => u && !u.endsWith("facebook.com/"),
  ),
};

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.metaDescription,
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: BRAND.name,
    title: defaultTitle,
    description: BRAND.metaDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `Warm interieur — ${BRAND.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: BRAND.metaDescription,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${jost.variable} ${dancing.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-0 z-[100] -translate-y-full rounded-card-lg bg-cream px-4 py-3 text-sm font-medium text-earth shadow-warm outline-none ring-blush/50 transition focus:translate-y-4 focus:ring-2"
        >
          Ga naar inhoud
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
