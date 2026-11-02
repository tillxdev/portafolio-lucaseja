// Fuente única de datos de contacto y enlaces (coherente con el CV)
export const CONTACT_INFO = {
  email: "luja9575@gmail.com",
  phone: "+51 992 693 788",
  whatsappNumber: "51992693788",
  location: "Piura, Perú"
};

// URLs de redes y recursos
export const SOCIAL_LINKS = {
  github: "https://github.com/LucasEJA",
  linkedin: "https://www.linkedin.com/in/lucas-enmanuel-jacinto-alvarez-249324270/",
  instagram: "https://www.instagram.com/lucas_enmanuelp/profilecard/?igsh=Y3diNmJzcHI0MDB0",
  email: `mailto:${CONTACT_INFO.email}`,
  whatsapp: `https://wa.me/${CONTACT_INFO.whatsappNumber}`,
  cv: "/CV-LucasEJA.pdf"
};

// Nombre de archivo sugerido al descargar el CV
export const CV_FILENAME = "CV-LucasEJA.pdf";

// Información personal
export const PERSONAL_INFO = {
  name: "Lucas Jacinto A.",
  fullName: "Lucas Enmanuel Jacinto Alvarez",
  title: "Full Stack Developer",
  headline: "Full Stack Developer · Node.js · React · PostgreSQL · Linux/VPS",
  valueProposition:
    "Desarrollo, despliego y mantengo aplicaciones web en producción de principio a fin para restaurantes, comercios e instituciones educativas.",
  university: "Universidad Nacional de Piura (2019–2024)",
  profession: "Bachiller en Ingeniería Informática",
  copyrightOwner: "LucasEJA"
};

// Navegación: mismo orden que las secciones de Body.jsx.
// "Inicio" lo representa el logo del Navbar (inMenu: false) para que el menú
// de escritorio quepa en una línea; sigue participando en el scroll spy.
export const NAVIGATION_ITEMS = [
  { id: "welcome", label: "Inicio", inMenu: false },
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "skills", label: "Habilidades" },
  { id: "aboutme", label: "Sobre mí" },
  { id: "certifications", label: "Certificados" },
  { id: "contact", label: "Contacto" }
];
