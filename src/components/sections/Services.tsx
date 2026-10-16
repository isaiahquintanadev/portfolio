import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/src/data/services";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-shell border-y border-white/10 bg-[var(--surface)]">
      <div className="site-container">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <h2 id="services-title" className="section-title max-w-lg">Lo que tu negocio necesita, construido a medida.</h2>
          <p className="max-w-lg self-end leading-8 text-muted">Desde una primera web hasta una herramienta que conecte tus procesos. Definimos el alcance según tu objetivo, sin añadir complejidad porque sí.</p>
        </div>
        <div className="mt-12 divide-y divide-white/15 border-y border-white/15">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="grid gap-5 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-10">
              <div>
                <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                <Link href={`/proyectos/${service.relatedSlug}`} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-[var(--brand)] underline-offset-4 hover:underline">
                  Ver el caso de {service.relatedName} <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div>
                <p className="max-w-xl leading-8 text-muted">{service.description}</p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/90">
                  {service.examples.map((example) => <li key={example} className="border-l-2 border-[var(--brand)]/50 pl-3">{example}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <a href="#contact" className="button-primary mt-8">Cuéntame qué necesitas <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
