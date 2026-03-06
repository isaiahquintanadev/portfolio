import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/src/components/layout/Navbar";
import { ThemeProvider } from "@/src/providers/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isaiah | Desarrollador Fullstack",
  description:
    "Desarrollador fullstack especializado en aplicaciones web modernas utilizando Next.js, TypeScript y arquitecturas escalables.",
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
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
        </div>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
