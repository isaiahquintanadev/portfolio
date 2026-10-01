import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Mail } from "lucide-react";
import JsonLd from "@/src/components/seo/JsonLd";
import { getProject, publicProjects } from "@/src/data/projects";
import { site } from "@/src/data/site";
import { pageMetadata, projectPath, projectSchema, projectSocialImage } from "@/src/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publicProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return pageMetadata({
    title: project.seoTitle ?? project.title,
    description: project.seoDescription ?? project.description,
    path: projectPath(project),
    image: projectSocialImage(project),
  });
}

function CaseSection({ title, text, items }: { title: string; text?: string; items?: string[] }) {
  if (!text && !items?.length) return null;
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-white/75">{text}</p>}
      {!!items?.length && <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-white/75 marker:text-purple-300">{items.map((item) => <li key={item}>{item}</li>)}</ul>}
    </section>
  );
}

const statusLabels = { Live: "Publicado", Client: "Proyecto de cliente", Finished: "Terminado", WIP: "En desarrollo" };

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const study = project.caseStudy;
  const related = publicProjects.filter((item) => item.slug !== project.slug && project.relatedSlugs?.includes(item.slug));

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 pb-16 pt-32">
      <JsonLd data={projectSchema(project)} />
      <nav aria-label="Migas de pan" className="mb-8 text-sm text-white/70">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="hover:text-white">Inicio</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{project.title}</li>
        </ol>
      </nav>
      <article>
        <header className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-purple-200">Proyecto de {site.name}</p>
            <h1 className="mt-4 break-words text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-5 text-base leading-8 text-white/75">{project.description}</p>
            <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75">
              {project.status && <div><dt className="text-white/60">Estado</dt><dd className="mt-1">{statusLabels[project.status]}</dd></div>}
              {project.access === "private" && <div><dt className="text-white/60">Acceso a la plataforma</dt><dd className="mt-1">Privado</dd></div>}
              {project.client && <div><dt className="text-white/60">Cliente o marca</dt><dd className="mt-1">{project.client}</dd></div>}
              {project.year && <div><dt className="text-white/60">Año</dt><dd className="mt-1">{project.year}</dd></div>}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 hover:bg-white/90">Visitar proyecto<ArrowUpRight size={16} aria-hidden="true" /></a>}
              {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5">Ver código</a>}
            </div>
          </div>
          {project.image && <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60"><Image src={project.image} alt={project.imageAlt ?? project.title} fill sizes="(min-width: 1152px) 480px, (min-width: 1024px) 42vw, 100vw" className="object-contain p-6 sm:p-10" /></div>}
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {!!project.fullDescription?.length && <section className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 sm:p-8 lg:col-span-2"><h2 className="text-xl font-semibold">El proyecto</h2>{project.fullDescription.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-white/75">{paragraph}</p>)}</section>}
          <CaseSection title="La necesidad" text={study?.problem} />
          <CaseSection title="La solución" text={study?.solution} />
          <CaseSection title="Mi participación" text={study?.role} />
          <CaseSection title="Funcionalidades principales" items={study?.features} />
          <CaseSection title="Retos del desarrollo" items={study?.challenges} />
          <CaseSection title="Decisiones técnicas" items={study?.architecture} />
          <section className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Tecnologías utilizadas</h2>
            <ul className="mt-4 flex flex-wrap gap-2">{project.tech.map((tech) => <li key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">{tech}</li>)}</ul>
          </section>
          <CaseSection title="Resultado" text={study?.outcome} />
          {!!project.metrics?.length && <section className="rounded-2xl border border-white/10 bg-slate-950/45 p-6 sm:p-8 lg:col-span-2"><h2 className="text-xl font-semibold">Aspectos destacados</h2><dl className="mt-5 grid gap-4 sm:grid-cols-3">{project.metrics.map((metric) => <div key={metric.value}><dt className="font-medium text-white">{metric.value}</dt><dd className="mt-2 text-sm leading-6 text-white/75">{metric.label}</dd></div>)}</dl></section>}
        </div>

        {!!project.gallery?.length && <section className="mt-12"><h2 className="text-2xl font-semibold">Imágenes del proyecto</h2><div className="mt-6 grid gap-6 sm:grid-cols-2">{project.gallery.map((picture) => <figure key={picture.src}><div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50"><Image src={picture.src} alt={picture.alt} fill sizes="(min-width: 1152px) 540px, (min-width: 640px) 50vw, 100vw" className="object-contain" /></div>{picture.caption && <figcaption className="mt-3 text-sm leading-6 text-white/75">{picture.caption}</figcaption>}</figure>)}</div></section>}
        {!!project.links?.length && <section className="mt-10"><h2 className="text-xl font-semibold">Enlaces del proyecto</h2><ul className="mt-4 space-y-3">{project.links.map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer" className="text-purple-200 underline underline-offset-4">{link.label}</a></li>)}</ul></section>}
      </article>

      <aside className="mt-12 rounded-2xl border border-purple-300/20 bg-slate-950/60 p-6 sm:p-8" aria-labelledby="project-contact">
        <h2 id="project-contact" className="text-2xl font-semibold">¿Necesitas algo parecido?</h2>
        <p className="mt-3 max-w-2xl leading-7 text-white/75">Soy {site.name}, desarrollador full-stack. Cuéntame qué necesitas construir y el contexto de tu proyecto.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/#contact" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 hover:bg-white/90">Contactar con Isaiah<Mail size={16} aria-hidden="true" /></Link>
          <Link href="/proyectos" className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5">Ver todos los proyectos</Link>
        </div>
      </aside>
      {!!related.length && <section className="mt-12"><h2 className="text-2xl font-semibold">Proyectos relacionados</h2><ul className="mt-5 flex flex-wrap gap-4">{related.map((item) => <li key={item.slug}><Link href={projectPath(item)} className="inline-flex min-h-11 items-center text-purple-200 underline underline-offset-4">{item.title}</Link></li>)}</ul></section>}
    </main>
  );
}
