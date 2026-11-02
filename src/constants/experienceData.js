// Experiencia, educación e idiomas (fuente: CV)
export const EXPERIENCE_DATA = [
  {
    id: "freelance",
    role: "Desarrollador Full Stack Freelance",
    organization: "Proyectos para clientes",
    location: "Piura, Perú",
    start: { label: "2024", dateTime: "2024" },
    end: { label: "Actualidad", dateTime: null },
    highlights: [
      "SaaS multi-tenant para gestión de restaurantes: ventas, pedidos, inventario y usuarios (React, Node.js, PostgreSQL, Redis).",
      "POS multi-sede con inventario, clientes, ventas a crédito y reportes (React, Node.js, PostgreSQL).",
      "Sistema de pedidos en tiempo real para Pollería Burger Maicol: más de 200 pedidos diarios entre caja, cocina, salón y reparto (React, Node.js, MySQL, Socket.io).",
      "Plataforma de sorteos con validación de pagos vía bot de Telegram y asignación automática de tickets (React, Node.js, PostgreSQL, Telegram Bot API).",
      "Web corporativa y catálogo digital para Taller Corazón de María (React, Node.js, PostgreSQL)."
    ]
  },
  {
    id: "unp-practicas",
    role: "Practicante",
    organization: "Instituto de Informática — Universidad Nacional de Piura",
    location: "Piura, Perú",
    start: { label: "Jun 2024", dateTime: "2024-06" },
    end: { label: "Sep 2024", dateTime: "2024-09" },
    highlights: [
      "Desarrollo de una aplicación web para la gestión administrativa interna.",
      "Diseño de flyers para difusión institucional.",
      "Soporte técnico a usuarios y equipos."
    ]
  }
];

export const EDUCATION_DATA = [
  {
    id: "unp",
    degree: "Bachiller en Ingeniería Informática",
    institution: "Universidad Nacional de Piura",
    start: { label: "2019", dateTime: "2019" },
    end: { label: "2024", dateTime: "2024" }
  }
];

export const LANGUAGES_DATA = [
  { id: "es", language: "Español", level: "Nativo" },
  { id: "en", language: "Inglés", level: "Intermedio (certificado por el Instituto de Idiomas UNP)" }
];
