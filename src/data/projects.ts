import { Project } from "@/src/types/project";

export const projects: Project[] = [
  {
    title: "PsicotestPol",
    description:
      "Producto SaaS para opositores de policía municipal. Centraliza práctica diaria, generación de tests, simulacros y estadísticas para que el usuario pueda entrenar con más foco y medir su evolución.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "Stripe",
      "Resend",
      "Vercel",
    ],
    href: "https://psicotestpol-web.vercel.app/",
    status: "Live",
    image: "/projects/logo_header_dark.png",
    featured: true,
    spotlight: true,
    metrics: [
      { value: "Tests", label: "Generación personalizada" },
      { value: "Simulacros", label: "Entrenamiento tipo examen" },
      { value: "Stats", label: "Seguimiento de rendimiento" },
    ],
    caseStudy: {
      problem:
        "Los opositores necesitan practicar de forma constante, medir su evolución y entrenar con simulacros realistas sin depender siempre de materiales cerrados o poco personalizados.",
      solution:
        "Una plataforma web donde el usuario puede generar sus propios tests, realizar simulacros de examen y consultar estadísticas para detectar puntos débiles y preparar mejor cada sesión de estudio.",
      role: "Diseño y desarrollo full-stack de la plataforma, desde la experiencia de usuario hasta la integración de servicios, persistencia de datos, pagos, emails transaccionales y despliegue.",
      features: [
        "Generación de tests personalizados.",
        "Simulacros de examen enfocados a oposición.",
        "Estadísticas de progreso y rendimiento.",
        "Flujos de usuario preparados para estudio recurrente.",
        "Base técnica preparada para monetización y comunicaciones.",
      ],
      challenges: [
        "Diseñar una experiencia clara para sesiones largas de práctica.",
        "Organizar datos de resultados para convertirlos en métricas útiles.",
        "Mantener una interfaz responsive cómoda en móvil.",
        "Preparar una base escalable para nuevas funcionalidades de entrenamiento.",
      ],
      architecture: [
        "Next.js y React para la interfaz y estructura de producto.",
        "Supabase como base para datos y funcionalidades de backend.",
        "Stripe para flujos de pago y monetización.",
        "Resend para comunicaciones transaccionales.",
        "Vercel para despliegue y entrega continua.",
      ],
      outcome:
        "Un producto especializado, orientado a un nicho concreto y preparado para crecer con nuevas herramientas de entrenamiento, métricas y contenidos.",
    },
  },
  {
    title: "Alter Ego Experience",
    description:
      "Aplicación para eventos y discotecas con administración de participantes, importación desde Excel, QR de validación y ranking en tiempo real para pantallas del recinto.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Resend",
      "QRCode",
      "html5-qrcode",
      "Framer Motion",
      "XLSX",
    ],
    href: "https://alterego-web.vercel.app/",
    status: "Finished",
    image: "/projects/alterego-logo.png",
    featured: true,
    metrics: [
      { value: "Realtime", label: "Ranking sincronizado" },
      { value: "QR", label: "Generación y escaneo" },
      { value: "Excel", label: "Importación masiva" },
    ],
    caseStudy: {
      problem:
        "El evento necesitaba una experiencia interactiva fácil de activar en sala, con gestión de participantes, validación ágil y ranking visible en tiempo real durante la dinámica.",
      solution:
        "Una aplicación full-stack para administrar participantes, importar datos desde Excel, generar y leer códigos QR, sincronizar resultados en tiempo real y mostrar rankings preparados para pantallas del recinto.",
      role: "Desarrollo full-stack del sistema, panel de administración, flujos de validación, integraciones y experiencia visual para evento.",
      features: [
        "Panel de administración para gestionar participantes.",
        "Importación masiva desde Excel.",
        "Ranking en tiempo real para pantallas del evento.",
        "Generación de QR para participantes o accesos.",
        "Escaneo de QR con cámara para validación.",
      ],
      challenges: [
        "Sincronizar cambios en tiempo real durante una experiencia presencial.",
        "Hacer que la validación con cámara fuese rápida y usable.",
        "Preparar una interfaz clara para personal de administración y público.",
        "Combinar una experiencia visual de evento con herramientas de gestión.",
      ],
      architecture: [
        "Next.js, React y TypeScript como base de aplicación.",
        "Supabase y PostgreSQL para datos y sincronización en tiempo real.",
        "Stripe para pagos o flujos comerciales asociados.",
        "Resend para envíos transaccionales.",
        "qrcode para generar códigos QR.",
        "html5-qrcode para lectura de QR desde cámara.",
      ],
      outcome:
        "Una solución terminada para evento real, combinando administración, interacción presencial, datos en tiempo real e integraciones de producto.",
    },
  },
  {
    title: "Fast Image Convert",
    description:
      "Herramienta web para convertir imágenes entre JPG, PNG, WEBP y AVIF, con páginas dinámicas orientadas a SEO y procesamiento optimizado mediante Sharp.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Sharp", "Vercel"],
    href: "https://fastimgconvert.vercel.app/",
    status: "Live",
    image: "/projects/fastimgconvert.png",
    metrics: [
      { value: "4 formatos", label: "JPG, PNG, WEBP y AVIF" },
      { value: "SEO", label: "Rutas dinámicas" },
      { value: "Sharp", label: "Procesamiento optimizado" },
    ],
    caseStudy: {
      problem:
        "Los usuarios necesitan convertir imágenes rápido entre formatos modernos sin instalar herramientas pesadas y con una experiencia directa desde navegador.",
      solution:
        "Una aplicación web centrada en conversión de imágenes, rutas dinámicas optimizadas para SEO y un flujo sencillo para transformar archivos entre JPG, PNG, WEBP y AVIF.",
      role: "Desarrollo del producto, estructura SEO, interfaz de conversión y despliegue optimizado en Vercel.",
      features: [
        "Conversión entre formatos de imagen populares.",
        "Páginas dinámicas para combinaciones de conversión.",
        "Interfaz directa y ligera.",
        "Procesamiento de imágenes con Sharp.",
      ],
      challenges: [
        "Crear una arquitectura escalable para muchas rutas SEO.",
        "Mantener una experiencia rápida pese al procesamiento de archivos.",
        "Presentar una utilidad técnica de forma simple para cualquier usuario.",
      ],
      architecture: [
        "Next.js para rutas, renderizado y SEO.",
        "React y TypeScript para la experiencia de conversión.",
        "Sharp para procesamiento de imágenes.",
        "TailwindCSS para una interfaz ligera y responsive.",
        "Vercel para despliegue y rendimiento.",
      ],
      outcome:
        "Una herramienta enfocada a utilidad, rendimiento y posicionamiento orgánico, con una base preparada para escalar a más formatos y páginas específicas.",
    },
  },
];
