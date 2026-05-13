"use client";

import { motion } from "framer-motion";
import { experience } from "@/src/data/experience";
import { formatDate } from "@/src/lib/utils";
import { fadeUp, fadeUpStagger } from "@/src/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 {...fadeUp} className="text-3xl font-semibold text-center">
          Experiencia
        </motion.h2>

        <div className="mt-16 relative border-l border-white/10 pl-8">
          {experience.map((job, i) => (
            <motion.div key={i} {...fadeUpStagger(i)} className="mb-12">
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-white/70" />

              <p className="text-sm text-foreground/50">
                {formatDate(job.start)} —{" "}
                {job.end ? formatDate(job.end) : "Actualidad"}
              </p>

              <h3 className="text-lg font-medium mt-1">{job.role}</h3>

              <p className="text-foreground/70">{job.company}</p>

              <p className="text-foreground/60 mt-2">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
