import { Project } from "@/src/types/project";

export const projects: Project[] = [
  {
    title: "PsicotestPol",
    description:
      "Plataforma de apoyo para opositores de policía municipal. Permite generar tests personalizados, realizar simulacros de examen, consultar estadísticas de progreso y entrenar con herramientas enfocadas a mejorar la preparación.",
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
    caseStudy: {
      problem:
        "Los opositores necesitan practicar de forma constante, medir su evolución y entrenar con simulacros realistas sin depender siempre de materiales cerrados o poco personalizados.",
      solution:
        "Una plataforma web donde el usuario puede generar sus propios tests, realizar simulacros de examen y consultar estadísticas para detectar puntos débiles y preparar mejor cada sesión de estudio.",
      role: "Diseño y desarrollo full-stack de la plataforma, desde la experiencia de usuario hasta la integración de servicios, persistencia de datos y despliegue.",
      features: [
        "Generación de tests personalizados.",
        "Simulacros de examen enfocados a oposición.",
        "Estadísticas de progreso y rendimiento.",
        "Flujos de usuario preparados para estudio recurrente.",
      ],
      challenges: [
        "Diseñar una experiencia clara para sesiones largas de práctica.",
        "Organizar datos de resultados para convertirlos en métricas útiles.",
        "Mantener una interfaz responsive cómoda en móvil.",
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
      "Aplicación web desarrollada para eventos y discotecas que permite gestionar juegos interactivos durante fiestas. Incluye panel de administración para gestionar participantes, importación masiva desde Excel y ranking en tiempo real visible en pantallas del recinto. Utiliza Supabase para sincronización en tiempo real y base de datos PostgreSQL.",
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
      "Aplicación web de alto rendimiento para convertir imágenes entre formatos (JPG, PNG, WEBP y AVIF) directamente desde el navegador. Implementa páginas dinámicas optimizadas para SEO que generan múltiples combinaciones de conversión para maximizar el posicionamiento orgánico. Desplegado en Vercel con procesamiento de imágenes mediante Sharp.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Sharp", "Vercel"],
    href: "https://fastimgconvert.vercel.app/",
    status: "Live",
    image: "/projects/fastimgconvert.png",
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
