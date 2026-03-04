"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Cloud } from "lucide-react";

const tech = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Server },
  { name: "AWS", icon: Cloud },
  { name: "Prisma", icon: Database },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-12 text-center"
        >
          Tecnologías
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tech.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
              >
                <Icon size={28} className="mb-3 text-foreground/80" />
                <span className="text-sm text-foreground/80">{item.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
