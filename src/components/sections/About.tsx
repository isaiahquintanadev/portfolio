"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center"
        >
          Sobre mí
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-foreground/70 leading-relaxed max-w-6xl mx-auto"
        >
          Desarrollador fullstack con más de 3 años de experiencia creando
          aplicaciones web modernas. Disfruto diseñando arquitecturas
          escalables, escribiendo código limpio y creando experiencias de
          usuario pulidas que se sienten rápidas e intuitivas.
        </motion.p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {[
            {
              title: "Arquitectura limpia",
              description:
                "Enfoque en bases de código mantenibles y escalables.",
            },
            {
              title: "Orientado al rendimiento",
              description:
                "Optimización de aplicaciones para velocidad y eficiencia.",
            },
            {
              title: "Mentalidad de producto",
              description:
                "Construyendo software que resuelve problemas reales.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-foreground/60 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
