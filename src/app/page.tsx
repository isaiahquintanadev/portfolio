import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Experience from "@/src/components/sections/Experience";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";
import TechStack from "@/src/components/sections/TechStack";
import Footer from "@/src/components/layout/Footer";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
