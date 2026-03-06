"use client";

import { fadeUpStagger } from "@/src/lib/animations";
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
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Contacto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          viewport={{ once: true }}
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
                className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
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
