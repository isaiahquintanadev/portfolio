export type ProjectStatus = "Live" | "Client" | "WIP";

/* 
Live: Proyecto personal publicado
ClientL Proyecto de cliente
WIP: Proyecto en desarrollo
*/

export type Project = {
  title: string;
  description: string;
  tech: string[]; // Ejemplo: ["Next.js", "TypeScript", "Tailwind", "MDX"]
  href?: string; // Ejemplo: "https://myblog.com"
  repo?: string; // Ejemplo: "https://github.com/isaiah/personal-blog"
  status?: ProjectStatus;
  image?: string; // Ejemplo: "/projects/blog.png"
  featured?: boolean; // De cara a futuro mostrar mejores proyectos arriba si es true
};
