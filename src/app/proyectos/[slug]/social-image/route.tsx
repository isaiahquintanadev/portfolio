import { ImageResponse } from "next/og";
import { getProject, publicProjects } from "@/src/data/projects";
import { site } from "@/src/data/site";

export function generateStaticParams() {
  return publicProjects.map(({ slug }) => ({ slug }));
}

export const dynamic = "force-static";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) return new Response("Proyecto no encontrado", { status: 404 });
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, color: "white", background: "linear-gradient(135deg, #020617, #281345 60%, #0f172a)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#ddd6fe" }}><span>Proyecto de {site.name}</span><span>isaiahhub.com</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>{project.title}</div>
        <div style={{ fontSize: 28, lineHeight: 1.4, color: "#e2e8f0" }}>{project.seoDescription ?? project.description}</div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#ddd6fe" }}>{project.tech.slice(0, 5).join(" · ")}</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
