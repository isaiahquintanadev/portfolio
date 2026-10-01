export const site = {
  url: "https://isaiahhub.com",
  name: "Isaiah Quintana",
  title: "Isaiah Quintana | Desarrollador full-stack",
  description:
    "Soy Isaiah Quintana, desarrollador full-stack. Diseño y desarrollo aplicaciones web, productos SaaS e integraciones con Next.js, React y TypeScript.",
  email: "isaiahquintanadev@gmail.com",
  github: "https://github.com/isaiahquintanadev",
  linkedin: "https://www.linkedin.com/in/isaiah-quintana-serradilla-85a48723b/",
} as const;

export const isPreview = process.env.VERCEL_ENV === "preview";

export function absoluteUrl(path: string = "/") {
  return new URL(path, site.url).toString();
}
