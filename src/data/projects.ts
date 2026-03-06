import { Project } from "@/src/types/project";

export const projects: Project[] = [
  {
    title: "Personal Blog",
    description:
      "Un blog técnico moderno construido con Next.js y MDX enfocado en rendimiento, SEO y experiencia de desarrollo.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    href: "#",
    repo: "#",
    status: "WIP",
    image: "/projects/blog.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Mi portfolio personal centrado en un diseño elegante, animaciones sutiles y una arquitectura limpia.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    href: "#",
    repo: "#",
    status: "Live",
    image: "/projects/portfolio.png",
  },
  {
    title: "Side Project API",
    description:
      "Proyecto backend experimental explorando GraphQL, validación de esquemas y arquitectura escalable.",
    tech: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
    repo: "#",
    status: "WIP",
    image: "/projects/api.png",
  },
];
