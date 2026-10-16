import { ImageResponse } from "next/og";
import { site } from "@/src/data/site";

export const alt = "Isaiah Hub · Diseño y desarrollo web a medida en Bilbao · Isaiah Quintana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 70px",
          color: "#f8f6ff",
          background: "#100d17",
          fontFamily: "Arial, sans-serif",
          borderLeft: "12px solid #b69aff",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 30, fontWeight: 700 }}>{site.brand}</span>
          <span style={{ fontSize: 23, color: "#c4b8d9" }}>Bilbao · Bizkaia</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <h1 style={{ display: "flex", flexDirection: "column", margin: 0, fontSize: 72, lineHeight: 1.03, letterSpacing: -3, fontWeight: 700 }}>
            <span>Tu negocio,</span>
            <span style={{ color: "#c5abff" }}>su siguiente versión digital.</span>
          </h1>
          <p style={{ margin: 0, maxWidth: 930, fontSize: 28, lineHeight: 1.4, color: "#d3cbdc" }}>
            Páginas web a medida, aplicaciones y software que responden a lo que necesitas.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #3a3048", paddingTop: 24 }}>
          <span style={{ fontSize: 24 }}>{site.name} · Desarrollador full-stack</span>
          <span style={{ fontSize: 24, color: "#c5abff" }}>isaiahhub.com</span>
        </div>
      </div>
    ),
    size,
  );
}
