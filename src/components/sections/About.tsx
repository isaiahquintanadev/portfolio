import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-shell border-t border-white/10">
      <div className="site-container grid items-center gap-10 md:grid-cols-[200px_1fr] lg:gap-20">
        <div className="relative aspect-square w-24 overflow-hidden rounded-full bg-white md:w-full">
          <Image src="/avatar.jpeg" alt="Ilustración de Isaiah Quintana" fill sizes="(min-width: 768px) 200px, 96px" className="object-cover object-[center_25%]" />
        </div>
        <div>
          <h2 id="about-title" className="section-title">Soy Isaiah. Diseño, desarrollo y conecto las piezas.</h2>
          <div className="mt-6 grid gap-5 text-muted lg:grid-cols-2">
            <p className="leading-8">Vengo de un entorno técnico de datos, procesos y automatización. Hoy trabajo como desarrollador full-stack: conecto el diseño de una interfaz con la lógica, los datos y las integraciones que la hacen útil.</p>
            <p className="leading-8">Trabajo de principio a fin: interfaz, backend, datos y despliegue. Cuido que el resultado sea claro, rápido y fácil de mantener, con una base que permita seguir mejorándolo.</p>
          </div>
          <Link href="/proyectos" className="mt-5 inline-flex min-h-11 items-center text-sm font-medium text-[var(--brand)] underline underline-offset-4 hover:text-white">Conoce mi trabajo en los casos de estudio</Link>
        </div>
      </div>
    </section>
  );
}
