import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/src/components/layout/Navbar";
import "./globals.css";
import BackToTopButton from "../components/ui/BackToTopButton";

import Footer from "@/src/components/layout/Footer";
import JsonLd from "@/src/components/seo/JsonLd";
import { site, isPreview } from "@/src/data/site";
import { identitySchema } from "@/src/lib/seo";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Isaiah Quintana" },
  description: site.description,
  applicationName: "Portfolio Isaiah Quintana",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: "es_ES",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image"],
  },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  robots: isPreview
    ? { index: false, follow: true }
    : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#0a0a0a] text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Saltar al contenido
        </a>
        <JsonLd data={identitySchema} />
        <Navbar />
        {children}
        <Footer />
        <BackToTopButton />
        <Analytics />
      </body>
    </html>
  );
}
