import { ChevronDown } from "lucide-react";

import { experience } from "@/src/data/experience";
import { formatDate } from "@/src/lib/utils";

function formatRange(start: Date, end?: Date) {
  return `${formatDate(start)} — ${end ? formatDate(end) : "Actualidad"}`;
}

export default function Experience() {
  return (
    <section id="experience" className="section-shell border-t border-white/10" aria-labelledby="experience-heading">
      <div className="site-container">
        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-sm font-medium text-[var(--brand)]">Trayectoria</p>
            <h2 id="experience-heading" className="section-title mt-3">Experiencia profesional.</h2>
          </div>
          <p className="text-muted max-w-2xl text-base leading-7 md:self-end">
            Desarrollo full-stack, evolución de aplicaciones y automatización de
            procesos. Una base técnica para abordar proyectos nuevos y mejorar
            sistemas que ya están en uso.
          </p>
        </div>

        <div className="mt-10 border-t border-white/15">
          {experience.map((job) => (
            <details key={`${job.company}-${job.role}`} className="group border-b border-white/15">
              <summary className="relative cursor-pointer list-none py-7 pr-9 transition-colors hover:bg-white/[0.02] sm:py-8 [&::-webkit-details-marker]:hidden">
                <span className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                  <span>
                    <span className="block text-sm text-[#b5bed0]">{formatRange(job.start, job.end)}</span>
                    <span className="mt-2 block text-xl font-semibold tracking-tight text-[#f5f5fa] sm:text-2xl">{job.role}</span>
                    <span className="mt-1 block text-base text-[#c4b5fd]">{job.company}</span>
                  </span>
                  <span className="text-muted block max-w-2xl text-sm leading-7">
                    <span className="mt-3 block text-xs font-medium text-[#f5f5fa] group-open:hidden">Ver responsabilidades y detalles</span>
                    <span className="mt-3 hidden text-xs font-medium text-[#f5f5fa] group-open:block">Cerrar detalles</span>
                  </span>
                </span>
                <ChevronDown size={20} aria-hidden="true" className="absolute right-0 top-8 text-[#c4b5fd] transition-transform motion-reduce:transition-none group-open:rotate-180" />
              </summary>
              <div className="grid gap-6 pb-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                <div>
                  {job.technologies?.length ? (
                    <>
                      <h3 className="text-sm font-medium text-[#f5f5fa]">Tecnologías y herramientas</h3>
                      <p className="text-muted mt-3 text-sm leading-7">{job.technologies.join(" · ")}</p>
                    </>
                  ) : null}
                </div>
                <div className="space-y-6">
                  <p className="text-muted text-sm leading-7">{job.description}</p>
                  {job.context ? <p className="text-muted text-sm leading-7">{job.context}</p> : null}
                  {job.responsibilities?.length ? (
                    <div>
                      <h3 className="text-sm font-medium text-[#f5f5fa]">Responsabilidades</h3>
                      <ul className="text-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-6 marker:text-[#c4b5fd]">
                        {job.responsibilities.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ) : null}
                  {job.impact?.length ? (
                    <div>
                      <h3 className="text-sm font-medium text-[#f5f5fa]">Impacto y aprendizaje</h3>
                      <ul className="text-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-6 marker:text-[#c4b5fd]">
                        {job.impact.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
