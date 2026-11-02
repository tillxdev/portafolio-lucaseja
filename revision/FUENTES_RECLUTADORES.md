# Cómo quieren reclutadores y hiring managers el portafolio de un Full Stack junior/semi-senior

Método: búsquedas con WebSearch en inglés y español. WebFetch no pudo abrir scrimba.com ni theseus.fi (DNS bloqueado en esta sesión), así que algunas cifras salen de resúmenes secundarios y van marcadas.
Niveles de evidencia: **DATO** = estudio o encuesta con cifra; **CONSENSO** = ≥2 fuentes independientes de practicantes coinciden; **OPINIÓN** = una sola fuente o fuente con interés comercial.

## 0. Advertencias generales (actitud escéptica)
- **Hay muy pocos datos sobre portafolios web.** Casi todo lo que circula son blogs de proveedores (generadores de CV, academias). Lo más parecido a un dato sobre portafolios es la encuesta de Profy.dev a más de 60 hiring managers: el **93 % miraría el sitio si se lo dan**, pero el **51 % dice que no tenerlo NO baja las chances**. Solo la vi citada por Scrimba (fuente secundaria; no pude abrir el original). [DATO, secundario] https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired
- Una tesis finlandesa (Theseus), con entrevistas a reclutadores de TI, concluye que un portafolio pulido **no sube de forma significativa** las chances de un junior. Hay una brecha entre los consejos online y la práctica real. [DATO cualitativo, muestra pequeña] https://www.theseus.fi/handle/10024/890143
- Ladders 2018 (eye-tracking): **7.4 s** de lectura inicial de un CV (frente a unos 6 s en 2012). Los reclutadores se fijan en cargos, títulos y subtítulos, y los CV sin encabezados claros pierden atención. Ojo: mide **CV**, no portafolios, y no publica tamaño de muestra (ERE lo critica). [DATO con límites] https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/ · https://csuglobal.edu/sites/default/files/blog-files/theladders-eyetracking-studyc2.pdf · crítica: https://www.ere.net/articles/is-the-6-second-resume-scan-a-myth
- HackerRank 2018: el 81 % de los reclutadores evalúa sobre todo con el CV, pero los hiring managers dan **más valor a los proyectos personales y al portafolio que al CV** en la etapa de entrevista. [DATO, antiguo] https://sdtimes.com/devexec/job-seeking-developers-skills-outweigh-resume/ · https://www.peoplematters.in/article/ai-and-emerging-tech/understanding-the-indian-developerinsights-from-hackerranks-2018-17396
- Conclusión práctica: el portafolio **complementa** al CV, no lo reemplaza. Su trabajo es **confirmar en segundos** lo que dice el CV (rol, stack, proyectos reales) y dar pruebas: demo, capturas, decisiones técnicas.

## 1. Orden recomendado de secciones
| # | Sección | Justificación | Evidencia |
|---|---|---|---|
| 1 | **Hero**: nombre, rol objetivo, stack núcleo (3-5), ubicación/zona horaria/modalidad (remoto), CTA "Descargar CV (PDF)" + "Contacto" + GitHub/LinkedIn | La primera pantalla se escanea en segundos. Ladders: atención a títulos y encabezados. | DATO (CV, por extensión) + CONSENSO https://www.fueler.io/blog/your-portfolio-has-7-seconds-what-recruiters-look-at-first |
| 2 | **Proyectos destacados (2-5)** como casos de estudio | Los hiring managers valoran los proyectos más que el CV (HackerRank). Comeau: "highlight reel, 2-5 proyectos". | DATO + CONSENSO https://joshwcomeau.com/effective-portfolio/ |
| 3 | **Experiencia** (freelance/prácticas, con fechas y clientes) | Los reclutadores buscan cargos y fechas primero (Ladders). Un junior con experiencia en producción debe ponerla arriba. | DATO (CV) + CONSENSO |
| 4 | **Skills agrupadas, sin niveles**, solo las del rol | Coherencia con el aviso; las listas enormes diluyen. | CONSENSO https://slategit.com/blog/junior-developer-portfolio-mistakes-to-avoid |
| 5 | **Sobre mí** breve (3-4 líneas, concreto) | Lo genérico ("apasionado por la tecnología") no aporta señal. | OPINIÓN/CONSENSO débil |
| 6 | **Educación + idiomas + certificaciones relevantes** | Las certificaciones irrelevantes para el rol restan foco. | CONSENSO |
| 7 | **Contacto** con email visible (mailto) además del formulario | Que el reclutador no tenga que "trabajar" para contactar. | CONSENSO |

