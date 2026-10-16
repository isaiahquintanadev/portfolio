# Optimización de Isaiah Hub — 16 de octubre de 2026

## Alcance y punto de partida

Proyecto existente: Next.js 16.1.6, React 19.2.3, TypeScript, Tailwind CSS 4 y Vercel. Se inspeccionaron todas las rutas, secciones, datos, recursos, configuración, scripts y AGENTS.md antes de implementar.

La publicación ya tenía seis páginas indexables: home, índice y cuatro casos de estudio. Ya existían metadata por página, canonicals, sitemap, robots, JSON-LD, imágenes sociales y protección noindex de previews. Esta iteración no creó esas rutas ni debe atribuirse su implementación original.

El 16/10/2026 se consultaron las seis páginas publicadas y variantes de host. Respuestas 200, canonical propio, index/follow y un H1 por página. Robots permite rastreo y declara el sitemap de seis páginas. HTTP y www redirigen con 308. http://www hace dos saltos hasta HTTPS sin www. No se observaron bloqueos de rastreo; no se consultó el índice de Google. Evidencia local: artifacts/public-audit.json y artifacts/public-home-before.png.

El cambio local previo del usuario en Being Fit (iframe proporcionado por Provis Sport) se preservó en descripción, funcionalidades y arquitectura.

## Diseño y conversión implementados

Se mantuvo la identidad oscura y violeta, el avatar, los nombres de proyecto y los datos profesionales. Sistema visual: fondo #0f172a, superficie #151e32, texto #f5f5fa, secundario #b5bed0 y acento #c4b5fd. Inter variable, jerarquía mediante tamaño, espacio y composición. Se retiraron fondos con puntos y gradientes globales, tarjetas anidadas y decoraciones repetidas.

Hero comercial: «Páginas web y aplicaciones a la altura de tu negocio». CTA principal a contacto y secundario a proyectos. Identidad full-stack y ámbito Bilbao/Bizkaia visibles, sin presentar una agencia ni inventar disponibilidad o resultados.

Orden: hero, proyectos, servicios, proceso, presentación, experiencia, capacidades técnicas y contacto. Being Fit pasa a ser el destacado principal: ofrece un ejemplo directo de web de negocio local. PsicotestPol y Alter Ego conservan presencia destacada; Fast Image Convert sigue accesible en el índice.

Tres familias de servicios con descripciones reales de lo que se ofrece y ejemplos de lo que se puede desarrollar. Los campus virtuales e inventarios se presentan como capacidades, no como proyectos entregados. Datos compartidos entre contenido y schema en src/data/services.ts.

Proceso de cuatro etapas: entender, diseñar la solución, desarrollar/revisar y preparar entrega. Experiencia y stack completos mediante details/summary nativos para reducir longitud inicial; siguen funcionando sin JavaScript. Se mantienen los dos puestos y las 19 tecnologías.

Contacto renderizado en servidor con correo visible, mailto con asunto/contexto, LinkedIn y GitHub. Copia como isla cliente con aria-live y selección manual si falla. No se añadió formulario, proveedor, almacenamiento de datos ni confirmación ficticia de envío. Mailto requiere una aplicación de correo.

Navegación con Proyectos/Servicios/Proceso/Sobre mí, CTA y menú móvil con Escape, devolución de foco y cierre al salir. Se corrigió un conflicto entre display de los botones y la utilidad hidden, y se aseguró un botón móvil de 44 × 44 px.

## Casos de estudio y capturas

Se preservan las cuatro URLs y sus nombres oficiales, necesidad, solución, participación, funcionalidades, retos, decisiones y resultados no cuantificados. Se añadió categoría/resumen y títulos SEO específicos. Nueva composición con portada amplia, cuerpo de lectura y columna de participación/stack; enlaces relacionados y CTA de contacto.

Se incorporaron seis capturas reales de webs públicas, 1440 × 900, convertidas a WEBP y revisadas visualmente, 320.142 bytes combinados:

- being-fit-portada.webp, being-fit-clases.webp y being-fit-horarios.webp.
- alter-ego-portada.webp y alter-ego-eventos.webp.
- fast-image-convert-jpg-webp.webp.

No se repite la portada para simular una galería. Los pies distinguen sitio público y pantallas internas. PsicotestPol redirige a una web privada; conserva el logotipo y la indicación de acceso restringido. No se intentó acceder. Las capturas no acreditan funcionamiento de las plataformas ni resultados comerciales.

Se observó un H1 de poco contraste en la página pública JPG → WEBP del conversor. Es una incidencia de otro producto/repositorio; su captura se conservó fielmente.

## SEO de esta iteración

No hay rutas nuevas. Se mantienen /, /proyectos y:

