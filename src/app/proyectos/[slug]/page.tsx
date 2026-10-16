import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/src/components/seo/JsonLd";
import { getProject, publicProjects } from "@/src/data/projects";
import { site } from "@/src/data/site";
import { pageMetadata, projectPath, projectSchema, projectSocialImage } from "@/src/lib/seo";
import type { Project } from "@/src/types/project";

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
    <section>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-muted">{text}</p>}
      {!!items?.length && <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-8 text-muted marker:text-[#c4b5fd]">{items.map((item) => <li key={item}>{item}</li>)}</ul>}
    </section>
  );
}

function relatedProjects(project: Project) {
  const candidates = publicProjects.filter((item) => item.slug !== project.slug);
  const explicit = candidates.filter((item) => project.relatedSlugs?.includes(item.slug));
  if (explicit.length) return explicit.slice(0, 2);

  return candidates
    .map((item) => ({
      project: item,
      sharedTechnologies: item.tech.filter((tech) => project.tech.includes(tech)).length,
    }))
    .filter((item) => item.sharedTechnologies > 0)
    .sort((a, b) => b.sharedTechnologies - a.sharedTechnologies)
    .slice(0, 2)
    .map((item) => item.project);
}

const statusLabels = { Live: "Publicado", Client: "Proyecto de cliente", Finished: "Terminado", WIP: "En desarrollo" };

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const study = project.caseStudy;
  const related = relatedProjects(project);
  const cover = project.previewImage ?? (project.image ? { src: project.image, alt: project.imageAlt ?? project.title } : undefined);
  const isLogo = !project.previewImage && project.imageKind === "logo";

  return (
    <main id="main-content" tabIndex={-1} className="site-container pb-24 pt-28 sm:pt-36">
      <JsonLd data={projectSchema(project)} />
      <nav aria-label="Migas de pan" className="mb-10 text-sm text-muted">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="hover:text-white">Inicio</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{project.title}</li>
        </ol>
      </nav>

      <article>
        <header>
          <div className="grid gap-8 lg:grid-cols-[1fr_240px] lg:items-end lg:gap-16">
            <div className="min-w-0">
              {project.category && <p className="mb-4 text-sm text-[#c4b5fd]">{project.category}</p>}
              <h1 className="section-title break-words text-balance">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-stretch">
              {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="button-primary" aria-label={`Visitar ${project.title} en una nueva pestaña`}>Visitar proyecto<ArrowUpRight size={16} aria-hidden="true" /></a>}
              {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="button-secondary">Ver código</a>}
              {project.access === "private" && <p className="w-full text-sm leading-6 text-muted lg:text-center">La plataforma requiere acceso privado.</p>}
            </div>
          </div>

          {cover && (
            <figure className="mt-10 sm:mt-14">
              <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#151e32] ${isLogo ? "aspect-[16/8]" : "aspect-[16/10] sm:aspect-[16/9]"}`}>
                <Image src={cover.src} alt={cover.alt} fill preload sizes="(min-width: 1200px) 1152px, calc(100vw - 48px)" className={isLogo ? "object-contain p-10 sm:p-20" : "object-contain"} />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-muted">{isLogo ? `Identidad de ${project.title}.` : cover.alt}</figcaption>
            </figure>
          )}
        </header>

        <div className="mt-14 grid gap-14 border-t border-white/10 pt-12 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
          <div className="max-w-3xl space-y-12 sm:space-y-16">
            {!!project.fullDescription?.length && <section><h2 className="text-2xl font-semibold tracking-tight">El proyecto</h2>{project.fullDescription.map((paragraph) => <p key={paragraph} className="mt-5 leading-8 text-muted">{paragraph}</p>)}</section>}
            <CaseSection title="La necesidad" text={study?.problem} />
            <CaseSection title="La solución" text={study?.solution} />
            <CaseSection title="Qué permite hacer" items={study?.features} />
            <CaseSection title="Retos del desarrollo" items={study?.challenges} />
            <CaseSection title="Decisiones técnicas" items={study?.architecture} />
            {study?.outcome && <section className="border-l-2 border-[#c4b5fd] pl-6 sm:pl-8"><h2 className="text-2xl font-semibold tracking-tight">El resultado</h2><p className="mt-5 text-lg leading-8 text-muted">{study.outcome}</p></section>}
          </div>

          <aside aria-label="Participación y detalles del proyecto" className="min-w-0 border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {study?.role && <section><h2 className="text-xl font-semibold">Mi participación</h2><p className="mt-4 text-sm leading-7 text-muted">{study.role}</p></section>}
            <dl className="mt-8 space-y-5 text-sm">
              <div><dt className="text-muted">Desarrollo</dt><dd className="mt-1 font-medium">{site.name}</dd></div>
              {project.status && <div><dt className="text-muted">Estado</dt><dd className="mt-1 font-medium">{statusLabels[project.status]}</dd></div>}
              {project.client && <div><dt className="text-muted">Cliente o marca</dt><dd className="mt-1 font-medium">{project.client}</dd></div>}
              {project.year && <div><dt className="text-muted">Año</dt><dd className="mt-1 font-medium">{project.year}</dd></div>}
            </dl>
            <section className="mt-8 border-t border-white/10 pt-8">
              <h2 className="text-xl font-semibold">Tecnologías</h2>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-3 text-sm leading-6 text-muted">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            </section>
          </aside>
        </div>

        {!!project.gallery?.length && <section className="mt-16 sm:mt-20"><h2 className="text-3xl font-semibold tracking-tight">El proyecto en imágenes</h2><div className="mt-8 grid gap-8 sm:grid-cols-2">{project.gallery.map((picture) => <figure key={picture.src}><div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#151e32]"><Image src={picture.src} alt={picture.alt} fill sizes="(min-width: 1200px) 536px, (min-width: 640px) 50vw, calc(100vw - 48px)" className="object-contain" /></div>{picture.caption && <figcaption className="mt-3 text-sm leading-6 text-muted">{picture.caption}</figcaption>}</figure>)}</div></section>}
        {!!project.links?.length && <section className="mt-12"><h2 className="text-xl font-semibold">Enlaces del proyecto</h2><ul className="mt-4 space-y-2">{project.links.map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-[#c4b5fd] underline underline-offset-4 hover:text-white">{link.label}</a></li>)}</ul></section>}
      </article>

      <aside className="mt-20 rounded-xl bg-[#151e32] p-7 sm:p-10" aria-labelledby="project-contact">
        <h2 id="project-contact" className="text-balance text-3xl font-semibold tracking-tight">¿Necesitas algo parecido?</h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted">Cuéntame qué necesitas construir, para quién y qué quieres mejorar en tu negocio. Veremos cómo darle forma.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/#contact" className="button-primary">Hablemos de tu proyecto</Link>
          <Link href="/proyectos" className="button-secondary">Ver todos los proyectos</Link>
        </div>
      </aside>

      {!!related.length && <section className="mt-16 border-t border-white/10 pt-10"><h2 className="text-2xl font-semibold tracking-tight">Otros proyectos que puedes explorar</h2><ul className="mt-6 grid gap-6 sm:grid-cols-2">{related.map((item) => <li key={item.slug}><Link href={projectPath(item)} className="group flex min-h-16 items-center justify-between gap-5 py-3"><span><span className="block text-lg font-medium group-hover:text-[#c4b5fd]">{item.title}</span><span className="mt-1 block text-sm text-muted">{item.category}</span></span><ArrowUpRight size={20} className="shrink-0 text-[#c4b5fd]" aria-hidden="true" /></Link></li>)}</ul></section>}
    </main>
  );
}
