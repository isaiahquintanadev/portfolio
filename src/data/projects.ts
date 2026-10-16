import { Project } from "@/src/types/project";

export const projects: Project[] = [
  {
    title: "PsicotestPol",
    slug: "psicotestpol",
    category: "Plataforma SaaS",
    summary: "Una plataforma de práctica para opositores: tests personalizados, simulacros y seguimiento del progreso en un mismo lugar.",
    seoTitle: "PsicotestPol: plataforma de tests para opositores",
    imageKind: "logo",
    imageAlt: "Logotipo de PsicotestPol",
    seoDescription: "Desarrollo full-stack de PsicotestPol: plataforma de práctica para opositores con tests personalizados, simulacros, estadísticas e integraciones.",
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
    href: "https://psicotestpol.com",
    access: "private",
    status: "Live",
    image: "/projects/logo_header_dark.png",
    featured: true,
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
    title: "Being Fit",
    slug: "being-fit",
    category: "Web de negocio local",
    summary: "Diseño y desarrollo web para un estudio fitness de mujeres en Bilbao, con su identidad de marca, clases y acceso a reservas.",
    seoTitle: "Being Fit Bilbao: diseño y desarrollo web",
    imageKind: "screenshot",
    imageAlt: "Captura de la web de Being Fit, Woman Fitness Studio",
    seoDescription: "Diseño y desarrollo de la web de Being Fit, un estudio fitness para mujeres en Bilbao, con clases, horarios, tarifas y acceso a reservas.",
    description:
      "Web para Woman Fitness Studio, un estudio fitness para mujeres en Bilbao. Diseño y desarrollo responsive a partir de la identidad de marca, con clases, horarios y tarifas, reservas integradas mediante un iframe proporcionado por Provis Sport, acceso a clase de prueba y WhatsApp, y SEO técnico y local.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Vercel"],
    href: "https://www.beingfit.es",
    status: "Client",
    image: "/projects/being-fit.webp",
    previewImage: {
      src: "/projects/being-fit-portada.webp",
      alt: "Portada pública de Being Fit con la presentación del estudio fitness de Bilbao",
    },
    gallery: [
      {
        src: "/projects/being-fit-clases.webp",
        alt: "Sección de clases de Being Fit con Be Fit y Be Funk y fotografía del equipamiento del estudio",
        caption: "Presentación de las clases en la web pública de Being Fit.",
      },
      {
        src: "/projects/being-fit-horarios.webp",
        alt: "Selector de días y listado de horarios de clases de Being Fit",
        caption: "Consulta de horarios por día. Captura del sitio publicado; la programación puede cambiar.",
      },
    ],
    featured: true,
    spotlight: true,
    metrics: [
      { value: "Marca", label: "Identidad y recursos reales" },
      { value: "Conversión", label: "Clase de prueba y reservas" },
      { value: "SEO local", label: "Visibilidad en Bilbao" },
    ],
    caseStudy: {
      problem:
        "Being Fit necesitaba una nueva web que trasladase la identidad del estudio al entorno digital, presentase su oferta con claridad y facilitase el contacto y las reservas desde cualquier dispositivo.",
      solution:
        "Una web responsive basada en la identidad visual y el material proporcionado por la clienta, con información de clases, horarios, tarifas y servicios, y recorridos hacia la clase de prueba, WhatsApp y reservas.",
      role: "Diseño y desarrollo completo de la web, adaptación de recursos de marca, optimización responsive, SEO técnico y local, accesibilidad y rendimiento, despliegue en Vercel y configuración del dominio existente.",
      features: [
        "Presentación del estudio, clases y servicios.",
        "Consulta de horarios y tarifas.",
        "Flujos hacia clase de prueba, WhatsApp y reservas.",
        "Reservas desde la web mediante un iframe proporcionado por Provis Sport.",
        "Identidad visual y fotografías reales de la marca.",
        "Diseño responsive para móvil y escritorio.",
      ],
      challenges: [
        "Trasladar la identidad del estudio a una experiencia web coherente.",
        "Organizar la oferta y las llamadas a la acción con una jerarquía clara.",
        "Optimizar los recursos visuales cuidando la calidad y el rendimiento.",
        "Cuidar accesibilidad y SEO técnico y local para el estudio en Bilbao.",
      ],
      architecture: [
        "Next.js y React para la estructura y los componentes de la web.",
        "TypeScript para mantener una base de código tipada.",
        "TailwindCSS para el diseño responsive y la adaptación visual de marca.",
        "Integración del sistema de reservas de Provis Sport mediante el iframe proporcionado por la aplicación.",
        "Vercel para el despliegue, con configuración del dominio existente.",
      ],
      outcome:
        "Una web publicada en el dominio de Being Fit, alineada con la marca y con información clara para conocer el estudio, consultar su oferta y dar el siguiente paso hacia una clase de prueba o una reserva.",
    },
  },
  {
    title: "Alter Ego Experience",
    slug: "alter-ego-experience",
    category: "Aplicación para eventos",
    summary: "Gestión de participantes, validación con QR y un ranking en tiempo real para llevar la experiencia digital a un evento presencial.",
    seoTitle: "Alter Ego Experience: aplicación para eventos",
    imageKind: "logo",
    imageAlt: "Logotipo de Alter Ego Experience",
    seoDescription: "Desarrollo full-stack de Alter Ego Experience: gestión de participantes para eventos, importación desde Excel, validación QR y rankings en tiempo real.",
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
    href: "https://alteregoexperience.org",
    status: "Finished",
    image: "/projects/alterego-logo.png",
    previewImage: {
      src: "/projects/alter-ego-portada.webp",
      alt: "Portada de la web pública de Alter Ego Experience con acceso a próximos eventos",
    },
    gallery: [
      {
        src: "/projects/alter-ego-eventos.webp",
        alt: "Listado público de eventos de Alter Ego Experience con buscador y filtros de disponibilidad",
        caption: "Listado de eventos, búsqueda y filtros de disponibilidad en la web pública de Alter Ego Experience.",
      },
    ],
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
    slug: "fast-image-convert",
    category: "Herramienta web",
    summary: "Un conversor de imágenes entre JPG, PNG, WEBP y AVIF, con un flujo sencillo y páginas específicas para cada conversión.",
    seoTitle: "Fast Image Convert: conversor de imágenes web",
    imageKind: "screenshot",
    imageAlt: "Captura de la herramienta Fast Image Convert",
    seoDescription: "Desarrollo de Fast Image Convert, una herramienta web de conversión de imágenes entre JPG, PNG, WEBP y AVIF con procesamiento mediante Sharp.",
    description:
      "Herramienta web para convertir imágenes entre JPG, PNG, WEBP y AVIF, con páginas dinámicas orientadas a SEO y procesamiento optimizado mediante Sharp.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Sharp", "Vercel"],
    href: "https://fastimgconvert.vercel.app/",
    status: "Live",
    image: "/projects/fastimgconvert.png",
    gallery: [
      {
        src: "/projects/fast-image-convert-jpg-webp.webp",
        alt: "Herramienta de conversión JPG a WEBP de Fast Image Convert antes de seleccionar un archivo",
        caption: "Página pública de conversión de JPG a WEBP, con selector de formato y área de carga vacía.",
      },
    ],
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

export const publicProjects = projects
  .filter((project) => project.published !== false)
  .sort((a, b) => Number(Boolean(b.spotlight)) - Number(Boolean(a.spotlight)));

const slugs = new Set<string>();
for (const project of publicProjects) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug) || slugs.has(project.slug)) {
    throw new Error(`Slug de proyecto inválido o duplicado: ${project.slug}`);
  }
  slugs.add(project.slug);
}

export function getProject(slug: string) {
  return publicProjects.find((project) => project.slug === slug);
}
