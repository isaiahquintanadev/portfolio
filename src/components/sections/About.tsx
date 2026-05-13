"use client";

import { motion } from "framer-motion";
import { Code2, Layers3, Rocket, Workflow } from "lucide-react";

import { fadeUp, fadeUpStagger } from "@/src/lib/animations";

const principles = [
  {
    title: "Pienso en producto",
    description:
      "No me quedo solo en la pantalla: intento entender el flujo, el usuario y el problema real que hay detrás.",
    icon: Rocket,
  },
  {
    title: "Construyo de extremo a extremo",
    description:
      "Trabajo frontend, backend, datos, integraciones, pagos, emails y despliegue cuando el proyecto lo necesita.",
    icon: Layers3,
  },
  {
    title: "Cuido la base técnica",
    description:
      "Prefiero código simple, tipado, mantenible y preparado para evolucionar sin convertir cada cambio en fricción.",
    icon: Code2,
  },
];

const focusAreas = [
  "Aplicaciones internas y dashboards",
  "Productos SaaS y MVPs",
  "Flujos con pagos, emails y usuarios",
  "Automatización de procesos",
  "Experiencias responsive cuidadas",
  "Datos, rankings y métricas",
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-purple-300/80">
            Sobre mí
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Desarrollo software con mentalidad de producto
          </h2>
          <p className="mt-5 text-sm leading-7 text-foreground/65 sm:text-base">
            Vengo de un contexto técnico donde automatizar, ordenar información
            y resolver procesos era parte del día a día. Esa forma de pensar me
            llevó al desarrollo full-stack: construir herramientas útiles,
            claras y preparadas para usarse en escenarios reales.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            {...fadeUpStagger(1)}
            className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 backdrop-blur-sm sm:p-7"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950">
                <Workflow size={18} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Cómo trabajo
                </h3>
                <p className="text-sm text-white/45">
                  Claridad, criterio técnico y foco en entregar valor.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-sm leading-7 text-foreground/65">
              <p>
                Me gusta transformar ideas en productos que se puedan mantener:
                interfaces limpias, componentes reutilizables, datos bien
                organizados e integraciones que no dependan de soluciones
                frágiles.
              </p>
              <p>
                En proyectos como PsicotestPol o Alter Ego Experience he
                trabajado flujos completos: autenticación y datos, paneles de
                gestión, rankings en tiempo real, QR, pagos, emails y
                despliegues en Vercel.
              </p>
              <p>
                Mi objetivo no es añadir complejidad, sino tomar buenas
                decisiones para que el producto sea rápido, claro y fácil de
                seguir mejorando.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUpStagger(2)}
            className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm sm:p-7"
          >
            <h3 className="text-xl font-semibold text-white">
              Problemas que suelo resolver
            </h3>
            <div className="mt-6 grid gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-foreground/70"
                >
                  {area}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                {...fadeUpStagger(index)}
                className="transform-gpu rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition-[transform,background-color] duration-200 md:hover:-translate-y-1 md:hover:bg-white/[0.07]"
              >
                <Icon className="text-purple-300/85" size={22} />
                <h3 className="mt-5 text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
