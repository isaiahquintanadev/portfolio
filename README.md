# Portfolio de Isaiah Quintana

Portfolio personal con Next.js 16 (App Router), React 19, TypeScript estricto y Tailwind CSS 4. Dominio canónico: **https://isaiahhub.com**.

## Desarrollo y validación

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

En PowerShell, utiliza `npm.cmd` si la política de ejecución bloquea `npm.ps1`.

Después del build, arranca producción en una terminal:

```bash
npm run start -- --port 3100
```

En otra terminal, ejecuta:

```bash
npm run verify:seo
```

La comprobación recorre el sitemap y valida respuestas HTTP, H1, títulos y descripciones únicos, canonicals, Open Graph, JSON-LD y referencias, servicios visibles, enlaces y anclas, imágenes sociales, robots, 404 y redirección permanente de www. `SEO_CHECK_URL` permite elegir otra dirección local.

También hay comprobaciones de navegador y accesibilidad:

```bash
npm run verify:browser
npm run verify:accessibility
```

Requieren Playwright disponible en el entorno y Edge instalado (o `BROWSER_CHANNEL` para elegir otro canal). No se añade Playwright como dependencia de producción. Si se utiliza la instalación de `playwright-cli`, configura `PLAYWRIGHT_MODULE` con la ruta absoluta a su paquete `playwright-core`; también se admite una instalación local de `playwright`. La prueba de accesibilidad utiliza `axe-core`, disponible actualmente como dependencia transitiva de desarrollo. Si cambia el árbol de dependencias, habrá que proporcionar esta herramienta para repetir la auditoría.

`BROWSER_CHECK_URL` permite cambiar el servidor. Se guardan capturas y resultados en `artifacts/`, excluido de Git. Las pruebas abarcan seis rutas a cinco anchuras, teclado, menú, contacto, contenido sin JavaScript y movimiento reducido. La auditoría axe y el contraste calculado no sustituyen una evaluación WCAG integral. Las mediciones locales de LCP/CLS no representan datos de usuarios reales ni una comparación de Lighthouse antes/después.

## Estructura

- `src/data/site.ts`: dominio, nombre, email y perfiles públicos compartidos por SEO y contacto.
- `src/data/services.ts`: servicios visibles y fuente de los datos estructurados Service.
- `src/data/projects.ts`: contenido del catálogo.
- `src/types/project.ts`: campos y tipos.
- `src/components/projects/ProjectGrid.tsx`: tarjetas compartidas por home e índice.
- `src/app/proyectos/page.tsx`: índice.
- `src/app/proyectos/[slug]/page.tsx`: casos de estudio estáticos.
- `src/app/proyectos/[slug]/social-image/route.tsx`: imágenes sociales generadas.
- `src/lib/seo.ts`: metadata, URLs y datos estructurados.

La home conserva las anclas `#about`, `#experience`, `#tech`, `#projects` y `#contact`, y añade `#services` y `#process`. Los proyectos y los servicios preceden al perfil técnico. La experiencia y las tecnologías se exploran con desplegables nativos. El contacto utiliza email, GitHub y LinkedIn; no guarda datos ni simula un envío. Inter se incluye en `src/app/fonts/` con su licencia OFL, usando `next/font/local`, para compilar sin descargar fuentes.

## Añadir un proyecto

1. Añade un objeto al array **`projects` en `src/data/projects.ts`**.
2. Coloca las imágenes optimizadas en **`public/projects/`**. Usa rutas como `/projects/mi-proyecto.webp`.
3. Elige un **slug único y estable**, en minúsculas, sin tildes ni espacios y con guiones: `alter-ego-experience`. No cambies un slug publicado sin un redirect permanente en `next.config.ts`.
4. Explica con contenido propio qué es el proyecto, la necesidad, tu participación, la solución y las funcionalidades. Incluye resultados únicamente cuando sean demostrables. No publiques fichas vacías para generar URLs.
5. Ejecuta las comprobaciones y despliega una nueva versión: los datos locales se incorporan durante el build.

Plantilla para completar con información real (mantener `published: false` hasta terminar):

```ts
{
  slug: "mi-proyecto",
  title: "Nombre real del proyecto",
  description: "Resumen específico del proyecto y de mi trabajo.",
  tech: ["Next.js", "TypeScript"], // Solo tecnologías utilizadas.
  published: false,
  image: "/projects/mi-proyecto.webp",
  imageAlt: "Descripción de lo que realmente aparece en la imagen",
  seoDescription: "Resumen breve para buscadores y redes.",
  caseStudy: {
    problem: "La necesidad real.",
    solution: "La solución desarrollada.",
    role: "Mi participación concreta.",
    features: ["Una funcionalidad verificable."],
  },
}
```

**Obligatorios:** `slug`, `title`, `description` y `tech`. Si incluyes `caseStudy`, completa `problem`, `solution`, `role` y `features`.

