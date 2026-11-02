# Portafolio de Lucas Jacinto

Portafolio personal de **Lucas Enmanuel Jacinto Alvarez**, Bachiller en Ingeniería Informática y desarrollador Full Stack (Node.js · React · PostgreSQL). El sitio presenta su experiencia, proyectos en producción, habilidades técnicas, certificaciones, CV descargable y un formulario de contacto.

Sitio publicado: <https://lucaseja.netlify.app/>

## Características

- Diseño responsive con efecto glassmorphism y modo claro/oscuro (el tema se aplica antes del primer pintado, sin parpadeo).
- Fondo animado y transiciones con CSS (respeta `prefers-reduced-motion`).
- Secciones: inicio, proyectos, experiencia, habilidades, sobre mí, certificaciones y contacto.
- Tarjetas y modales para consultar el detalle de los proyectos.
- CV en PDF servido desde el propio sitio (`/CV-LucasEJA.pdf`).
- Formulario de contacto integrado con EmailJS y notificaciones con React Toastify.
- Metadatos SEO, Open Graph y Twitter card para vistas previas al compartir el enlace.

## Tecnologías

- React 18 + Vite 5
- JavaScript (ES Modules)
- React Icons, React Toastify
- EmailJS
- ESLint
- Netlify (hosting, cabeceras de seguridad y caché)

## Instalación y uso

Requisitos: Node.js 18 o superior (Netlify usa Node 20) y npm.

```bash
npm install
cp .env.example .env   # y rellena las variables de EmailJS
npm run dev
```

El proyecto estará disponible en la URL local que indique Vite, normalmente `http://localhost:5173`.

### Otros comandos

```bash
npm run build    # Genera la versión de producción en dist/
npm run preview  # Previsualiza la compilación de producción
npm run lint     # Ejecuta ESLint
```

## Variables de entorno

El formulario de contacto usa EmailJS. Las variables se leen en `src/components/forms/Contact.jsx` mediante `import.meta.env`:

| Variable | Descripción |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | ID del servicio de EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID de la plantilla de EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Clave pública de EmailJS |

Vite las incrusta en el bundle durante el build, así que son visibles en el cliente (EmailJS está pensado así). Para limitar el abuso, configura en el panel de EmailJS los orígenes permitidos (`lucaseja.netlify.app`) y, si es posible, reCAPTCHA.

## Despliegue (Netlify)

La configuración está en `netlify.toml`:

- Build: `npm run build`, carpeta publicada: `dist`.
- Cabeceras de seguridad para todo el sitio: Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy y Strict-Transport-Security.
- Caché inmutable de un año para `/assets/*` (archivos con hash generados por Vite).

Pasos:

1. Conecta el repositorio en Netlify (la configuración de build se toma de `netlify.toml`).
2. En *Site configuration → Environment variables* define `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_PUBLIC_KEY`.
3. Lanza un deploy. Si cambias el script inline de `index.html`, recalcula su hash `sha256` en la CSP de `netlify.toml` (el comando está comentado en el propio archivo). Si añades imágenes o APIs de otro dominio, añádelo también a la CSP.

## Estructura principal

```text
.
├── index.html        # Metadatos SEO/Open Graph y script de tema inicial
├── netlify.toml      # Build, cabeceras de seguridad y caché
├── .env.example      # Variables de entorno necesarias (EmailJS)
├── public/           # Archivos servidos tal cual (CV en PDF, imagen Open Graph)
└── src/
    ├── assets/       # Imágenes optimizadas (foto, capturas de proyectos, logo)
    ├── components/   # Componentes reutilizables y secciones visuales
    ├── constants/    # Información del portafolio y datos de contenido
    ├── context/      # Contextos globales, incluido el tema
    ├── hooks/        # Hooks personalizados
    ├── paginas/      # Composición de las páginas principales
    └── styles/       # Estilos globales, temas y componentes
```

## Autor

**Lucas Enmanuel Jacinto Alvarez** — Bachiller en Ingeniería Informática (Universidad Nacional de Piura), desarrollador Full Stack.

- Portafolio: [lucaseja.netlify.app](https://lucaseja.netlify.app/)
- GitHub: [LucasEJA](https://github.com/LucasEJA)
- LinkedIn: [Lucas Jacinto Alvarez](https://www.linkedin.com/in/lucas-enmanuel-jacinto-alvarez-249324270/)
