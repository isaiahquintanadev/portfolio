import { Project } from "@/src/types/project";

export const projects: Project[] = [
  {
    title: "Alter Ego Experience",
    description:
      "Aplicación web desarrollada para eventos y discotecas que permite gestionar juegos interactivos durante fiestas. Incluye panel de administración para gestionar participantes, importación masiva desde Excel y ranking en tiempo real visible en pantallas del recinto. Utiliza Supabase para sincronización en tiempo real y base de datos PostgreSQL.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "PostgreSQL",
      "Framer Motion",
      "XLSX",
    ],
    href: "https://alterego-web.vercel.app/",
    status: "Live",
    image: "/projects/alterego.png",
    featured: true,
  },
  {
    title: "Fast Image Convert",
    description:
      "Aplicación web de alto rendimiento para convertir imágenes entre formatos (JPG, PNG, WEBP y AVIF) directamente desde el navegador. Implementa páginas dinámicas optimizadas para SEO que generan múltiples combinaciones de conversión para maximizar el posicionamiento orgánico. Desplegado en Vercel con procesamiento de imágenes mediante Sharp.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Sharp", "Vercel"],
    href: "https://fastimgconvert.vercel.app/",
    status: "Client",
    image: "/projects/fastimgconvert.png",
  },
];
