export type ProjectStatus = "Live" | "Client" | "Finished" | "WIP";

/* 
Live: Proyecto publicado
Client: Proyecto de cliente
Finished: Proyecto terminado
WIP: Proyecto en desarrollo
*/

export type ProjectCaseStudy = {
  problem: string;
  solution: string;
  role: string;
  features: string[];
  challenges?: string[];
  architecture?: string[];
  outcome?: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[]; // Ejemplo: ["Next.js", "TypeScript", "Tailwind", "MDX"]
  href?: string; // Ejemplo: "https://myblog.com"
  access?: "public" | "private"; // Acceso a la plataforma enlazada, no a la ficha.
  repo?: string; // Ejemplo: "https://github.com/isaiah/personal-blog"
  status?: ProjectStatus;
  image?: string; // Ejemplo: "/projects/blog.png"
  imageAlt?: string;
  ogImage?: string; // Imagen social de 1200 × 630; por defecto se genera una.
  seoTitle?: string; // Sin el sufijo "| Isaiah Quintana".
  seoDescription?: string;
  client?: string;
  year?: number;
  updatedAt?: string; // Fecha real de actualización del contenido, YYYY-MM-DD.
  published?: boolean; // false excluye el proyecto de rutas, listados y sitemap.
  fullDescription?: string[];
  gallery?: { src: string; alt: string; caption?: string }[];
  relatedSlugs?: string[];
  links?: { label: string; href: string }[];
  featured?: boolean; // De cara a futuro mostrar mejores proyectos arriba si es true
  spotlight?: boolean;
  metrics?: ProjectMetric[];
  caseStudy?: ProjectCaseStudy;
};
