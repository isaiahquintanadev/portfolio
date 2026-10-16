import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projectPath } from "@/src/lib/seo";
import type { Project } from "@/src/types/project";

const statusLabels = {
  Live: "Publicado",
  Client: "Proyecto de cliente",
  Finished: "Terminado",
  WIP: "En desarrollo",
};

export default function ProjectGrid({
  projects,
  headingLevel = 3,
  highlightFirst = true,
}: {
  projects: Project[];
  headingLevel?: 2 | 3;
  highlightFirst?: boolean;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
      {projects.map((project) => {
        const spotlight = highlightFirst && project.spotlight;
        const image = project.previewImage ?? (project.image ? {
          src: project.image,
          alt: project.imageAlt ?? project.title,
        } : undefined);
        const isLogo = !project.previewImage && project.imageKind === "logo";

        return (
          <article
            key={project.slug}
            className={spotlight ? "md:col-span-2 lg:grid lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12" : "flex min-w-0 flex-col"}
          >
            <Link
              href={projectPath(project)}
              aria-label={`Ver el proyecto ${project.title}`}
              className="group relative block aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#151e32]"
            >
              {image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={spotlight
                    ? "(min-width: 1200px) 602px, (min-width: 1024px) 52vw, calc(100vw - 48px)"
                    : "(min-width: 1200px) 556px, (min-width: 768px) 50vw, calc(100vw - 48px)"}
                  className={isLogo
                    ? "object-contain p-8 sm:p-12"
                    : "object-cover object-top motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"}
                />
              ) : (
                <span className="flex h-full items-center justify-center px-8 text-center text-2xl font-semibold">{project.title}</span>
              )}
            </Link>

            <div className={`flex flex-1 flex-col ${spotlight ? "pt-6 lg:py-6" : "pt-6"}`}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                {project.category && <p>{project.category}</p>}
                {project.status && <p className="text-[#c4b5fd]">{statusLabels[project.status]}</p>}
              </div>
              <Heading className={`mt-3 text-balance font-semibold tracking-tight ${spotlight ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                <Link href={projectPath(project)} className="hover:text-[#c4b5fd]">{project.title}</Link>
              </Heading>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted">{project.summary ?? project.description}</p>

              <ul aria-label="Tecnologías principales" className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
                {project.tech.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
                <Link href={projectPath(project)} aria-label={`Ver caso de estudio de ${project.title}`} className="button-primary">
                  Ver caso de estudio
                </Link>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-white" aria-label={`Abrir web de ${project.title} en una nueva pestaña`}>
                    {project.access === "private" ? "Web con acceso privado" : "Visitar web"}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 min-w-11 items-center justify-center text-muted hover:text-white" aria-label={`Abrir repositorio de ${project.title} en una nueva pestaña`}>
                    <Github size={18} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
