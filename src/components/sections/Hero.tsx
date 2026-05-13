"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Mail } from "lucide-react";

const highlights = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "Stripe",
  "Producto",
];

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "3", label: "Productos destacados" },
  { value: "Full-stack", label: "Frontend, backend y despliegue" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-16 pt-32 sm:pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-foreground/75 backdrop-blur lg:mx-0"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            Desarrollador full-stack orientado a producto
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
            className="mt-7 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Isaiah Quintana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-foreground/68 sm:text-lg lg:mx-0"
          >
            Construyo aplicaciones web modernas con Next.js, TypeScript y
            arquitecturas limpias. Me centro en convertir ideas en productos
            rápidos, mantenibles y agradables de usar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6, ease: "easeOut" }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Ver proyectos
              <ArrowDown size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-foreground/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Contactar
              <Mail size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6, ease: "easeOut" }}
            className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-foreground/70"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.24),transparent_42%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_40%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)),radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.12),transparent_38%)]">
              <Image
                src="/avatar.jpeg"
                alt="Retrato ilustrado de Isaiah Quintana"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950">
                  <Code2 size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Desarrollo productos web
                  </p>
                  <p className="mt-0.5 text-xs text-white/55">
                    UI, backend, datos e integraciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-6 left-1/2 hidden w-full max-w-6xl -translate-x-1/2 px-6 sm:block"
      >
        <div className="grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-white/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
