"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "Sobre mí" },
    { href: "#experience", label: "Experiencia" },
    { href: "#tech", label: "Tecnologías" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 font-semibold tracking-tight text-lg text-foreground"
        >
          <div className="h-10 w-10 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/avatar.jpeg"
              alt="Isaiah"
              width={40}
              height={40}
              className="object-cover object-[center_30%]"
              priority
            />
          </div>
          Isaiah
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-slate-950/90 backdrop-blur-md">
          <div className="flex flex-col gap-6 px-6 py-6 text-sm text-foreground/80">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-foreground transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
