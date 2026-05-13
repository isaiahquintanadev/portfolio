"use client";

import { fadeUp, fadeUpStagger } from "@/src/lib/animations";
import { motion } from "framer-motion";

import { GrOracle } from "react-icons/gr";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiGraphql,
  SiSupabase,
  SiSharp,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiExpress,
  SiDocker,
  SiVercel,
  SiGit,
} from "react-icons/si";

const tech = {
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
  ],

  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "GraphQL", icon: SiGraphql },
    { name: "REST API", icon: SiNodedotjs },
    { name: "Supabase", icon: SiSupabase },
    { name: "Sharp", icon: SiSharp },
    { name: "Python", icon: SiPython },
  ],

  database: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "Oracle", icon: GrOracle },
  ],

  devops: [
    { name: "Docker", icon: SiDocker },
    { name: "Vercel", icon: SiVercel },
    { name: "Git", icon: SiGit },
  ],
};

export default function TechStack() {
  return (
    <section id="tech" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          {...fadeUp}
          className="text-3xl font-semibold text-center mb-16"
        >
          Tecnologías
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(tech).map(([category, items]) => (
            <div key={category} className="text-center">
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-6">
                {category}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {items.map(({ name, icon: Icon }, i) => (
                  <motion.div
                    key={name}
                    {...fadeUpStagger(i)}
                    className="transform-gpu flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-[transform,background-color] duration-200 md:hover:-translate-y-0.5 md:hover:bg-white/10"
                  >
                    <Icon className="text-white/70" size={16} />
                    {name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
