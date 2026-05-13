"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import { fadeUp, fadeUpStagger } from "@/src/lib/animations";

const email = "isaiahquintanadev@gmail.com";

const socialLinks = [
  {
    name: "LinkedIn",
    description: "Perfil profesional y contacto",
    href: "https://www.linkedin.com/in/isaiah-quintana-serradilla-85a48723b/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    description: "Código, proyectos y actividad",
    href: "https://github.com/isaiahquintanadev",
    icon: Github,
  },
];

const opportunities = [
  "Desarrollo full-stack con Next.js y TypeScript",
  "MVPs, SaaS y productos web",
  "Dashboards, paneles internos y automatizaciones",
  "Integraciones con pagos, emails, datos y APIs",
];

const workingStyle = [
  "Comunicación clara",
  "Código mantenible",
  "Mentalidad de producto",
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-purple-300/80">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Construimos algo útil?
          </h2>
          <p className="mt-5 text-sm leading-7 text-foreground/65 sm:text-base">
            Estoy abierto a oportunidades donde pueda aportar como desarrollador
            full-stack: productos web, herramientas internas, automatizaciones,
            SaaS, dashboards o integraciones que necesiten criterio técnico y
            buena experiencia de usuario.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            {...fadeUpStagger(1)}
            className="rounded-2xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur-sm sm:p-7"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-slate-950">
                <BriefcaseBusiness size={19} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Disponible para colaborar
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">
                  Me interesan proyectos donde pueda participar tanto en la
                  parte visual como en la lógica, datos, integraciones y
                  despliegue.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              {opportunities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-foreground/72"
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-purple-300/80" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {workingStyle.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-foreground/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            <motion.div
              {...fadeUpStagger(0)}
              className="rounded-2xl border border-white/15 bg-white p-5 text-slate-950 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
                  <Mail size={19} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">Email</p>
                  <p className="mt-1 text-sm text-slate-600">
                    La forma más directa de hablar
                  </p>
                  <p className="mt-3 break-all text-sm font-medium text-slate-800">
                    {email}
                  </p>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950/30"
                    >
                      Abrir correo
                      <ArrowUpRight size={16} />
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-950/20"
                    >
                      {copied ? "Copiado" : "Copiar email"}
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {socialLinks.map((link, index) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUpStagger(index + 1)}
                  className="group transform-gpu rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-white backdrop-blur-sm transition-[transform,background-color,border-color] duration-200 md:hover:-translate-y-1 md:hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/10 text-white">
                        <Icon size={19} />
                      </div>
                      <div>
                        <p className="font-semibold">{link.name}</p>
                        <p className="mt-1 text-sm text-white/50">
                          {link.description}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/55 transition-transform duration-200 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              {...fadeUpStagger(3)}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm"
            >
              <div className="flex gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/10 text-white">
                  <MessageSquare size={19} />
                </div>
                <div>
                  <p className="font-semibold text-white">Qué puedes contarme</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">
                    Una idea, una oferta, un problema técnico, una colaboración
                    o una app que quieras llevar a producción. Con algo de
                    contexto puedo responderte mejor y más rápido.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
