import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Experience from "@/src/components/sections/Experience";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";
import TechStack from "@/src/components/sections/TechStack";
import type { Metadata } from "next";
import { site } from "@/src/data/site";
import JsonLd from "@/src/components/seo/JsonLd";
import { homeSchema, pageMetadata } from "@/src/lib/seo";
import Services from "@/src/components/sections/Services";
import Process from "@/src/components/sections/Process";

const homeMetadata = pageMetadata({
  title: "Diseño y desarrollo web en Bilbao",
  description: site.description,
  path: "/",
});

export const metadata: Metadata = {
  ...homeMetadata,
  title: { absolute: site.title },
  openGraph: { ...homeMetadata.openGraph, title: site.title },
  twitter: { ...homeMetadata.twitter, title: site.title },
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <JsonLd data={homeSchema} />
      <Hero />
      <Projects />
      <Services />
      <Process />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  );
}
