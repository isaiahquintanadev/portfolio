import Link from "next/link";
import { site } from "@/src/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 py-10">
      <div className="site-container flex flex-col justify-between gap-6 sm:flex-row">
        <div className="text-sm text-muted">
          <p className="font-medium text-white">Isaiah Hub / Isaiah Quintana</p>
          <p className="mt-2">Desarrollo web a medida en Bilbao y Bizkaia.</p>
          <p className="mt-2">© {new Date().getFullYear()} {site.name}</p>
        </div>
        <nav aria-label="Navegación del pie de página" className="flex flex-wrap items-start gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/proyectos" className="inline-flex min-h-11 items-center hover:text-white">Proyectos</Link>
          <Link href="/#services" className="inline-flex min-h-11 items-center hover:text-white">Servicios</Link>
          <Link href="/#experience" className="inline-flex min-h-11 items-center hover:text-white">Experiencia</Link>
          <Link href="/#tech" className="inline-flex min-h-11 items-center hover:text-white">Tecnologías</Link>
          <Link href="/#contact" className="inline-flex min-h-11 items-center hover:text-white">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}
