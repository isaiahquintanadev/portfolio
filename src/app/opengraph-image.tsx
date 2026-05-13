import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Isaiah Quintana, desarrollador full-stack";
export const size = {
  width: 1200,
  height: 630,
};
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
          padding: 72,
          color: "white",
          background:
            "radial-gradient(circle at 18% 18%, rgba(168, 85, 247, 0.42), transparent 34%), radial-gradient(circle at 82% 20%, rgba(59, 130, 246, 0.34), transparent 32%), linear-gradient(135deg, #020617 0%, #0f172a 52%, #111827 100%)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "#6ee7b7",
                boxShadow: "0 0 32px rgba(110, 231, 183, 0.85)",
              }}
            />
            Portfolio personal
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 24,
              color: "rgba(255,255,255,0.72)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            Next.js · TypeScript · Producto
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              margin: 0,
              maxWidth: 880,
              fontSize: 82,
              lineHeight: 0.95,
              letterSpacing: 0,
              fontWeight: 800,
            }}
          >
            Isaiah Quintana
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 900,
              fontSize: 34,
              lineHeight: 1.25,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Desarrollador full-stack especializado en aplicaciones web modernas,
            productos SaaS, dashboards e integraciones.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 24,
            color: "rgba(255,255,255,0.76)",
          }}
        >
          {["PsicotestPol", "Alter Ego Experience", "Fast Image Convert"].map(
            (project) => (
              <div
                key={project}
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 999,
                  padding: "12px 20px",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                {project}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
