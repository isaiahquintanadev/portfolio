"use client";

import { projects } from "@/src/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import Image from "next/image";

function Chip({ label }: { label: string }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-foreground/80">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold">Proyectos</h2>
          <p className="mt-3 text-foreground/60">
            Una selección de proyectos centrados en rendimiento, arquitectura
            limpia y experiencia de usuario.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-sm cursor-pointer hover:border-white/20 transition"
              onClick={() => p.href && window.open(p.href, "_blank")}
              role="link"
            >
              {/* Hover glow (detalle fino) */}
              <div className="pointer-events-none absolute -inset-40 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.16),transparent_60%)]" />
              </div>

              {p.image && (
                <div className="relative w-full h-48 overflow-hidden rounded-xl mb-6 border border-white/10">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              )}

              <div className="relative p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      {p.status && (
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full border
                            ${
                              p.status === "Live"
                                ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                                : p.status === "Client"
                                  ? "border-purple-400/30 bg-purple-500/10 text-purple-300"
                                  : "border-white/10 bg-black/20 text-foreground/70"
                            }`}
                        >
                          {p.status}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-foreground/70 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Iconos */}
                  <div className="flex items-center gap-2">
                    {p.repo && (
                      <a
                        href={p.repo}
                        className="rounded-lg p-2 border border-white/10 bg-black/10 hover:bg-white/10 transition"
                        aria-label="Repositorio"
                      >
                        <Github size={18} className="text-foreground/80" />
                      </a>
                    )}
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 border border-white/10 bg-black/10 hover:bg-white/10 transition"
                        aria-label="Demo"
                      >
                        <ExternalLink
                          size={18}
                          className="text-foreground/80"
                        />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={t} label={t} />
                  ))}
                </div>

                {/* Línea sutil abajo al hover */}
                <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