Nota: no hay un estudio que fije el orden de las secciones de un portafolio. El orden anterior es una síntesis de los datos del CV más el consenso de practicantes.

## 2. Contenido de cada tarjeta / caso de estudio
- **Problema / contexto** (qué negocio y qué dolor resuelve). CONSENSO: https://resumegeni.com/blog/technical-portfolio-resume · https://www.fueler.io/blog/your-portfolio-has-7-seconds-what-recruiters-look-at-first
- **Rol y alcance** (solo/en equipo, front/back/infra/despliegue). CONSENSO ("evidence of ownership"): https://underdog.io/blog/what-hiring-managers-look-for-on-github · https://soltech.net/what-do-hiring-managers-actually-look-for-in-a-github-portfolio/
- **Stack** (5-7 badges máximo, coherentes con lo real). CONSENSO.
- **Decisiones técnicas y trade-offs** (por qué Socket.io, multi-tenant, colas): "una o dos decisiones dicen más que una galería de capturas". CONSENSO: https://resumegeni.com/blog/technical-portfolio-resume · https://underdog.io/blog/what-hiring-managers-look-for-on-github
- **Impacto medible** (pedidos/día, usuarios, sedes, tiempo ahorrado, errores evitados). CONSENSO (no hay estudio que mida su efecto).
- **Demo en vivo o video corto** si el código es privado. Un link roto o un GitHub vacío **hace más daño que no poner link**. CONSENSO: https://www.fueler.io/blog/your-portfolio-has-7-seconds-what-recruiters-look-at-first · https://slategit.com/blog/what-goes-on-your-portfolio-vs-your-github-profile
- **Repo con README** (qué hace, por qué importa, cómo correrlo) o una nota "código privado de cliente, disponible en entrevista". CONSENSO: https://resumegeni.com/blog/github-portfolio-resume
- **Capturas** optimizadas (WebP, con dimensiones). Las capturas sin razonamiento técnico valen poco. CONSENSO.
- Evitar clones de tutoriales (to-do, clima): se detectan en segundos. CONSENSO: https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired

## 3. Qué sobra o resta
- **Barras/% de skills**: "utterly meaningless" para un reclutador. Josh Comeau: "Don't put skill bars on your website!". Una minoría de managers dice que no le molestan. CONSENSO: https://podcast.scrimba.com/72 · https://www.hiration.com/blog/skill-bars-resume/ (vendor) · https://alicalimli.beehiiv.com/p/dont-do-this-in-your-developer-portfolio
- **Loaders/intros y animaciones pesadas**: Google (2016) encontró que el 53 % de las visitas móviles se abandona si la carga pasa de 3 s. Es un dato de sitios comerciales, no de reclutadores, pero aplica por analogía: un loader artificial de más de 3 s es tiempo perdido de los ~7 s de atención. DATO (por analogía): https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/ · https://support.google.com/adsense/answer/7450973?hl=en
- **Listas enormes de tecnologías**: alinear con el rol, "not every skill you've used". CONSENSO: https://slategit.com/blog/junior-developer-portfolio-mistakes-to-avoid · https://joshwcomeau.com/effective-portfolio/
- **Certificados de cursos cortos o irrelevantes** (ofimática, gestión pública): restan foco. CONSENSO/OPINIÓN (no hallé dato).
- **Redes personales** (Instagram) en un portafolio profesional: OPINIÓN.

