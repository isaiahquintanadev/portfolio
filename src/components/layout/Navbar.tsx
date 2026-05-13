"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Menu, X } from "lucide-react";

import { useActiveSection } from "@/src/lib/useActiveSection";

const links = [
  { href: "#about", label: "Sobre mí", id: "about" },
  { href: "#experience", label: "Experiencia", id: "experience" },
  { href: "#tech", label: "Tecnologías", id: "tech" },
  { href: "#projects", label: "Proyectos", id: "projects" },
];

const sectionIds = [...links.map((link) => link.id), "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/10 bg-slate-950/82 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-slate-950/35 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5"
        aria-label="Navegación principal"
      >
        <a
          href="#"
          onClick={closeMenu}
          className="group flex min-w-0 items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Ir al inicio"
        >
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
            <Image
              src="/avatar.jpeg"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-cover object-[center_30%]"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-white">
              Isaiah
            </span>
            <span className="hidden text-[11px] text-white/45 sm:block">
              Full-stack developer
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm text-foreground/70 md:flex">
          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 transition-colors ${
                  isActive
                    ? "bg-white text-slate-950"
                    : "text-foreground/68 hover:bg-white/[0.07] hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={closeMenu}
            className={`hidden min-h-10 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 md:inline-flex ${
              active === "contact"
                ? "bg-white text-slate-950"
                : "border border-white/10 bg-white/[0.06] text-foreground/85 hover:bg-white/10"
            }`}
          >
            <Mail size={16} />
            Contacto
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-foreground transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-white/10 transition-[grid-template-rows,border-color] duration-300 md:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0">
          <div className="px-6 pb-5 pt-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/92 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
              {[...links, { href: "#contact", label: "Contacto", id: "contact" }].map(
                (link) => {
                  const isActive = active === link.id;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white text-slate-950"
                          : "text-foreground/78 hover:bg-white/[0.07] hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                      )}
                    </a>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
