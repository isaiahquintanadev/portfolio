export type ProjectStatus = "Live" | "WIP";

export type Project = {
  title: string;
  description: string;
  tech: string[]; // Ejemplo: ["Next.js", "TypeScript", "Tailwind", "MDX"]
  href?: string; // Ejemplo: "https://myblog.com"
  repo?: string; // Ejemplo: "https://github.com/isaiah/personal-blog"
  status?: ProjectStatus;
  image?: string; // Ejemplo: "/projects/blog.png"
};
