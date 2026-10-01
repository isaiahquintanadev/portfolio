import Link from "next/link";
import ProjectGrid from "@/src/components/projects/ProjectGrid";
import JsonLd from "@/src/components/seo/JsonLd";
import { publicProjects } from "@/src/data/projects";
import { absoluteUrl, site } from "@/src/data/site";
import { breadcrumbSchema, pageMetadata, projectPath } from "@/src/lib/seo";

export const metadata = pageMetadata({
  title: "Proyectos de desarrollo web",
  description: "Explora mis proyectos de desarrollo full-stack: aplicaciones web, plataformas y webs de clientes. Cada caso explica la necesidad, mi trabajo y la solución.",
  path: "/proyectos",
});

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 pb-16 pt-32">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "CollectionPage", url: absoluteUrl("/proyectos"), name: "Proyectos de desarrollo web", isPartOf: { "@id": `${site.url}/#website` }, mainEntity: { "@type": "ItemList", itemListElement: publicProjects.map((project, index) => ({ "@type": "ListItem", position: index + 1, name: project.title, url: absoluteUrl(projectPath(project)) })) } },
          breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Proyectos", path: "/proyectos" }]),
        ],
      }} />
      <nav aria-label="Migas de pan" className="mb-8 text-sm text-white/70">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="hover:text-white">Inicio</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Proyectos</li>
        </ol>
      </nav>
      <div className="mb-12 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-purple-200">Portfolio de Isaiah Quintana</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Proyectos de desarrollo web</h1>
        <p className="mt-5 text-base leading-8 text-white/75">Aplicaciones, productos y webs que he desarrollado. En cada caso encontrarás el contexto del proyecto, mi participación y las decisiones técnicas que dieron forma a la solución.</p>
      </div>
      <ProjectGrid projects={publicProjects} headingLevel={2} />
      <div className="mt-12 text-center">
        <Link href="/#contact" className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10">Cuéntame tu proyecto</Link>
      </div>
    </main>
  );
}
