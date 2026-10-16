# Segunda revisión SEO y conversión de Isaiah Hub

Fecha: 16 de octubre de 2026. Alcance: seis páginas públicas, versión compilada local y contraste con la publicación. No se hace commit, push ni despliegue.

## 1. Problemas detectados por gravedad

No se han encontrado bloqueos críticos o de gravedad alta en las comprobaciones SEO, de navegación y conversión realizadas. Esto no constituye una auditoría integral de seguridad ni acredita indexación en Google.

| Gravedad | Evidencia | Decisión |
| --- | --- | --- |
| Baja, corregida | Being Fit y Alter Ego utilizaban `previewImage` en la portada, pero `CreativeWork.image` seguía apuntando al recurso anterior, ausente de la ficha renderizada. Confirmado en DOM y JSON-LD del navegador, tanto en local antes del cambio como en la publicación. | Seleccionar la misma portada visible, con fallback al recurso original. No se cambian imágenes ni diseño. |
| Media, limitación de conversión | `mailto:` necesita un manejador de correo; pulsarlo no garantiza que se abra un editor ni que se envíe un mensaje. Ya existían correo visible, copia con alternativa manual y enlaces profesionales. | Explicitar el uso de la dirección en correo web. La eliminación completa de esa dependencia requiere decidir y autorizar otro canal de recepción. |
| Baja, corregida en verificación | El checker comprobaba robots genérico pero no `googlebot` ni cabecera `X-Robots-Tag`; tampoco verificaba la relación entre imagen declarada y renderizada. No se detectaron bloqueos reales de este tipo. | Ampliar las comprobaciones, respetando las previews con noindex. |
| Baja, conservada | `http://www.isaiahhub.com/` hace dos redirecciones 308 hasta HTTPS sin www. No hay bucle ni pérdida de la ruta. | Sin cambiar hosting/DNS. La URL canónica y los enlaces internos ya apuntan directamente al destino. |

## 2. Revisión de las seis páginas e intención de búsqueda

| Ruta | Intención principal | Resultado |
| --- | --- | --- |
| `/` | Contratar a Isaiah Quintana para diseño/desarrollo web y aplicaciones en Bilbao/Bizkaia; marca Isaiah Hub. | Propuesta, destinatarios, servicios, ámbito, ejemplos y contacto explícitos. Title y descripción adecuados: conservados. |
| `/proyectos` | Explorar el portfolio y comparar tipos de trabajo. | Índice de cuatro proyectos, resúmenes y acceso a cada ficha. Conservado. |
| `/proyectos/being-fit` | Caso de desarrollo de la web de Being Fit en Bilbao. | Nombre oficial, contexto fitness, necesidad, solución, participación, tecnologías, reservas mediante iframe de Provis Sport y capturas reales. Conservado salvo imagen del JSON-LD. |
| `/proyectos/alter-ego-experience` | Caso de desarrollo de una aplicación de eventos de Alter Ego Experience. | Contexto diferenciador: participantes, Excel, QR y ranking en tiempo real. Se distingue del nombre ambiguo Alter Ego. Conservado salvo imagen del JSON-LD. |
| `/proyectos/psicotestpol` | Caso de desarrollo de la plataforma de tests PsicotestPol. | Práctica para opositores, simulacros, estadísticas e integraciones; indicación de acceso privado al producto. La ficha pública sigue accesible. Conservado. |
| `/proyectos/fast-image-convert` | Caso de desarrollo del conversor Fast Image Convert. | Explica conversión, formatos, Sharp y arquitectura; enlaza al producto. No intenta sustituir al conversor en búsquedas de uso inmediato. Conservado. |

Los títulos y descripciones son únicos. Cada página tiene un H1. La home no duplica los casos: ofrece resúmenes y los enlaza; las fichas describen la participación de Isaiah, sin suplantar las webs oficiales. El índice tiene una intención de exploración distinta de la contratación local de la home.

No hay un conflicto estructural claro entre las seis páginas que justifique cambiar URLs, titles o contenido. La canibalización real sólo puede evaluarse con consultas, impresiones, páginas mostradas y evolución en Search Console; no se dispone de esos datos.

### Arquitectura e identidad

El rastreo del DOM confirma que índice, Being Fit, PsicotestPol y Alter Ego están a un clic de la home; Fast Image Convert, a dos. No hay páginas huérfanas entre las seis. Las fichas incluyen breadcrumbs, enlaces relacionados, acceso al índice y contacto. No se crean páginas por ciudad o variantes de palabras clave.

La identidad visible Isaiah Hub / Isaiah Quintana coincide con Person, WebSite, provider de Service y creator de CreativeWork. Los servicios comparten datos con el contenido visible. Bilbao/Bizkaia describen el área de servicio; no se añade sede o domicilio. Los ejemplos de campus virtuales o inventarios siguen siendo capacidades, no trabajos inventados.

