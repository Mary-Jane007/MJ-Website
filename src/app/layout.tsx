import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Dancing_Script,
  Jost,
} from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "Mary-Jane Design | Interieurontwerp Curaçao",
    template: "%s | Mary-Jane Design",
  },
  description:
    "Premium persoonlijk interieurontwerp op Curaçao. Tell me your story, I'll design.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "Mary-Jane Design",
    title: "Mary-Jane Design | Interieurontwerp Curaçao",
    description:
      "Premium persoonlijk interieurontwerp op Curaçao. Tell me your story, I'll design.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Warm interieur — Mary-Jane Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mary-Jane Design | Interieurontwerp Curaçao",
    description:
      "Premium persoonlijk interieurontwerp op Curaçao. Tell me your story, I'll design.",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=630&fit=crop&q=80",
    ],
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