## 4. Requisitos técnicos valorados
- **Velocidad / Core Web Vitals**: el dato del 53 % > 3 s (Google 2016-17, antiguo). DATO por analogía (ver arriba) · https://thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks
- **Móvil**: muchos reclutadores abren links desde LinkedIn en el teléfono. CONSENSO, sin dato específico de reclutadores.
- **CV descargable en 1 clic (PDF público, sin login)**: los reclutadores no hacen clic en la primera pasada; el CV y el portafolio deben estar enlazados entre sí. CONSENSO: https://resumegeni.com/blog/technical-portfolio-resume
- **Contacto visible** (email en texto + LinkedIn). CONSENSO.
- **Inglés/bilingüe** para remoto: las empresas de EE. UU. que contratan fuera dan **más peso al inglés y a la zona horaria** (encuesta de Revelo, vendor). Revelo dice que más de 2/3 del talento LatAm tiene inglés intermedio o superior. DATO (vendor): https://www.businesswire.com/news/home/20220908005872/en/Revelo-Releases-First-%E2%80%9CLatin-America-Remote-Tech-Talent-Report%E2%80%9D · https://revelo.com/ebooks/latin-america-remote-tech-talent-report
- **SEO/OG** (title con nombre y rol, meta description, og:image para cuando se comparte por LinkedIn/WhatsApp): buena práctica técnica. OPINIÓN/CONSENSO; no hallé dato de reclutadores.
- **Links que funcionan** (revisarlos cada mes). CONSENSO: https://www.fueler.io/blog/your-portfolio-has-7-seconds-what-recruiters-look-at-first

## 5. Errores comunes
1. Proyectos sin contexto ni impacto: solo captura y lista de tecnologías. CONSENSO.
2. Links rotos, repos vacíos o privados sin explicación. CONSENSO.
3. Inconsistencias entre el CV y el portafolio (títulos, stack, fechas): el CV y el portafolio se leen juntos. CONSENSO.
4. Barras de skills y listas de tecnologías infladas. CONSENSO.
5. Intro, loader o animaciones que retrasan el contenido. DATO por analogía.
6. CV en formato no estándar (link de edición de Canva, que pide login o permisos). CONSENSO/OPINIÓN.
7. Copy genérico ("apasionado", "resiliente") sin evidencia. OPINIÓN.
8. Portafolio solo en español cuando se postula a remoto internacional. DATO (vendor Revelo) + OPINIÓN.

## 6. Contraste con el portafolio de Lucas (resumen)
**Cumple:** hero con nombre y rol + stack; GitHub/LinkedIn en el hero; proyectos reales de clientes (no clones); capturas; 2 proyectos visibles con opción de ver más; sin barras de %; `prefers-reduced-motion` respetado en el loader; menú accesible.

**No cumple:** loader bloqueante de unos 4.6 s; orden Skills → Proyectos (los proyectos deberían ir primero); **no hay sección de Experiencia** aunque el CV tiene freelance 2024-act. y prácticas en la UNP; las tarjetas no tienen rol, métricas, demo ni repo; 4 de 5 proyectos apuntan **al mismo link de Drive**; falta el proyecto SaaS multi-tenant del CV (el más fuerte); el CV enlaza a la **URL de edición de Canva** (no es PDF) y hay 3 URLs de CV distintas; 34 skills, algunas fuera del CV (Spring Boot, Sequelize, XML) y sin las APIs de IA que el CV destaca; certificaciones irrelevantes (Gestión Pública, Ofimática, SIGA); el sobre mí es genérico y dice "Ingeniero Informático" cuando el CV dice "Bachiller"; el email no está visible; `lang="en"` con contenido en español; title "LucasEJA" sin meta description ni OG; foto de 1.27 MB con `loading="lazy"` en el hero; no hay versión en inglés; copyright 2024.

Detalle línea por línea en `out_reclutador.txt`.
