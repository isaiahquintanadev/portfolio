"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { GrOracle } from "react-icons/gr";
import {
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGraphql,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiResend,
  SiSharp,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { fadeUp, fadeUpStagger } from "@/src/lib/animations";

type Tech = {
  name: string;
  icon: IconType;
  featured?: boolean;
};

type TechGroup = {
  title: string;
  description: string;
  items: Tech[];
};

const groups: TechGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces modernas, responsive y cuidadas.",
    items: [
      { name: "React", icon: SiReact, featured: true },
      { name: "Next.js", icon: SiNextdotjs, featured: true },
      { name: "TypeScript", icon: SiTypescript, featured: true },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    title: "Backend",
    description: "Lógica de negocio, APIs e integraciones.",
    items: [
      { name: "Node.js", icon: SiNodedotjs, featured: true },
      { name: "Express.js", icon: SiExpress },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Supabase", icon: SiSupabase, featured: true },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Datos",
    description: "Persistencia, consultas y procesamiento.",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, featured: true },
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle", icon: GrOracle },
      { name: "Sharp", icon: SiSharp },
    ],
  },
  {
    title: "Producto",
    description: "Servicios para productos reales en producción.",
    items: [
      { name: "Stripe", icon: SiStripe, featured: true },
      { name: "Resend", icon: SiResend },
      { name: "Vercel", icon: SiVercel, featured: true },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-purple-300/80">
            Stack
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tecnologías
          </h2>
          <p className="mt-5 text-sm leading-7 text-foreground/65 sm:text-base">
            Herramientas con las que construyo interfaces, backend, datos,
            integraciones y despliegues para productos web modernos.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              {...fadeUpStagger(groupIndex)}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-sm"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_35%_0%,rgba(168,85,247,0.16),transparent_58%)]"
              />

              <div className="relative">
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mt-2 min-h-10 text-sm leading-5 text-foreground/55">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map(({ name, icon: Icon, featured }, itemIndex) => (
                    <motion.div
                      key={name}
                      {...fadeUpStagger(itemIndex)}
                      className={`group/tech transform-gpu inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-[transform,background-color,border-color] duration-200 md:hover:-translate-y-0.5 ${
                        featured
                          ? "border-white/15 bg-white text-slate-950"
                          : "border-white/10 bg-white/[0.055] text-foreground/78 md:hover:bg-white/[0.09]"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={
                          featured
                            ? "text-slate-800"
                            : "text-white/65 transition-colors md:group-hover/tech:text-white"
                        }
                      />
                      {name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          {...fadeUpStagger(4)}
          className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-sm leading-6 text-foreground/60"
        >
          Las tecnologías destacadas son las que más uso actualmente en mis
          proyectos personales y productos recientes.
        </motion.div>
      </div>
    </section>
  );
}
