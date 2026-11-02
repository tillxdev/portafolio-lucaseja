# Informe de revisión — portafolio-lucaseja

Fecha: 2026-11-02 · Commit revisado: `810b039` · Lista completa (100 hallazgos) → `REVISION_PORTAFOLIO.txt` · Fuentes sobre reclutadores → `FUENTES_RECLUTADORES.md`

## 1. Método

1. Seis auditores escépticos en paralelo: código, optimización, seguridad, diseño/UX/accesibilidad/SEO, contenido frente al CV, investigación sobre reclutadores (web).
   - Cada hallazgo exigía archivo y línea verificados.
   - Diseño y rendimiento se midieron con Playwright: capturas a 1440 y 390 px en tema claro y oscuro, tiempos de carga y fps.
2. Resultado: 153 hallazgos.
3. Panel de consenso con 3 verificadores independientes. Cada uno revisó los 153 en un orden distinto; uno hizo de abogado del diablo.
   - Regla → un hallazgo entra solo con ≥2 de 3 votos "OK" verificados contra el código.
   - Duplicados → se fusionan si ≥2 verificadores los marcan.
   - Línea, tipo y severidad → se corrigen por mayoría; la severidad es la mediana de los votos.
4. Saldo: 98 aprobados + 2 nuevos del panel = 100. Se fusionaron 52 duplicados y se descartaron 3.

| Severidad | Total | fix | refactor | feature |
|---|---|---|---|---|
| Alta | 13 | 8 | 0 | 5 |
| Media | 34 | 22 | 8 | 4 |
| Baja | 53 | 31 | 19 | 3 |
| **Total** | **100** | **61** | **27** | **12** |

## 2. Top 10 → arreglar primero

| # | Problema | Dónde | Antes → Ahora |
|---|---|---|---|
| 1 | **GPS en la foto publicada** (EXIF de un iPhone 14 Pro Max, zona de Piura) | `src/assets/lucaseja2.jpg`, `src/assets/lucaseja.jpg` | La foto revela dónde se tomó → re-exportar sin metadatos y borrar `lucaseja.jpg` del repo |
| 2 | **Botón CV abre Canva en modo `/edit`**. El commit `b54b79a` cambió `SOCIAL_LINKS.cv`, pero ningún componente lo usa | `Navbar.jsx:214`, `AboutMe.jsx:6-7` | Canva pide login o permisos → PDF público de 1 clic, importado desde `appData.js` |
| 3 | **Proyectos 3, 4 y 5 enlazan al Drive del proyecto 1** | `projectsData.js:38,50,62` | "Ver referencias" de Sorteos muestra el SGA → un enlace propio por proyecto |
| 4 | **Skills de infraestructura invisibles** (Docker, Nginx, Debian, Firebase, GCP) | `Skills.jsx:7-12` | Falta `infrastructure` en `CATEGORY_CONFIG` → añadirla |
| 5 | **"Ingeniero Informático"**, pero el CV dice Bachiller | `AboutMe.jsx:17`, `appData.js:16`, `README.md:3` | Sobre-declaración verificable en SUNEDU → "Bachiller en Ingeniería Informática" |
| 6 | **No hay sección Experiencia** | `Body.jsx:8-15` | Freelance 2024–act. y prácticas UNP no aparecen → añadir una línea de tiempo |
| 7 | **Loader artificial de unos 6 s** (EXIT_MS 4600 + salida) | `Loader.jsx:12-14,92,106-110` | El contenido aparece a los 5.9–7.1 s aunque la carga termina a los 0.08–0.95 s → quitarlo o dejarlo en <500 ms |
| 8 | **Foto del hero de 1.27 MB con `loading="lazy"`** (es el LCP, el elemento más grande de la primera pantalla) | `Welcome.jsx:13` | 1536×2048 px para mostrarse a 166 px → WebP de ~400 px (≈58 KB, −95 %) y `loading="eager"` |
| 9 | **Sin email, teléfono ni ubicación visibles** | `Contact.jsx:58-60` | Solo hay un formulario EmailJS → añadir `mailto:` y WhatsApp |
| 10 | **Falta el proyecto principal del CV** (SaaS multi-tenant para restaurantes) y faltan métricas (">200 pedidos/día") | `projectsData.js` | Las tarjetas solo traen captura y stack → problema, rol, impacto y demo |

## 3. Resumen por área

**Optimización (hechos medidos)**
- Las 6 imágenes suman 3.71 MB. En WebP redimensionado quedarían en ~0.36 MB (−90 %). `cliente_5.png` tiene un 87 % de píxeles transparentes.
- framer-motion = 38.5 KB gzip (34 % del JS) y solo lo usa el Loader → con el loader en CSS desaparece.
- Hay 59–60 elementos con `backdrop-filter` sobre 37 animaciones infinitas. Los 22 fps de Chromium headless sin GPU exageran el impacto, pero la causa es real.
- Código muerto: `ProjectCarousel.jsx` (~300 líneas), `lucaseja.jpg` (2.8 MB), clases de `glass-effects.css`.
- Descartado: fuentes bloqueantes (no hay), imports de react-icons (el tree-shaking funciona), CLS (= 0).

