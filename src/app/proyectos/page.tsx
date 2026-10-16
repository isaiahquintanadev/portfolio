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
    <main id="main-content" tabIndex={-1} className="site-container pb-24 pt-28 sm:pt-36">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "CollectionPage", url: absoluteUrl("/proyectos"), name: "Proyectos de desarrollo web", isPartOf: { "@id": `${site.url}/#website` }, mainEntity: { "@type": "ItemList", itemListElement: publicProjects.map((project, index) => ({ "@type": "ListItem", position: index + 1, name: project.title, url: absoluteUrl(projectPath(project)) })) } },
          breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Proyectos", path: "/proyectos" }]),
        ],
      }} />
      <nav aria-label="Migas de pan" className="mb-10 text-sm text-muted">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="hover:text-white">Inicio</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Proyectos</li>
        </ol>
      </nav>
      <div className="mb-14 max-w-3xl sm:mb-20">
        <h1 className="section-title text-balance">Proyectos de desarrollo web</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">De una web de negocio local a una plataforma a medida. Aquí puedes ver qué necesitaba cada proyecto, cómo lo resolví y el trabajo que hay detrás del resultado.</p>
      </div>
      <ProjectGrid projects={publicProjects} headingLevel={2} highlightFirst={false} />
      <aside className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center" aria-labelledby="projects-contact">
        <div>
          <h2 id="projects-contact" className="text-2xl font-semibold tracking-tight">¿Qué necesitas construir?</h2>
          <p className="mt-3 leading-7 text-muted">Cuéntame la idea y el contexto de tu negocio.</p>
        </div>
        <Link href="/#contact" className="button-primary shrink-0">Hablemos de tu proyecto</Link>
      </aside>
    </main>
  );
}
