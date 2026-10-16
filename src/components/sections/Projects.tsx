import Link from "next/link";
import { publicProjects } from "@/src/data/projects";
import ProjectGrid from "@/src/components/projects/ProjectGrid";

export default function Projects() {
  const featured = publicProjects.filter((project) => project.featured);
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-shell border-t border-white/10">
      <div className="site-container">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 id="projects-title" className="section-title">Ideas que ya tienen forma.</h2>
            <p className="mt-5 max-w-xl leading-8 text-muted">Webs de negocio, aplicaciones y productos propios. Estos proyectos muestran qué necesitaban resolver y cómo los he desarrollado.</p>
          </div>
          <Link href="/proyectos" className="inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-[var(--brand)] underline underline-offset-4 hover:text-white">Ver todos los proyectos ({publicProjects.length})</Link>
        </div>
        <ProjectGrid projects={featured} />
      </div>
    </section>
  );
}
