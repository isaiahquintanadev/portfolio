"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-32">
      <div className="text-center max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Isaiah Quintana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-xl text-gray-400"
        >
          Desarrollador Fullstack especializado en aplicaciones web modernas,
          arquitectura limpia y experiencias de usuario rápidas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition hover:scale-105 hover:shadow -xl duration-300">
            Ver proyectos
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition hover:scale-105 hover:shadow -xl duration-300">
            Contacto
          </button>
        </motion.div>
      </div>
    </section>
  );
}
