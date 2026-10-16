import { ChevronDown } from "lucide-react";

const groups = [
  {
    title: "Frontend",
    description: "Interfaces responsive y accesibles, con atención al detalle.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Backend",
    description: "Lógica de negocio, APIs e integraciones entre servicios.",
    technologies: ["Node.js", "Express.js", "GraphQL", "Supabase", "Python"],
  },
  {
    title: "Datos",
    description: "Persistencia, consultas y procesamiento de información.",
    technologies: ["PostgreSQL", "MySQL", "Oracle", "Sharp"],
  },
  {
    title: "Producto",
    description: "Pagos, correo, control de versiones y despliegues.",
    technologies: ["Stripe", "Resend", "Vercel", "Docker", "Git"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="section-shell border-t border-white/10" aria-labelledby="tech-heading">
      <div className="site-container">
        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-sm font-medium text-[var(--brand)]">Capacidades técnicas</p>
            <h2 id="tech-heading" className="section-title mt-3">De la interfaz al despliegue.</h2>
          </div>
          <p className="text-muted max-w-2xl text-base leading-7 md:self-end">
            Elijo las herramientas según las necesidades del proyecto. Mi stack
            habitual conecta diseño, lógica de negocio, datos y servicios en un
            mismo producto.
          </p>
        </div>

        <details className="group mt-8 border-y border-white/15">
          <summary className="flex min-h-14 items-center justify-between gap-4 py-4 text-sm font-medium text-[var(--brand)] hover:text-white">
            <span>Explorar tecnologías y capacidades</span>
            <ChevronDown size={18} aria-hidden="true" className="shrink-0 transition-transform motion-reduce:transition-none group-open:rotate-180" />
          </summary>
          <div className="border-t border-white/15">
          {groups.map((group) => (
            <div key={group.title} className="grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[0.8fr_1.2fr] sm:gap-10 md:grid-cols-[0.4fr_0.8fr_1.2fr] md:gap-6">
              <h3 className="text-lg font-medium text-[#f5f5fa]">{group.title}</h3>
              <p className="text-muted text-sm leading-6">{group.description}</p>
              <p className="text-sm leading-7 text-[#d6dbea] sm:col-start-2 md:col-start-auto">
                {group.technologies.join(" · ")}
              </p>
            </div>
          ))}
          </div>
        </details>
      </div>
    </section>
  );
}
