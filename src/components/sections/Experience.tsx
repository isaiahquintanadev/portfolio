"use client";

import { BriefcaseBusiness, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { experience } from "@/src/data/experience";
import { fadeUp, fadeUpStagger } from "@/src/lib/animations";
import { formatDate } from "@/src/lib/utils";

function formatRange(start: Date, end?: Date) {
  return `${formatDate(start)} — ${end ? formatDate(end) : "Actualidad"}`;
}

function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-foreground/75">
      {label}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-purple-300/80">
            Experiencia
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Experiencia enfocada en impacto real
          </h2>
          <p className="mt-5 text-sm leading-7 text-foreground/65 sm:text-base">
            Mi trayectoria combina desarrollo full-stack, mantenimiento de
            sistemas, automatización y trabajo con productos que necesitan ser
            claros, útiles y sostenibles en el tiempo.
          </p>
        </motion.div>

        <div className="relative mt-14 space-y-6 before:absolute before:left-4 before:top-3 before:hidden before:h-[calc(100%-1.5rem)] before:w-px before:bg-white/10 md:before:block">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              {...fadeUpStagger(index)}
              className={`relative rounded-2xl border p-6 backdrop-blur-sm sm:p-7 md:ml-12 ${
                job.featured
                  ? "border-white/15 bg-slate-950/60 shadow-2xl shadow-black/20"
                  : "border-white/10 bg-white/[0.045]"
              }`}
            >
              <div className="absolute -left-[2.72rem] top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-white md:flex">
                <BriefcaseBusiness size={16} />
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm text-foreground/50">
                      {formatRange(job.start, job.end)}
                    </p>
                    {job.featured && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-300/20 bg-purple-400/10 px-2.5 py-1 text-[11px] font-medium text-purple-200">
                        <Sparkles size={13} />
                        Experiencia principal
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-foreground/70">{job.company}</p>
                </div>

                {job.technologies && (
                  <div className="flex max-w-xl flex-wrap gap-2 lg:justify-end">
                    {job.technologies.map((tech) => (
                      <Chip key={tech} label={tech} />
                    ))}
                  </div>
                )}
              </div>

              <p className="mt-5 max-w-4xl text-sm leading-7 text-foreground/65">
                {job.description}
              </p>

              {job.context && (
                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-foreground/62">
                  {job.context}
                </div>
              )}

              <div className="mt-7 grid gap-7 lg:grid-cols-2">
                {job.responsibilities && (
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      Responsabilidades
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {job.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-6 text-foreground/62"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {job.impact && (
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      Impacto y aprendizaje
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {job.impact.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-6 text-foreground/62"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-300/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
