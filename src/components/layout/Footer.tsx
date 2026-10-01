import Link from "next/link";
import { site } from "@/src/data/site";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-foreground/50">
        <p>© {new Date().getFullYear()} {site.name} — Todos los derechos reservados</p>
        <nav aria-label="Navegación del pie de página" className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-white/70">
          <Link href="/">Inicio</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/#contact">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}
