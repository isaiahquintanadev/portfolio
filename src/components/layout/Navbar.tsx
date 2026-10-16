"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useActiveSection } from "@/src/lib/useActiveSection";

const links = [
  { href: "#projects", label: "Proyectos", id: "projects" },
  { href: "#services", label: "Servicios", id: "services" },
  { href: "#process", label: "Proceso", id: "process" },
  { href: "#about", label: "Sobre mí", id: "about" },
];
const sectionIds = [...links.map((link) => link.id), "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(sectionIds, isHome);
  const active = isHome ? activeSection : pathname.startsWith("/proyectos") ? "projects" : null;
  const linkHref = (href: string) => !isHome && href === "#projects" ? "/proyectos" : isHome ? href : `/${href}`;

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const closeOnFocusOutside = (event: FocusEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOutside);
    window.addEventListener("focusin", closeOnFocusOutside);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOutside);
      window.removeEventListener("focusin", closeOnFocusOutside);
    };
  }, [open]);

  return (
    <header ref={header} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0f172a]/95 backdrop-blur-md">
      <nav className="site-container flex h-20 items-center justify-between gap-4" aria-label="Navegación principal">
        <Link href="/" onClick={() => setOpen(false)} className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-lg" aria-label="Isaiah Hub, inicio">
          <Image src="/avatar.jpeg" alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover object-[center_25%]" />
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-tight">Isaiah Hub<span className="text-[var(--brand)]">.</span></span>
            <span className="mt-1 block text-xs text-muted">Isaiah Quintana</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link key={link.id} href={linkHref(link.href)} onClick={() => setOpen(false)}
              aria-current={active === link.id ? (isHome ? "location" : "page") : undefined}
              className={`inline-flex min-h-11 items-center rounded-lg px-3 text-sm hover:bg-white/5 hover:text-white ${active === link.id ? "text-[var(--brand)]" : "text-muted"}`}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link href={linkHref("#contact")} onClick={() => setOpen(false)} className="button-primary hidden md:inline-flex">
          Hablemos <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button ref={menuButton} type="button" onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/20 hover:bg-white/10 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>
      <div id="mobile-navigation" hidden={!open} className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-[#0f172a] md:hidden">
        <div className="site-container grid gap-1 py-4">
          {[...links, { href: "#contact", label: "Hablemos de tu proyecto", id: "contact" }].map((link) => (
            <Link key={link.id} href={linkHref(link.href)} onClick={() => setOpen(false)}
              aria-current={active === link.id ? (isHome ? "location" : "page") : undefined}
              className={`flex min-h-12 items-center rounded-lg px-3 text-base hover:bg-white/5 ${active === link.id ? "text-[var(--brand)]" : "text-white"}`}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
