import type { MetadataRoute } from "next";

import { publicProjects } from "@/src/data/projects";
import { absoluteUrl } from "@/src/data/site";
import { projectPath } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/") },
    { url: absoluteUrl("/proyectos") },
    ...publicProjects.map((project) => ({
      url: absoluteUrl(projectPath(project)),
      ...(project.updatedAt ? { lastModified: project.updatedAt } : {}),
    })),
  ];
}
