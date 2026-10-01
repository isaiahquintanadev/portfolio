# Auditoría SEO — 1 de octubre de 2026

## Situación inicial

- Next.js 16.1.6, App Router, React 19.2.3, TypeScript estricto y Tailwind CSS 4. Una ruta de contenido (`/`) organizada por anclas.
- Diseño oscuro con tarjetas, gradientes, navegación móvil y contenido de identidad, experiencia, tecnologías y contacto. Cuatro proyectos con casos de estudio. Being Fit y otros ajustes eran cambios locales al comenzar y se han conservado.
- Metadata, OG, tarjetas de X, robots, sitemap, icono PNG, `next/image`, Inter con `next/font` y Vercel Analytics ya existían. No había librería SEO, manifest ni suite de tests. No se necesita manifest para este objetivo.
- Dominio SEO con fallback a localhost, sitemap solo de home y fecha de actualización siempre igual al build.
- Casos en modales sin URL, metadata propia o contenido completo enlazable. Gestión de foco incompleta en el modal y enlaces enfocables en el menú móvil cerrado.
- Precarga de dos imágenes de proyectos muy por debajo de la portada. Varias secciones cliente únicamente para animaciones; la comprobación sin JavaScript mostró texto invisible.
- La cifra “5+ años” no queda respaldada por las fechas de experiencia del repositorio.

## Cambios

- Dominio e identidad centralizados y URLs específicas por página. Se retiran meta keywords sin utilidad para esta arquitectura.
- Índice y cuatro casos estáticos: PsicotestPol, Being Fit, Alter Ego Experience y Fast Image Convert. Se mantienen home y anclas existentes.
- Catálogo tipado con slugs, publicación y contenido opcional. Listados, rutas, sitemap y generación social usan el catálogo público.
- Tarjetas compartidas que conservan el aspecto y enlazan a páginas; se sustituye el modal.
- Person, WebSite, ProfilePage, CollectionPage, WebPage, BreadcrumbList y CreativeWork basados en contenido real, sin reviews, ratings, organizaciones ni resultados inventados. JSON-LD con escape de `<` para incluirlo en HTML.
- Sitemap con todas las páginas públicas y fechas reales opcionales; robots permite rastreo. Previews de Vercel con noindex.
- Imágenes sociales estáticas de 1200 × 630 para home y proyectos con `next/og`.
- Navbar entre rutas, footer fuera del main, migas de pan, contacto discreto y 404. Encabezados por nivel, anclas ajustadas al header, menú cerrado `inert` y foco al botón al cerrar con Escape.
- Hero, sobre mí, experiencia, tecnologías y tarjetas como componentes de servidor; contenido visible desde el HTML inicial. Se mantienen menú, copiar correo, volver arriba y transiciones CSS. Contacto no empieza oculto.
- Se retira la precarga de imágenes inferiores. Se conservan optimización nativa, fuente, analítica y dependencias. La cifra no respaldada se sustituye por el enfoque de producto.

## Validación y límites

- Lint, typecheck y build de producción. Script repetible `npm run verify:seo` contra el sitio servido.
- HTTP, un H1 por página, metadata/canonical, JSON-LD parseable, imágenes sociales, robots, sitemap, 404 y enlaces internos.
- Revisión en Edge headless de móvil, tablet y escritorio, capturas de home, índice y casos, menú, Escape, contacto entre rutas y contenido sin JavaScript.
- Las comprobaciones locales no certifican contraste/accesibilidad completa ni aportan valores reales de LCP, CLS o INP. Medir tras desplegar y con datos de usuarios cuando exista volumen suficiente.
- Se verificaron respuestas HTTP 200 del dominio y las cuatro webs. Alter Ego redirige a `alteregoexperience.org` y PsicotestPol a `psicotestpol.com` con acceso privado. Se actualizan esos enlaces y se indica la restricción de acceso; no se han auditado funcionalidades internas de las plataformas.
- No se ha desplegado ni configurado Search Console, DNS o redirecciones entre hosts.

## Alcance

No se añaden servicios/sobre mí/contacto duplicados, CMS, nuevas herramientas de tracking o schema SoftwareApplication con propiedades no documentadas. Se publica el contenido del repositorio sin prometer posiciones ni tráfico. Los casos se pueden enriquecer con años, capturas y resultados reales.

La firma de autor en webs de clientes queda fuera del repositorio. Debe ser visible, consentida y útil; si forma parte de una relación contractual o remunerada, corresponde revisar la calificación del enlace en origen. Referencia: [políticas de spam de Google](https://developers.google.com/search/docs/essentials/spam-policies).

API nativas según [metadata de Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) y [JSON-LD](https://nextjs.org/docs/app/guides/json-ld).
