# Estado de los parches — ramas apiladas

Fecha: 2026-11-02 · Fuente de hallazgos → `REVISION_PORTAFOLIO.txt`

## 1. Pila

```
claude/gracious-fermi-d4es82                              (revisión: revision/*.txt|md)
└─ claude/gracious-fermi-d4es82-01-privacidad-assets      (imágenes, GPS, CV PDF, SEO, CSP, deps)
   └─ claude/gracious-fermi-d4es82-02-contenido-fullstack (contenido alineado al CV, Experiencia, proyectos)
      └─ claude/gracious-fermi-d4es82-03-ux-a11y-rendimiento (loader, modal, formulario, CSS)
         └─ claude/gracious-fermi-d4es82-04-integracion   (unión, limpieza, verificación final)
```

Orden de merge → 01, 02, 03, 04 (cada rama contiene la anterior).

## 2. Resultado

| Estado | Hallazgos |
|---|---|
| Resuelto | 88 |
| Parcial | 5 |
| Pendiente | 7 |

| Métrica (medida) | Antes | Ahora |
|---|---|---|
| Imágenes | 3.71 MB | 0.51 MB |
| JS (gzip) | 113 KB | 86 KB |
| Contenido visible (loader) | 5.9–7.1 s | ~0.5 s |
| Elementos con backdrop-filter | 59–60 | 9 |
| `npm run lint` | 38 problemas | 0 |
| `npm audit` (total / producción) | 16 / 0 | 9 / 0 |
| GPS en fotos publicadas | sí | no |

Verificación final → Playwright con la CSP de `netlify.toml` inyectada, 6 anchos (390–1440 px), tema claro y oscuro:
- 0 errores de consola y 0 violaciones de CSP;
- 0 overflow horizontal;
- modal con foco atrapado y foco devuelto al cerrar;
- `/CV-LucasEJA.pdf` → 200.

## 3. Commits por rama

**01**
- `cefe66b` docs(readme): orientación Full Stack, despliegue en Netlify y .env.example
- `cfdd25c` feat(seguridad): netlify.toml con build, cabeceras de seguridad y CSP
- `3bc09a1` chore(eslint): ignorar .agents y usar ecmaVersion latest
- `a1e01d5` chore(deps): declarar prop-types y actualizar vite/plugin-react dentro de su major
- `167c62c` feat(seo): metadatos, Open Graph y tema antes del primer pintado
- `4b76c19` feat(public): añadir CV descargable e imagen Open Graph
- `cf2d150` perf(assets): redimensionar y optimizar imágenes manteniendo nombres
- `aa0c5a6` fix(privacidad): eliminar EXIF/GPS de imágenes y borrar foto sin uso

**02**
- `c627f65` fix: sobre mí concreto y certificados ordenados por relevancia
- `3485752` feat: habilidades alineadas al CV con Infraestructura e IA Generativa
- `46ca5e9` feat: proyectos como casos de estudio full stack
- `d005602` feat: hero full stack con CTAs Descargar CV y Contactar
- `9e3dc83` fix: navbar generada desde NAVIGATION_ITEMS y bloqueo de scroll seguro
- `617fd1e` feat: sección Experiencia y orden de secciones para reclutadores
- `aabbccd` refactor: centralizar enlaces y datos de contacto en appData

**03**
- `a394566` fix: accesibilidad del menú móvil, contraste, foco y enlaces externos
- `d93531b` refactor: separar el contexto de tema y respetar la preferencia del sistema
- `1615ffa` perf: fondo animado accesible y menos backdrop-filter anidados
- `7043ef6` feat: formulario de contacto robusto con validación y canales directos
- `0f0030d` fix: modal accesible con foco atrapado y bloqueo de scroll seguro
- `56d07a1` perf: reescribir el loader en CSS puro y ocultarlo al cargar la página

**04**
- `780a350` fix(estilos): contraste de texto atenuado, párrafo sin justificar y CSS correcto en certificados
- `35094ba` fix(contenido): quitar afirmaciones no respaldadas por el CV
- `9d6dd3b` chore(cv): metadatos del PDF con nombre y rol
- `63feb48` fix(estilos): definir --color-primary y quitar blur anidado en tech-badge
- `b3cb598` fix(navbar): menú hamburguesa hasta 1100px para evitar desborde
- `da0e98b` fix(a11y): landmark header y skip-link hacia main
- `e0bcc45` refactor(contacto): usar CONTACT_INFO y SOCIAL_LINKS de appData
- `c68529f` chore(eslint): ignorar .claude (worktrees locales)
- `b067bde` chore(deps): quitar framer-motion, ya sin uso tras el loader en CSS

## 4. Parciales

| ID | Falta |
|---|---|
| H063 | vite 6 (cambio de versión mayor) sin aplicar; quedan 9 vulnerabilidades, todas de desarrollo |
| H028 | resuelto el lint (0 errores); queda la estructura de carpetas (H027) |
| H048 | iconos siguen en jsdelivr (con preconnect); no auto-alojados |
| H121 | certificados reordenados; no se borraron (decisión del dueño) |
| H142 | skills alineadas al CV; faltan VB, C#, ASP.NET Core, Scrum/XP/RUP |

## 5. Pendientes (no aplicados)

| ID | Motivo |
|---|---|
| H065 | subir @emailjs/browser 5 y react-toastify 11 son cambios de versión mayor → probar aparte |
| H045 | react-toastify cargado de forma diferida → ahorra ~6 KB; poco beneficio |
| H151 | versión en inglés → requiere decidir el idioma objetivo y traducir |
| H114 | Ubuntu o Debian → el dueño debe corregir el CV |
| H027 | renombrar paginas/ (y carrusel/, ya borrado) → refactor de rutas, aparte |
| H076 | min-height de secciones → cambio visual; requiere validación del dueño |
| H046 | code splitting → JS ya en 85 KB gzip; beneficio bajo |

## 6. Requiere al dueño (no se inventó ningún dato)

1. Enlaces reales de Drive para Taller, Sorteos y Bazar Tavo's → hoy `driveLink: null`, sin botón.
2. Captura del SaaS multi-tenant → hoy se muestra un placeholder.
3. ¿Bazar Tavo's es el "POS multi-sede" del CV? → si sí, recuperar "multi-sede" en `projectsData.js`.
4. Confirmar las líneas "Problema" de cada proyecto (redactadas desde la descripción original y el CV).
5. Ubuntu o Debian → unificar en el CV.
6. Netlify → definir `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_PUBLIC_KEY`.
7. EmailJS → activar "Allowed origins" (lucaseja.netlify.app) y reCAPTCHA.
8. Historial git → `lucaseja.jpg` (con GPS) sigue en commits antiguos del remoto; limpiarla con `git filter-repo` reescribe el historial.
9. Si se edita el script inline de `index.html` → recalcular el hash de la CSP (el comando está en `netlify.toml`).
10. Disponibilidad remoto/presencial → no se indicó porque el CV no lo dice.