### Datos estructurados e IA

Se conservan Person, WebSite, WebPage, Service, CollectionPage, ItemList, CreativeWork y BreadcrumbList. El vocabulario semántico válido no equivale a una función de resultados enriquecidos de Google: BreadcrumbList y WebSite tienen usos documentados, mientras que el portfolio no debe prometer un resultado enriquecido específico por utilizar Service o CreativeWork.

Se revisan los requisitos de breadcrumbs: al menos dos ListItem, nombres, posiciones y URLs. También se comprueban referencias @id, entidades únicas, autor, nombre del proyecto frente al H1 e imagen pública representada en la ficha. La revisión no equivale a haber ejecutado Google Rich Results Test o Schema.org Validator.

El contenido principal y JSON-LD están en HTML y se verificaron en navegador, también sin JavaScript. Robots no bloquea buscadores o agentes de búsqueda mediante reglas específicas. No se han evaluado citas de asistentes ni reglas privadas del hosting. No se añaden llms.txt, páginas para IA, FAQs artificiales o estadísticas: Google no exige archivos o schemas especiales para AI Overviews/AI Mode y no hay evidencia que justifique esas ampliaciones en este encargo.

## 3. Mejoras implementadas y archivos

- `src/lib/seo.ts`: `CreativeWork.image` selecciona `previewImage.src` antes de `image`, igual que la portada de la ficha.
- `src/components/sections/Contact.tsx`: orientación visible para copiar la dirección y usarla en correo web si no hay aplicación configurada.
- `scripts/verify-seo.mjs`: revisión de googlebot, directivas none/noindex y X-Robots-Tag en páginas públicas, requisitos de breadcrumbs, autor/nombre del proyecto e imagen renderizada y accesible.
- `docs/second-pass-seo-conversion.md`: este informe.

Los cambios locales en `src/app/globals.css` y `src/lib/useActiveSection.ts` ya existían al comenzar, procedentes de la corrección de navegación anterior. Se conservan, no se atribuyen a esta revisión.

No se alteran rutas, títulos, descripciones, estructura, imágenes, estilos, arquitectura o dependencias. No se añaden formularios, trackers, cuentas, proveedores ni almacenamiento de datos personales.

## 4. Contacto: alternativas evaluadas

La opción actual de menor mantenimiento es conservar mailto y correo visible con copia. Es usable sin una aplicación local si el visitante pega la dirección en su correo web. El mensaje de ayuda añadido explica esa alternativa. Las pruebas comprueban copia correcta y selección manual cuando el portapapeles falla; no envían correos ni verifican recepción en el buzón.

Si se desea enviar desde la propia página sin mantener backend propio, una opción futura es un formulario HTML con POST a un proveedor gestionado, por ejemplo Formspree. Su documentación contempla Next.js y formularios HTML; no sería imprescindible instalar su SDK para una integración nativa. Requiere autorización para elegir proveedor y procesar los mensajes/datos de los visitantes, configurar destinatario y antiabuso, revisar privacidad y probar entrega, error y confirmación reales. No está implementado ni se ha creado una cuenta o endpoint.

Un formulario con action mailto conservaría el problema. Los enlaces para redactar en un webmail concreto no son universales. No se añade WhatsApp sin un teléfono facilitado por el titular. Los enlaces de LinkedIn y GitHub existentes se conservan como vías complementarias.

## 5. Skills utilizadas

- `seo-audit`: rastreo, metadata, indexabilidad, contenido e intención.
- `site-architecture`: profundidad, páginas huérfanas, breadcrumbs y enlaces entre home, índice, servicios y casos.
- `schema`: significado de tipos, requisitos de Google y correspondencia con el contenido visible.
- `ai-seo`: accesibilidad del contenido y coherencia de entidades; se priorizaron fuentes oficiales sobre afirmaciones genéricas de visibilidad.

Se reutilizan las verificaciones de Playwright y axe de la iteración anterior. No se utilizan nuevas herramientas externas de medición o tracking.

## 6. Pruebas ejecutadas

Producción local compilada servida con `npm.cmd run start -- --port 3200`. Para los scripts, `SEO_CHECK_URL` y `BROWSER_CHECK_URL` apuntan a ese puerto; `PLAYWRIGHT_MODULE` apunta al playwright-core de la instalación global de playwright-cli. Edge headless, sin instalar paquetes.

