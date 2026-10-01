import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-6 pb-20 pt-40 text-center">
      <p className="text-sm font-medium text-purple-200">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Página no encontrada</h1>
      <p className="mt-5 leading-7 text-white/75">La dirección que has abierto no corresponde a una página del portfolio.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950">Volver al inicio</Link>
        <Link href="/proyectos" className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium">Explorar proyectos</Link>
      </div>
    </main>
  );
}