**Seguridad**
- Sin secretos en el código ni en el historial; `.env` está en `.gitignore`.
- `npm audit --omit=dev` → 0 vulnerabilidades. Las 16 restantes son de dev (vite 5.4.10, esbuild…) → actualizar vite.
- Falta:
  - anti-abuso en EmailJS (`limitRate`, `blockHeadless`, honeypot, `maxLength`);
  - `netlify.toml`/`_headers` con CSP, `X-Frame-Options` y `Referrer-Policy`;
  - `noopener` en los 2 `window.open`.
- `prop-types` se importa pero no está en `package.json`.

**Diseño / accesibilidad / SEO**
- `index.html`: `lang="en"` en un sitio en español, sin meta description ni Open Graph, title "LucasEJA".
- Modal sin gestión de foco. Menú móvil cerrado que sigue recibiendo el foco con Tab (`Navbar.css:196-206`).
- Icono de Express invisible en tema claro (1.07:1). Botones con degradado a 3.68–4.23:1 → por debajo de WCAG AA (4.5:1).
- Fondo animado sin `aria-hidden` → el lector de pantalla lee 33 textos decorativos.
- Verificado como correcto: sin overflow en móvil, un solo h1 en el contenido, anclas y scroll-spy funcionan, `prefers-reduced-motion` respetado.

**Contenido frente al CV**
- Spring Boot y Sequelize están en el sitio pero no en el CV. Las APIs de IA (Claude, OpenAI, Gemini), JWT y BullMQ están en el CV pero no en el sitio.
- Las certificaciones del sitio no están en el CV. La de inglés del CV no aparece en el sitio.
- Faltan tildes ("Contactame", "Polleria", "Corazon", "validacion"…) y el "¡" de apertura. El copyright sigue fijo en 2024.
- Problema del propio CV (no del código): el titular dice "Ubuntu VPS" y la sección de infraestructura dice "Debian Linux" → unificar.

## 4. Organización que prefieren los reclutadores

Hecho: no hay estudios sobre el orden de un portafolio web. Lo medido es sobre CV: Ladders 2018 midió 7.4 s de lectura inicial con eye-tracking. Lo que sigue es consenso de practicantes contrastado en ≥2 fuentes (detalle y URLs → `FUENTES_RECLUTADORES.md`).

| # | Actual (`Body.jsx`) | Recomendado | Por qué |
|---|---|---|---|
| 1 | Welcome | **Hero**: nombre, rol, 3–5 tecnologías núcleo, ubicación y modalidad, botones **Descargar CV (PDF)** y **Contactar** | La primera pantalla se escanea en segundos |
| 2 | Skills | **Proyectos (2–5) como caso de estudio** | Los hiring managers valoran más los proyectos que el CV (HackerRank 2018) |
| 3 | Projects | **Experiencia** (freelance, prácticas UNP, con fechas) | El reclutador busca cargos y fechas primero (Ladders) |
| 4 | AboutMe | **Skills agrupadas, sin niveles**, solo las del rol | Las listas largas diluyen el stack núcleo |
| 5 | Certifications | **Sobre mí** (3–4 líneas concretas) | El texto genérico no aporta señal |
| 6 | Contact | **Educación + idiomas + certificaciones relevantes** | Gestión Pública, Ofimática y SIGA restan foco |
| 7 | — | **Contacto** con email visible + formulario | No obligar al reclutador a usar el formulario |

Cada tarjeta de proyecto debería tener, en este orden:
1. Problema del cliente.
2. Tu rol.
3. Stack (5–7 tecnologías).
4. 1–2 decisiones técnicas (por qué Socket.io, por qué multi-tenant).
5. Métrica de impacto.
6. Demo o video, o la nota "código privado de cliente, disponible en entrevista".
7. Capturas en WebP.

Ejemplo (antes → ahora):
- Antes: "Sistema de pedidos — React, Node, MySQL, Socket.io" + captura.
- Ahora: "Pollería Burger Maicol — conecta caja, cocina, salón y reparto en tiempo real. **+200 pedidos/día**. Rol: full stack + despliegue en VPS. Decisión: Socket.io por rooms por estación. [Demo] [Capturas]".

Ya cumple: proyectos reales de clientes (no clones de tutoriales), sin barras de %, GitHub y LinkedIn en el hero.

Suposición (opinión, fuente comercial): para postular a trabajo remoto internacional conviene una versión en inglés.

## 5. Descartados por el panel

| ID | Motivo |
|---|---|
| H126 | "Ver PDF" no engaña: Drive `/view` muestra el PDF; además la línea citada no existe |
| H111 | El CV no asigna stack a la app de la UNP → no hay contradicción |
| H067 | Variables de EmailJS en Netlify → no verificable (pasa a Pendientes) |

## 6. Pendiente (no verificable desde el sandbox: el proxy bloqueó estas conexiones)

- Estado HTTP de los enlaces externos (GitHub, LinkedIn, Drive, Canva, demos, certificados).
- Cabeceras reales de `lucaseja.netlify.app` y si las variables `VITE_EMAILJS_*` existen en el panel de Netlify (si no existen, el formulario falla siempre).
- Si el diseño de Canva en `/edit` permite que cualquiera lo edite.
- Limpiar el historial de git de `lucaseja.jpg` (con `git filter-repo`) es una decisión del dueño, porque reescribe el historial del remoto.
