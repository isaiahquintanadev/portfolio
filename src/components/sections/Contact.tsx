import { ArrowUpRight, Github, Linkedin } from "lucide-react";

import ContactActions from "@/src/components/ui/ContactActions";
import { site } from "@/src/data/site";

const emailSubject = encodeURIComponent("Consulta sobre un proyecto web");
const emailBody = encodeURIComponent(
  "Hola, Isaiah:\n\nMe gustaría hablar contigo sobre un proyecto.\n\nQué necesito:\nObjetivo del proyecto:\nPlazos orientativos:\n\nGracias.",
);

export default function Contact() {
  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-heading">
      <div className="site-container">
        <div className="rounded-[20px] border border-white/15 bg-[#151e32] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <p className="text-sm font-medium text-[var(--brand)]">
            Hablemos de tu proyecto
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <h2 id="contact-heading" className="max-w-2xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Tu próximo proyecto empieza con una conversación.
              </h2>
              <p className="text-muted mt-6 max-w-xl text-base leading-7">
                Cuéntame qué necesita tu negocio: una web, una aplicación o una
                herramienta a medida. Podemos definir el alcance y valorar cómo
                llevarlo a la práctica.
              </p>
            </div>
            <div className="flex flex-col items-start lg:justify-end">
              <p className="text-muted max-w-sm text-sm leading-6">
                Incluye una breve descripción, el objetivo y los plazos que
                tienes en mente. También puedes escribirme para una colaboración
                u oportunidad profesional.
              </p>
              <p id="contact-email" tabIndex={-1} className="mt-6 max-w-full break-all text-base font-medium text-[#f5f5fa] sm:text-lg">
                {site.email}
              </p>
              <div className="mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${site.email}?subject=${emailSubject}&body=${emailBody}`}
                  className="button-primary"
                >
                  Hablemos por email
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <ContactActions email={site.email} emailElementId="contact-email" />
              </div>
              <p className="text-muted mt-3 text-xs leading-5">
                El enlace abre tu aplicación de correo. Si no tienes una
                configurada, copia la dirección y úsala en tu correo web.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#b5bed0] transition-colors hover:text-[#f5f5fa]">
                  <Linkedin size={17} aria-hidden="true" />
                  LinkedIn <span className="sr-only">(se abre en otra pestaña)</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#b5bed0] transition-colors hover:text-[#f5f5fa]">
                  <Github size={17} aria-hidden="true" />
                  GitHub <span className="sr-only">(se abre en otra pestaña)</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
