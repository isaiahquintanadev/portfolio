import { Experience } from "@/src/types/experience";

export const experience: Experience[] = [
  {
    company: "BaiTIC Solutions",
    role: "Desarrollador Fullstack",
    start: new Date(2023, 1),
    end: undefined,
    description:
      "Desarrollo y mantenimiento de aplicaciones web, combinando nuevas funcionalidades, evolución de sistemas existentes y trabajo sobre entornos con distintas tecnologías.",
    context:
      "Trabajo en proyectos reales donde conviven producto, mantenimiento, integraciones y mejora continua de aplicaciones en uso.",
    responsibilities: [
      "Desarrollo de funcionalidades frontend y backend.",
      "Mantenimiento y evolución de aplicaciones existentes.",
      "Análisis de requisitos y traducción a soluciones técnicas.",
      "Trabajo con bases de datos, APIs e interfaces de administración.",
      "Mejora progresiva de código, rendimiento y experiencia de usuario.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "SQL",
      "APIs",
      "Git",
    ],
    impact: [
      "Participación en proyectos con necesidades reales de negocio.",
      "Capacidad para trabajar tanto en producto nuevo como en sistemas legacy.",
      "Visión full-stack para conectar interfaz, datos y lógica de aplicación.",
    ],
    featured: true,
  },
  {
    company: "3dB Consult",
    role: "Técnico diseñador de redes",
    start: new Date(2022, 6),
    end: new Date(2023, 0),
    description:
      "Diseño lógico de redes de telecomunicaciones mediante parametrización en Excel y automatización de procesos mediante macros.",
    context:
      "Experiencia técnica previa al desarrollo web, centrada en precisión, procesos, datos y automatización.",
    responsibilities: [
      "Parametrización de información técnica en hojas de cálculo.",
      "Diseño lógico de redes siguiendo criterios definidos.",
      "Automatización de tareas repetitivas mediante macros.",
    ],
    technologies: ["Excel", "Macros", "Automatización", "Datos técnicos"],
    impact: [
      "Base sólida en análisis de procesos y estructura de datos.",
      "Primer acercamiento práctico a la automatización como forma de ahorrar tiempo y reducir errores.",
    ],
  },
].sort((a, b) => b.start.getTime() - a.start.getTime());
