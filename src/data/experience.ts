import { Experience } from "@/src/types/experience";

export const experience: Experience[] = [
  {
    company: "BaiTIC Solutions",
    role: "Desarrollador Fullstack",
    start: new Date(2023, 1),
    end: undefined,
    description:
      "Desarrollo fullstack de aplicaciones web modernas y mantenimiento de sistemas legacy. Implementación de nuevas funcionalidades, mejora de aplicaciones existentes y trabajo con múltiples tecnologías dentro de arquitecturas escalables.",
  },
  {
    company: "3dB Consult",
    role: "Técnico diseñador de redes",
    start: new Date(2022, 6),
    end: new Date(2023, 0),
    description:
      "Diseño lógico de redes de telecomunicaciones mediante parametrización en Excel y automatización de procesos mediante macros.",
  },
].sort((a, b) => b.start.getTime() - a.start.getTime());
