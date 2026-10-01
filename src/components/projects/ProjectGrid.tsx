import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Github, Sparkles } from "lucide-react";
import { projectPath } from "@/src/lib/seo";
import type { Project } from "@/src/types/project";

const statusStyles = {
  Live: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  Client: "border-purple-400/30 bg-purple-500/10 text-purple-300",
  Finished: "border-blue-400/30 bg-blue-500/10 text-blue-300",
  WIP: "border-white/10 bg-white/5 text-foreground/70",
};

const statusLabels = {
  Live: "Live",
  Client: "Cliente",
  Finished: "Terminado",
  WIP: "En desarrollo",
};

function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-foreground/75">
      {label}
    </span>
  );
}

function Metrics({ project }: { project: Project }) {
  if (!project.metrics?.length) return null;

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {project.metrics.map((metric) => (
        <div
          key={`${project.title}-${metric.value}`}
          className="rounded-xl border border-white/10 bg-white/[0.045] p-3"
        >
          <p className="text-sm font-semibold text-white">{metric.value}</p>
          <p className="mt-1 text-xs leading-5 text-white/65">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function ProjectGrid({ projects, headingLevel = 3 }: { projects: Project[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => {
        const isSpotlight = project.spotlight;

        return (
          <article
            key={project.title}
            className={`group relative transform-gpu overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 shadow-2xl shadow-black/20 backdrop-blur-xl transition-[transform,background-color,border-color] duration-300 md:hover:-translate-y-1 md:hover:border-white/20 md:hover:bg-slate-950/75 ${isSpotlight
                ? "md:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]"
                : "flex min-h-full flex-col"
              }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
            >
              <div className="absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_25%_20%,rgba(168,85,247,0.22),transparent_46%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.2),transparent_42%)]" />
            </div>

            <div className="relative p-3 sm:p-4">
              <div
                className={`relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.78)),radial-gradient(circle_at_25%_20%,rgba(168,85,247,0.22),transparent_36%),radial-gradient(circle_at_78%_70%,rgba(132,204,22,0.16),transparent_34%)] ${isSpotlight
                    ? "aspect-[16/10] lg:h-full lg:min-h-[420px] lg:aspect-auto"
                    : "aspect-[16/10]"
                  }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute left-4 top-4 z-10 flex gap-1.5"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                {isSpotlight && (
                  <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur">
                    <Sparkles size={14} className="text-purple-300" />
                    Proyecto principal
                  </div>
                )}

                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    fill
                    sizes={
                      isSpotlight
                        ? "(min-width: 1024px) 44vw, 100vw"
                        : "(min-width: 768px) 50vw, 100vw"
                    }
                    className={`object-contain transition-transform duration-500 md:group-hover:scale-[1.03] ${isSpotlight ? "p-8 sm:p-12" : "p-8 sm:p-10"
                      }`}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-8 text-center text-lg font-semibold text-foreground/70">
                    {project.title}
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/[0.03]"
                />
              </div>
            </div>

            <div className="relative flex flex-1 flex-col p-6 pt-3 sm:p-7 sm:pt-4 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/65">
                    Proyecto {String(index + 1).padStart(2, "0")}
                  </p>
                  <Heading
                    className={`mt-2 font-semibold tracking-tight text-white ${isSpotlight ? "text-3xl sm:text-4xl" : "text-2xl"
                      }`}
                  >
                    <Link href={projectPath(project)}>{project.title}</Link>
                  </Heading>
                </div>

                {project.status && (
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[project.status]}`}
                  >
                    {statusLabels[project.status]}
                  </span>
                )}
              </div>

              <p
                className={`mt-4 leading-7 text-foreground/65 ${isSpotlight ? "text-base" : "text-sm"
                  }`}
              >
                {project.description}
              </p>

              <div className="mt-6">
                <Metrics project={project} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Chip key={tech} label={tech} />
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                {project.caseStudy && (
                  <Link
                    href={projectPath(project)}
                    aria-label={`Ver caso de estudio de ${project.title}`}
                    className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    Ver caso
                    <BookOpen size={16} />
                  </Link>
                )}

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-foreground/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    aria-label={`Abrir web de ${project.title}`}
                  >
                    {project.access === "private" ? "Web · acceso privado" : "Web"}
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-foreground/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                    aria-label={`Repositorio de ${project.title}`}
                  >
                    <Github size={18} />
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
