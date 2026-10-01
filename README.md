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

La comprobación recorre el sitemap y valida respuestas HTTP, H1, canonicals, metadata, JSON-LD, enlaces internos, imágenes sociales, robots y 404. `SEO_CHECK_URL` permite elegir otra dirección local. No sustituye una revisión visual o mediciones reales de Core Web Vitals. No había una suite de tests previa.

## Estructura

- `src/data/site.ts`: dominio, nombre, email y perfiles públicos compartidos por SEO y contacto.
- `src/data/projects.ts`: contenido del catálogo.
- `src/types/project.ts`: campos y tipos.
- `src/components/projects/ProjectGrid.tsx`: tarjetas compartidas por home e índice.
- `src/app/proyectos/page.tsx`: índice.
- `src/app/proyectos/[slug]/page.tsx`: casos de estudio estáticos.
- `src/app/proyectos/[slug]/social-image/route.tsx`: imágenes sociales generadas.
- `src/lib/seo.ts`: metadata, URLs y datos estructurados.

La home conserva las anclas `#about`, `#experience`, `#tech`, `#projects` y `#contact`. El contacto sigue utilizando email, GitHub y LinkedIn. No se crean páginas para duplicar estas secciones.

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
| `ogImage` | Ruta local o URL HTTPS de una imagen social propia, idealmente 1200 × 630. Por defecto se genera una imagen con título, resumen y tecnologías. |
| `href`, `repo` | Web pública y repositorio, únicamente si pueden compartirse. |
| `access` | `public` o `private`: indica si la plataforma enlazada exige acceso privado. Es independiente de la publicación de la ficha. |
| `status` | `Live`, `Client`, `Finished` o `WIP`; describe estado, no indexabilidad. |
| `published` | Por defecto público. `false` excluye de home, índice, rutas, imágenes generadas y sitemap; la URL devuelve 404. No es un sistema de privacidad: no guardes secretos en el catálogo. |
| `client`, `year` | Cliente/marca y año confirmados y publicables. |
| `updatedAt` | Fecha real de actualización del contenido (`YYYY-MM-DD`) para el sitemap. Si falta se omite, sin inventarla. |
| `fullDescription` | Párrafos adicionales sobre el proyecto. |
| `caseStudy.challenges`, `.architecture`, `.outcome` | Retos, decisiones técnicas y resultado. Los bloques ausentes se omiten. |
| `metrics` | Aspectos destacados con `value` y `label`. No presentes funcionalidades como resultados medidos. |
| `gallery` | Imágenes `{ src, alt, caption? }`. |
| `links` | Enlaces asociados `{ label, href }`. |
| `relatedSlugs` | Slugs relacionados de forma justificada. Solo enlaza fichas públicas existentes y distintas de la actual. |
| `featured`, `spotlight` | Indicadores existentes; `spotlight` amplía la tarjeta. El array determina el orden. |

Al añadir un proyecto público se generan automáticamente **URL, metadata, canonical, Open Graph, tarjeta de X, imagen social, JSON-LD, tarjeta en home e índice y entrada del sitemap**. Todas las fichas enlazan al índice y contacto. La imagen social de la home muestra hasta tres nombres para mantener su composición.

## SEO y pasos después del despliegue

El dominio oficial se define en `src/data/site.ts`; ya no depende de `NEXT_PUBLIC_SITE_URL` ni puede caer en localhost. Next.js utiliza URLs sin barra final, salvo la raíz. Las previews con `VERCEL_ENV=preview` reciben `noindex, follow`; se permite rastrearlas para que se lea esa directiva. Mantén la protección de previews de Vercel cuando corresponda.

Se conserva **Vercel Analytics**, que ya estaba integrado. No se añaden herramientas de tracking ni dependencias.

1. Comprueba que `https://isaiahhub.com` sirve la versión nueva. Configura en Vercel el dominio principal y la redirección permanente de `www` si utilizas ese alias. No se han cambiado DNS ni dominios externos.
2. Añade la propiedad de dominio **`isaiahhub.com`** en Google Search Console y verifica mediante el TXT DNS que Google proporcione. Como alternativa para una propiedad de prefijo de URL, configura `GOOGLE_SITE_VERIFICATION` con el contenido del token HTML y vuelve a desplegar. No hace falta si verificas por DNS.
3. Envía **`https://isaiahhub.com/sitemap.xml`** en Sitemaps.
4. Inspecciona la home y las fichas, comprueba indexabilidad y solicita indexación si procede.
5. Revisa consultas, indexación y Core Web Vitals con datos reales. La analítica existente puede complementar los datos de visitas orgánicas de Search Console.
6. Revisa las tarjetas al compartir: las cachés de LinkedIn, WhatsApp y X pueden tardar en actualizarse.

Referencia oficial: [empezar con Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start).

## Contenido que conviene completar

Los cuatro casos reutilizan información existente, incluido **Alter Ego Experience**. Para enriquecerlos aporta el año, cliente/marca que se puede citar, capturas relevantes, detalle de tu participación y resultados verificables. Los enlaces se han comprobado: PsicotestPol lleva actualmente a una plataforma con acceso privado; confirma cuándo vuelve a estar públicamente disponible. No hacen falta cifras inventadas para publicar un buen caso.

Auditoría y límites de validación: [docs/seo-audit.md](docs/seo-audit.md).