| Campo opcional | Uso |
| --- | --- |
| `seoTitle` | Título conciso sin el sufijo de autor; por defecto usa `title`. |
| `seoDescription` | Descripción natural de la participación; idealmente 140–160 caracteres sin forzar la longitud. Por defecto usa `description`. |
| `image`, `imageAlt` | Imagen principal y alt real: distingue captura y logotipo. Sin imagen se omite el bloque. |
| `imageKind`, `previewImage` | `logo` o `screenshot` adapta el encuadre. Una `previewImage: { src, alt }` permite mostrar la interfaz conservando el logotipo original. |
| `category`, `summary` | Sector/tipo de solución y resumen breve para el listado. |
| `ogImage` | Ruta local o URL HTTPS de una imagen social propia, idealmente 1200 × 630. Por defecto se genera una imagen con título, resumen y tecnologías. |
| `href`, `repo` | Web pública y repositorio, únicamente si pueden compartirse. |
| `access` | `public` o `private`: indica si la plataforma enlazada exige acceso privado. Es independiente de la publicación de la ficha. |
| `status` | `Live`, `Client`, `Finished` o `WIP`; describe estado, no indexabilidad. |
| `published` | Por defecto público. `false` excluye de home, índice, rutas, imágenes generadas y sitemap; la URL devuelve 404. No es un sistema de privacidad: no guardes secretos en el catálogo. |
| `client`, `year` | Cliente/marca y año confirmados y publicables. |
| `updatedAt` | Fecha real de actualización del contenido (`YYYY-MM-DD`) para el sitemap. Si falta se omite, sin inventarla. |
| `fullDescription` | Párrafos adicionales sobre el proyecto. |
| `caseStudy.challenges`, `.architecture`, `.outcome` | Retos, decisiones técnicas y resultado. Los bloques ausentes se omiten. |
| `metrics` | Campo anterior conservado en el catálogo; no se muestra en el nuevo diseño para evitar repetir funcionalidades como resultados medidos. |
| `gallery` | Imágenes `{ src, alt, caption? }`. |
| `links` | Enlaces asociados `{ label, href }`. |
| `relatedSlugs` | Slugs relacionados de forma justificada. Solo enlaza fichas públicas existentes y distintas de la actual. |
| `featured`, `spotlight` | La home muestra `featured`; `spotlight` prioriza y amplía el proyecto en ella. El índice mantiene dos columnas en escritorio. |

Al añadir un proyecto público se generan automáticamente **URL, metadata, canonical, Open Graph, tarjeta de X, imagen social, JSON-LD, entrada del índice y sitemap**. Añade `featured: true` para mostrarlo en la home. Todas las fichas enlazan al índice, contacto y otros casos relacionados. La imagen social de la home presenta la marca y los servicios.

## SEO y pasos después del despliegue

El dominio oficial se define en `src/data/site.ts`; ya no depende de `NEXT_PUBLIC_SITE_URL` ni puede caer en localhost. Next.js utiliza URLs sin barra final, salvo la raíz. Las previews con `VERCEL_ENV=preview` reciben `noindex, follow`; se permite rastrearlas para que se lea esa directiva. Mantén la protección de previews de Vercel cuando corresponda.

Se conserva **Vercel Analytics**, que ya estaba integrado. No se añaden herramientas de tracking ni dependencias.

1. Comprueba que `https://isaiahhub.com` sirve la versión nueva. El código incluye redirección 308 de www a sin www conservando ruta y parámetros. La publicación inspeccionada ya redirigía entre hosts; comprueba la coherencia con Vercel después de publicar. No se han cambiado DNS ni dominios externos.
2. Añade la propiedad de dominio **`isaiahhub.com`** en Google Search Console y verifica mediante el TXT DNS que Google proporcione. Como alternativa para una propiedad de prefijo de URL, configura `GOOGLE_SITE_VERIFICATION` con el contenido del token HTML y vuelve a desplegar. No hace falta si verificas por DNS.
3. Envía **`https://isaiahhub.com/sitemap.xml`** en Sitemaps.
4. Inspecciona la home y las fichas, comprueba indexabilidad y solicita indexación si procede.
5. Revisa consultas, indexación y Core Web Vitals con datos reales. La analítica existente puede complementar los datos de visitas orgánicas de Search Console.
6. Revisa las tarjetas al compartir: las cachés de LinkedIn, WhatsApp y X pueden tardar en actualizarse.

Referencia oficial: [empezar con Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start).

## Contenido que conviene completar

Los cuatro casos reutilizan información existente, incluido **Alter Ego Experience**. Se han añadido seis capturas reales de las webs públicas de Being Fit, Alter Ego y Fast Image Convert. No representan pantallas internas de administración. PsicotestPol mantiene el logotipo porque la plataforma es privada: las futuras capturas de su interfaz deberán estar autorizadas y sin datos personales. Se pueden completar años y resultados verificables si están disponibles.

Auditoría y límites de validación: [docs/seo-audit.md](docs/seo-audit.md).

Revisión de esta iteración: [docs/optimization-2026-10-16.md](docs/optimization-2026-10-16.md).