| Comando | Resultado |
| --- | --- |
| `npm.cmd run lint` | Satisfactorio. |
| `npm.cmd run typecheck` | Satisfactorio. |
| `npm.cmd run build` | Satisfactorio, generación estática de las rutas de contenido y metadata. |
| `npm.cmd run verify:seo` | Satisfactorio en las seis páginas, incluyendo las nuevas comprobaciones de imagen/autor/breadcrumbs/robots. |
| `npm.cmd run verify:browser` | 30 combinaciones de seis rutas y cinco anchuras, nueve grupos funcionales, sin errores pageerror registrados. |
| `npm.cmd run verify:accessibility` | 14 estados/vistas; axe-core sin violaciones ni comprobaciones incompletas. |
| `node artifacts/verify-navigation.mjs` | 32 comprobaciones de enlaces activos, scroll manual, hash directo y navegación desde casos, en móvil/escritorio y movimiento normal/reducido. |

Anchuras responsive: 320, 390, 768, 1024 y 1440 px. Se comprueban imágenes, desbordamiento horizontal, jerarquía de encabezados, menú/foco/Escape, teclado, desplegables, portapapeles, mailto, contacto entre rutas, movimiento reducido y contenido sin JavaScript. Se guardaron capturas y resultados.

El auditado del DOM anterior y posterior confirma que las imágenes de CreativeWork coinciden ahora con las cuatro fichas, frente a dos inconsistencias anteriores. No se generaron métricas de Search Console ni de Lighthouse. El script existente guarda mediciones locales de carga; no se utilizan para afirmar mejoras de rendimiento o conversión.

Evidencias locales en `artifacts/`: `second-pass-before.json`, `second-pass-after.json`, `second-pass-public.json`, `second-pass-public-http.json`, `browser-results.json`, `accessibility-results.json`, `navigation-results.json` y capturas. Este directorio está excluido de Git.

### Contraste con publicación

Se consultaron de nuevo las seis páginas públicas en navegador y por HTTP. Todas responden 200, con canonical propio y meta robots index/follow. Ninguna devuelve X-Robots-Tag restrictivo. Robots y sitemap públicos responden 200; el sitemap tiene las seis URLs canónicas. HTTP y www redirigen con 308; se verificó conservación de ruta y query desde https://www.

La versión publicada ya contiene la primera refactorización. Sigue mostrando las dos referencias antiguas de imagen y el texto de contacto anterior, porque estas correcciones no se han desplegado. No se consultó el estado real del índice de Google.

## 7. Limitaciones, Google y preparación para producción

No quedan defectos bloqueantes detectados dentro del alcance revisado. La revisión local está preparada para un despliegue autorizado; no se ha desplegado. Después de publicar hay que contrastar el HTML servido, las dos imágenes JSON-LD corregidas, las cabeceras y los enlaces en el dominio real.

Persisten la dependencia de una acción de correo del visitante, la falta de capturas autorizadas de PsicotestPol/pantallas internas de Alter Ego y la ausencia de datos de consultas/conversiones. No son motivos para inventar contenido o habilitar un proveedor sin autorización.

No se ejecutaron lector de pantalla real, Safari/Firefox, auditoría integral de seguridad ni una validación externa en Rich Results Test/Schema.org Validator. Los resultados de axe y las verificaciones locales no certifican conformidad WCAG completa ni aparición de rich results.

Acciones externas en Google Search Console:

1. Confirmar o verificar la propiedad de dominio isaiahhub.com (DNS) o prefijo de URL. El proyecto ya admite GOOGLE_SITE_VERIFICATION para el método HTML; no se añadió un token inventado.
2. Enviar o comprobar `https://isaiahhub.com/sitemap.xml`.
3. Inspeccionar las seis URLs y su prueba en vivo: acceso, canonical elegida por Google e indexación. Solicitar indexación cuando proceda tras la publicación.
4. Revisar indexación, posibles acciones manuales y requisitos de los datos estructurados compatibles; utilizar Rich Results Test para las funciones admitidas.
5. Con datos suficientes, analizar consultas y páginas para detectar solapamientos reales, CTR y oportunidades locales; revisar Core Web Vitals de campo.

La indexación y la selección de resultados enriquecidos no están garantizadas aunque las comprobaciones técnicas pasen.

## Fuentes oficiales consultadas

- [Requisitos técnicos de Google Search](https://developers.google.com/search/docs/essentials/technical).
- [Políticas de datos estructurados](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
- [BreadcrumbList y campos requeridos](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb).
- [Tipos con funciones compatibles en Google](https://developers.google.com/search/docs/appearance/structured-data/search-gallery).
- [Nombre del sitio y WebSite](https://developers.google.com/search/docs/appearance/site-names).
- [Directivas robots y X-Robots-Tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
- [Funciones de IA y sitios web](https://developers.google.com/search/docs/appearance/ai-features).
- [Formspree y Next.js, recomendación no implementada](https://formspree.io/guides/nextjs/).
