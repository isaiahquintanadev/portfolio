import type { Metadata } from "next";
import { absoluteUrl, site } from "@/src/data/site";
import type { Project } from "@/src/types/project";

export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: "es_ES",
      type: "website",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function projectPath(project: Project) {
  return `/proyectos/${project.slug}`;
}

export function projectSocialImage(project: Project) {
  return project.ogImage ?? `${projectPath(project)}/social-image`;
}

export const identitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: "Desarrollador full-stack",
      image: absoluteUrl("/avatar.jpeg"),
      sameAs: [site.github, site.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: `Portfolio de ${site.name}`,
      url: site.url,
      inLanguage: "es",
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectSchema(project: Project) {
  const url = absoluteUrl(projectPath(project));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${project.title} | ${site.name}`,
        description: project.seoDescription ?? project.description,
        inLanguage: "es",
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: { "@id": `${url}#project` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.title,
        description: project.description,
        url: project.href ?? url,
        creator: { "@id": `${site.url}/#person` },
        ...(project.image ? { image: absoluteUrl(project.image) } : {}),
      },
      {
        ...breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Proyectos", path: "/proyectos" },
          { name: project.title, path: projectPath(project) },
        ]),
        "@id": `${url}#breadcrumb`,
      },
    ],
  };
}