| Ruta | Título final |
| --- | --- |
| / | Diseño y desarrollo web en Bilbao \| Isaiah Quintana |
| /proyectos | Proyectos de desarrollo web \| Isaiah Quintana |
| /proyectos/being-fit | Being Fit Bilbao: diseño y desarrollo web \| Isaiah Quintana |
| /proyectos/psicotestpol | PsicotestPol: plataforma de tests para opositores \| Isaiah Quintana |
| /proyectos/alter-ego-experience | Alter Ego Experience: aplicación para eventos \| Isaiah Quintana |
| /proyectos/fast-image-convert | Fast Image Convert: conversor de imágenes web \| Isaiah Quintana |

Descripción principal: «Páginas web a medida, aplicaciones y software para negocios en Bilbao y Bizkaia. Soy Isaiah Quintana: diseño y desarrollo tu proyecto de principio a fin.»

Se conservan descripciones individuales ya existentes y se verifica su unicidad. Canonicals absolutos propios, Open Graph y Twitter Cards coherentes. Imagen social principal renovada, 1200 × 630. Las imágenes sociales individuales existentes se conservan.

Person y WebSite refuerzan relación Isaiah Quintana / Isaiah Hub; WebSite añade alternateName. La home usa WebPage y tres Service con provider Person y área Bilbao/Bizkaia, a partir de contenido visible compartido. No se afirma sede, dirección o residencia. Se mantienen CollectionPage/ItemList, CreativeWork/WebPage y BreadcrumbList, con identificadores coherentes y sin duplicación de entidades.

Sitemap y robots no requirieron cambios: ya incluyen seis URLs públicas, fechas reales opcionales y rastreo permitido. Se conservan noindex de previews y 404. Se añade redirección 308 por host www en Next, con ruta y parámetros intactos. La publicación ya redirigía por configuración externa; se verificó además el nuevo comportamiento local.

El checker revisa HTTP, un H1, título/descripción únicos, canonical, OG, Twitter, JSON-LD parseable, referencias @id, servicios respaldados por texto visible, anclas, enlaces, imágenes sociales PNG 1200 × 630, robots, 404 y www308. Es validación local; no equivale a aprobación del Rich Results Test ni garantiza resultados enriquecidos.

## Rendimiento y calidad técnica

La home y las fichas siguen estáticas. Las secciones informativas se sirven como componentes de servidor. Sólo se hidratan navegación, copiar correo y volver arriba; se eliminaron imports de Framer Motion en los elementos que lo usaban en la ruta. No se desinstalaron dependencias que pudieran servir al proyecto.

CSS global simplificado, sin fondo fijo ni animación perpetua. Imágenes con next/image, tamaños adaptados, dimensiones reservadas, carga diferida salvo portada crítica de fichas. No se precarga el retrato oculto en móvil.

Inter latino variable local: 48.432 bytes, next/font/local y licencia OFL incluida. Se reutilizó la fuente descargada previamente por Next. Un build intermedio falló por conexión a Google Fonts; la fuente local eliminó esa dependencia y los builds posteriores pasaron. La licencia se obtuvo de su origen oficial.

Mediciones finales con Edge 155.0.4283.60, producción local, servidor caliente, contextos nuevos, tres cargas por anchura, sin limitación de CPU/red:

| Dato | Móvil 390 × 844 | Escritorio 1440 × 1000 |
| --- | ---: | ---: |
| LCP, mediana | 92 ms | 104 ms |
| CLS durante carga | 0 | 0 |
| JavaScript cargado, encodedBodySize | 137.904 bytes | 137.904 bytes |
| HTML, encodedBodySize | 18.860 bytes | 18.860 bytes |

Son resultados de laboratorio en localhost. No hay Lighthouse comparable antes/después, INP de campo ni CrUX. No se atribuye una mejora porcentual ni una puntuación objetiva de rendimiento.

## Validación final

Comandos, ejecutados mediante .cmd en Windows por la política de PowerShell:

- npm.cmd run lint: satisfactorio.
- npm.cmd run typecheck: satisfactorio.
- npm.cmd run build: satisfactorio; 16 salidas generadas, incluidas rutas de contenido y metadata.
- npm.cmd run start -- --port 3100: servidor de producción para pruebas.
- npm.cmd run verify:seo: satisfactorio en seis páginas.
- npm.cmd run verify:browser: satisfactorio en 30 combinaciones de ruta/anchura y nueve grupos funcionales.
- npm.cmd run verify:accessibility: satisfactorio en 14 estados/vistas.
- git diff --check: sin errores de whitespace; avisos normales LF/CRLF.

Para navegador se configuró PLAYWRIGHT_MODULE apuntando al playwright-core de la instalación global de playwright-cli. El CLI no pudo usar su caché daemon fuera del workspace; Playwright core con Edge funcionó. No se simularon pruebas.

