import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div>
            <p className="mb-6 text-sm font-medium text-[var(--brand)] sm:text-base">
              Isaiah Quintana, desarrollador full-stack
            </p>
            <h1 id="hero-title" className="hero-title">
              Páginas web y aplicaciones a la altura de tu negocio.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Diseño y desarrollo soluciones digitales a medida para empresas,
              autónomos y negocios. Una identidad propia, una experiencia clara
              y la tecnología que tu proyecto necesita.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="button-primary">
                Hablemos de tu proyecto <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="#projects" className="button-secondary">
                Ver proyectos <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-6 text-sm leading-6 text-muted">
              Desarrollo web en Bilbao y Bizkaia. También trabajo a distancia.
            </p>
          </div>
          <div className="hero-portrait hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[45%] rounded-b-[12px] bg-white">
              <Image src="/avatar.jpeg" alt="Retrato ilustrado de Isaiah Quintana" fill sizes="300px" className="object-cover object-[center_25%]" />
            </div>
            <p className="mt-5 text-base font-medium">Una idea. Un desarrollo a medida.</p>
            <p className="mt-2 text-sm leading-6 text-muted">Trato directo conmigo, desde la primera conversación hasta la entrega.</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-sm sm:flex-row sm:gap-8 lg:mt-16">
          <p className="text-muted">Diseño cuidado. Desarrollo de principio a fin.</p>
          <a href="#services" className="inline-flex min-h-11 items-center gap-2 self-start text-[var(--brand)] hover:text-white sm:-mt-3">
            Descubre cómo puedo ayudarte <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
