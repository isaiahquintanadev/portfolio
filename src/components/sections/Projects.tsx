"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Github,
  Layers3,
  Sparkles,
  Target,
  X,
} from "lucide-react";

import { projects } from "@/src/data/projects";
import { Project } from "@/src/types/project";

const smoothEase = [0.22, 1, 0.36, 1] as const;
const scrollViewport = {
  once: true,
  amount: 0.16,
  margin: "0px 0px -72px 0px",
};

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
          <p className="mt-1 text-xs leading-5 text-white/45">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-white">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-white/62">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300/80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 px-3 py-3 backdrop-blur-md sm:items-center sm:px-6 sm:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`Caso de estudio de ${project.title}`}
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 text-white shadow-2xl shadow-black/50"
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.99 }}
        transition={{ duration: 0.2, ease: smoothEase }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_18%_10%,rgba(168,85,247,0.22),transparent_42%),radial-gradient(circle_at_82%_8%,rgba(59,130,246,0.2),transparent_38%)]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Cerrar caso de estudio"
        >
          <X size={18} />
        </button>

        <div className="relative grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-b border-white/10 p-4 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.8)),radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.2),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(132,204,22,0.14),transparent_34%)]">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-contain p-8 sm:p-10"
                />
              ) : (
                <div className="flex h-full items-center justify-center px-8 text-center text-lg font-semibold text-foreground/70">
                  {project.title}
                </div>
              )}
            </div>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-purple-300/80">
                Caso de estudio
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/62">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              <Metrics project={project} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Chip key={tech} label={tech} />
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Ver proyecto
                  <ArrowUpRight size={16} />
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label={`Repositorio de ${project.title}`}
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Target size={16} className="text-purple-300" />
                  Problema
                </div>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Layers3 size={16} className="text-blue-300" />
                  Solución
                </div>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <h4 className="text-sm font-medium text-white">Mi rol</h4>
              <p className="mt-3 text-sm leading-6 text-white/62">
                {caseStudy.role}
              </p>
            </div>

            <div className="mt-7 grid gap-7 lg:grid-cols-2">
              <CaseList
                title="Funcionalidades clave"
                items={caseStudy.features}
              />
              <CaseList title="Retos técnicos" items={caseStudy.challenges} />
            </div>

            <div className="mt-7">
              <CaseList
                title="Decisiones de arquitectura"
                items={caseStudy.architecture}
              />
            </div>

            <div className="mt-7 rounded-xl border border-emerald-300/15 bg-emerald-400/[0.06] p-4">
              <h4 className="text-sm font-medium text-emerald-200">
                Resultado
              </h4>
              <p className="mt-3 text-sm leading-6 text-white/68">
                {caseStudy.outcome}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: smoothEase }}
          viewport={scrollViewport}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-purple-300/80">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Proyectos destacados
          </h2>
          <p className="mt-4 text-sm leading-6 text-foreground/60 sm:text-base">
            Productos reales donde he trabajado lógica de negocio, interfaz,
            datos, integraciones y despliegue. Cada caso muestra qué problema
            resolvía y qué decisiones técnicas hubo detrás.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const isSpotlight = project.spotlight;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.42,
                  delay: Math.min(index * 0.04, 0.12),
                  ease: smoothEase,
                }}
                viewport={scrollViewport}
                className={`group relative transform-gpu overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 shadow-2xl shadow-black/20 backdrop-blur-xl transition-[transform,background-color,border-color] duration-300 md:hover:-translate-y-1 md:hover:border-white/20 md:hover:bg-slate-950/75 ${
                  isSpotlight
                    ? "md:col-span-2 lg:grid lg:grid-cols-[0.95fr_1.05fr]"
                    : "flex min-h-full flex-col"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
                  <div className="absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_25%_20%,rgba(168,85,247,0.22),transparent_46%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.2),transparent_42%)]" />
                </div>

                <div className="relative p-3 sm:p-4">
                  <div
                    className={`relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.78)),radial-gradient(circle_at_25%_20%,rgba(168,85,247,0.22),transparent_36%),radial-gradient(circle_at_78%_70%,rgba(132,204,22,0.16),transparent_34%)] ${
                      isSpotlight
                        ? "aspect-[16/10] lg:h-full lg:min-h-[420px] lg:aspect-auto"
                        : "aspect-[16/10]"
                    }`}
                  >
                    <div className="absolute left-4 top-4 z-10 flex gap-1.5">
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
                        alt={project.title}
                        fill
                        sizes={
                          isSpotlight
                            ? "(min-width: 1024px) 44vw, 100vw"
                            : "(min-width: 768px) 50vw, 100vw"
                        }
                        priority={index < 2}
                        className={`object-contain transition-transform duration-500 md:group-hover:scale-[1.03] ${
                          isSpotlight ? "p-8 sm:p-12" : "p-8 sm:p-10"
                        }`}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center px-8 text-center text-lg font-semibold text-foreground/70">
                        {project.title}
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/[0.03]" />
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col p-6 pt-3 sm:p-7 sm:pt-4 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/35">
                        Proyecto {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3
                        className={`mt-2 font-semibold tracking-tight text-white ${
                          isSpotlight ? "text-3xl sm:text-4xl" : "text-2xl"
                        }`}
                      >
                        {project.title}
                      </h3>
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
                    className={`mt-4 leading-7 text-foreground/65 ${
                      isSpotlight ? "text-base" : "text-sm"
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
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
                      >
                        Ver caso
                        <BookOpen size={16} />
                      </button>
                    )}

                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-foreground/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                      >
                        Web
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
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
