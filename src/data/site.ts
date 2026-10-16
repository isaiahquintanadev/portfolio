export const site = {
  url: "https://isaiahhub.com",
  name: "Isaiah Quintana",
  brand: "Isaiah Hub",
  title: "Diseño y desarrollo web en Bilbao | Isaiah Quintana",
  description:
    "Páginas web a medida, aplicaciones y software para negocios en Bilbao y Bizkaia. Soy Isaiah Quintana: diseño y desarrollo tu proyecto de principio a fin.",
  email: "isaiahquintanadev@gmail.com",
  github: "https://github.com/isaiahquintanadev",
  linkedin: "https://www.linkedin.com/in/isaiah-quintana-serradilla-85a48723b/",
} as const;

export const isPreview = process.env.VERCEL_ENV === "preview";

export function absoluteUrl(path: string = "/") {
  return new URL(path, site.url).toString();
}
