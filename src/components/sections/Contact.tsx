"use client";

import { fadeUp, fadeUpStagger } from "@/src/lib/animations";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const links = [
    {
      name: "Email",
      href: "mailto:isaiahquintanadev@gmail.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      href: "https://github.com/isaiahquintanadev",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/isaiah-quintana-serradilla-85a48723b/",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 {...fadeUp} className="text-3xl font-semibold">
          Contacto
        </motion.h2>

        <motion.p
          {...fadeUpStagger(1)}
          className="mt-4 text-foreground/70 max-w-xl mx-auto"
        >
          ¿Te gustaría trabajar juntos o tienes algún proyecto interesante en
          mente? Estoy abierto a nuevas oportunidades y colaboraciones.
        </motion.p>

        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          {links.map((link, i) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUpStagger(i)}
                className="transform-gpu flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-[transform,background-color] duration-200 md:hover:-translate-y-0.5 md:hover:bg-white/10"
              >
                <Icon size={20} />
                {link.name}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