Anchuras: 320, 390, 768, 1024 y 1440. Se revisaron imágenes, H1/jerarquía y ausencia de desbordamiento en las seis rutas, más capturas de home, índice y fichas. Interacciones: skip link, menú/foco/Escape/anclas, experiencia y tecnologías por teclado, éxito y error del portapapeles, mailto, movimiento reducido/volver arriba, CTA desde ficha y contenido de seis páginas sin JavaScript. Cero errores de ejecución JavaScript registrados por pageerror.

Axe-core 4.11.1: cero violaciones y cero comprobaciones incompletas en 14 estados, incluidos desplegables y menú abiertos/cerrados. Cero controles sin nombre, imágenes sin alt y controles medidos por debajo de 44 px. Contraste calculado mínimo 8,90:1 en los nodos analizados. No se certifica WCAG completa: falta lector de pantalla real, Safari/Firefox y evaluación humana de todas las situaciones. No se analiza texto dentro de capturas.

Evidencias excluidas de Git:
- artifacts/browser-results.json y accessibility-results.json.
- artifacts/home-390-viewport.png y home-1440-viewport.png.
- Capturas completas de home e índice y de los cuatro casos.
- artifacts/public-audit.json y public-home-before.png.

Los scripts requieren Playwright y axe-core disponibles en el entorno. No se añadieron dependencias. axe-core está disponible actualmente como dependencia transitiva de desarrollo; su disponibilidad no es una garantía si cambia el árbol de dependencias.

## Skills y fuentes

Consultadas frontend-design (sistema visual y composición), ui-ux-pro-max (búsqueda de dirección y recomendaciones Next.js), vercel-react-best-practices (servidor/islas e imágenes), web-design-guidelines (guía actual, foco y accesibilidad), playwright-cli (automatización y diagnóstico) y seo-audit (rastreabilidad, intención, arquitectura y límites).

La primera búsqueda de ui-ux-pro-max devolvió un patrón de documentación ajeno al encargo; se descartó y se repitió con «freelance portfolio», que devolvió un enfoque minimalista adecuado. Las recomendaciones se adaptaron a la identidad existente.

No se encontraron site-architecture ni schema en las raíces disponibles; se continuó con fuentes oficiales. ai-seo no se utilizó: no se implementó una estrategia específica de buscadores de IA.

- [Metadata de Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Redirecciones de Next.js](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects)
- [Fuentes locales de Next.js](https://nextjs.org/docs/app/api-reference/components/font#local-fonts)
- [Licencia oficial de Inter](https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt)
- [Directivas robots de Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Web Interface Guidelines consultadas](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md)

## Archivos relevantes

Modificados: .gitignore, eslint.config.mjs, package.json, README.md, docs/seo-audit.md, next.config.ts, scripts/verify-seo.mjs, src/app/{globals.css,layout.tsx,page.tsx,opengraph-image.tsx}, src/app/proyectos/page.tsx, src/app/proyectos/[slug]/page.tsx, src/components/layout/{Navbar,Footer}.tsx, src/components/projects/ProjectGrid.tsx, src/components/sections/{Hero,Projects,About,Experience,TechStack,Contact}.tsx, src/components/ui/BackToTopButton.tsx, src/data/{site,projects}.ts, src/lib/seo.ts y src/types/project.ts.

Creados: src/data/services.ts, src/components/sections/{Services,Process}.tsx, src/components/ui/ContactActions.tsx, scripts/verify-browser.mjs, scripts/verify-accessibility.mjs, este documento, Inter y su licencia en src/app/fonts/, y las seis capturas WEBP indicadas.

No se eliminaron archivos de producto ni se alteró el lockfile. No se hizo commit, push ni despliegue.

## Límites y siguientes acciones

Prioridad alta: verificar la nueva versión tras su publicación autorizada, incluyendo canonicals, noindex, redirecciones y OG en el dominio real. Obtener datos de rendimiento y consultas reales; no se consultaron cuentas de Google ni analítica privada.

Prioridad media: añadir capturas autorizadas de PsicotestPol y del panel/QR/ranking de Alter Ego, sin datos personales, y enriquecer los casos con decisiones concretas y resultados demostrables. Validar el recorrido comercial con potenciales clientes y probar VoiceOver/NVDA, Safari y Firefox.

El error de contraste del conversor oficial requiere su propio repositorio. El contacto por formulario sólo debe añadirse si se decide un canal de recepción y tratamiento de datos; actualmente funciona el correo sin backend nuevo.

Acciones que requieren acceso a Google: verificar o confirmar propiedad en Search Console, enviar sitemap, inspeccionar las seis URLs y solicitar indexación si procede, revisar consultas/cobertura/Core Web Vitals. El token GOOGLE_SITE_VERIFICATION ya está previsto; la verificación DNS es una alternativa. No se puede garantizar ni afirmar posicionamiento a partir de estas pruebas.
