import Link from "next/link";
import { publicProjects } from "@/src/data/projects";
import ProjectGrid from "@/src/components/projects/ProjectGrid";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-purple-300/80">Portfolio</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Proyectos destacados</h2>
          <p className="mt-4 text-sm leading-6 text-foreground/70 sm:text-base">
            Productos reales donde he trabajado lógica de negocio, interfaz,
            datos, integraciones y despliegue. Cada caso muestra qué problema
            resolvía y qué decisiones técnicas hubo detrás.
          </p>
          <Link href="/proyectos" className="mt-5 inline-flex min-h-11 items-center text-sm font-medium text-purple-200 underline underline-offset-4">Explorar todos los proyectos</Link>
        </div>
        <div className="mt-12"><ProjectGrid projects={publicProjects} /></div>
      </div>
    </section>
  );
}
