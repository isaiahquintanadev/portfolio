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
  challenges: string[];
  architecture: string[];
  outcome: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[]; // Ejemplo: ["Next.js", "TypeScript", "Tailwind", "MDX"]
  href?: string; // Ejemplo: "https://myblog.com"
  repo?: string; // Ejemplo: "https://github.com/isaiah/personal-blog"
  status?: ProjectStatus;
  image?: string; // Ejemplo: "/projects/blog.png"
  featured?: boolean; // De cara a futuro mostrar mejores proyectos arriba si es true
  caseStudy?: ProjectCaseStudy;
};
