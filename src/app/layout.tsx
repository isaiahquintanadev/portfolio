import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/src/components/layout/Navbar";
import "./globals.css";
import BackToTopButton from "../components/ui/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteName = "Isaiah Quintana | Full-stack Developer";
const description =
  "Portfolio de Isaiah Quintana, desarrollador full-stack especializado en Next.js, React, TypeScript, productos SaaS, dashboards, integraciones y aplicaciones web modernas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Isaiah Quintana",
  },
  description,
  applicationName: "Portfolio Isaiah Quintana",
  authors: [{ name: "Isaiah Quintana" }],
  creator: "Isaiah Quintana",
  publisher: "Isaiah Quintana",
  keywords: [
    "Isaiah Quintana",
    "desarrollador full-stack",
    "desarrollador Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "portfolio desarrollador",
    "Supabase",
    "Stripe",
    "Vercel",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description,
    url: "/",
    siteName: "Portfolio Isaiah Quintana",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Isaiah Quintana, desarrollador full-stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[#0a0a0a] text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Saltar al contenido
        </a>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 hidden md:block"
        >
          <div className="absolute top-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/16 blur-[96px]" />
          <div className="absolute bottom-0 right-1/3 h-[340px] w-[340px] rounded-full bg-blue-600/14 blur-[96px]" />
        </div>
        <Navbar />
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
