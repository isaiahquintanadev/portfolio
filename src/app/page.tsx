import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Experience from "@/src/components/sections/Experience";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";
import TechStack from "@/src/components/sections/TechStack";
import type { Metadata } from "next";
import { absoluteUrl, site } from "@/src/data/site";
import JsonLd from "@/src/components/seo/JsonLd";
import { pageMetadata } from "@/src/lib/seo";

const homeMetadata = pageMetadata({
  title: "Desarrollador full-stack",
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
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", "@id": site.url + "/#webpage", url: absoluteUrl("/"), name: site.title, mainEntity: { "@id": site.url + "/#person" }, isPartOf: { "@id": site.url + "/#website" } }} />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
