import appwebSGA from '../assets/appwebSGA.png';
import appwebBM from '../assets/appWebBM.png';
import cliente3 from '../assets/cliente_3.png';
import cliente4 from '../assets/cliente_4.png';
import cliente5 from '../assets/cliente_5.png';

/**
 * Proyectos como casos de estudio full stack.
 * Datos alineados con el CV: stack (máx. 7), métricas solo cuando el CV las da
 * y highlights técnicos deducibles del CV o de la descripción del proyecto.
 * driveLink / imageUrl en null cuando no hay recurso propio (no se inventa).
 */
export const PROJECTS_DATA = [
  {
    id: 6,
    imageUrl: null,
    imageWidth: null,
    imageHeight: null,
    projectName: "SaaS multi-tenant para restaurantes",
    shortDescription: "Plataforma SaaS para gestionar ventas, pedidos, inventario y usuarios de varios restaurantes.",
    description: "Plataforma SaaS multi-tenant para la gestión integral de restaurantes: ventas, pedidos, inventario y usuarios, con cada negocio operando de forma independiente sobre la misma aplicación.",
    problem: "Centralizar ventas, pedidos, inventario y usuarios de varios restaurantes en una sola plataforma.",
    role: "Desarrollador full stack freelance (end-to-end).",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    impact: null,
    highlights: [
      "Arquitectura multi-tenant: varios restaurantes sobre una sola plataforma.",
      "Módulos de ventas, pedidos, inventario y gestión de usuarios."
    ],
    driveLink: null
  },
  {
    id: 5,
    imageUrl: cliente5,
    imageWidth: 1536,
    imageHeight: 1024,
    projectName: "POS multi-sede — Bazar Tavo's",
    shortDescription: "Punto de venta multi-sede con inventario, clientes, ventas a crédito y reportes.",
    description: "Sistema POS multirrol para una boutique con venta de ropa, útiles escolares y perfumería, con acceso diferenciado para administrador, cajero y almacenero. Permite registrar ventas buscando productos por nombre o código de barras, con control de inventario en tiempo real. Incluye un módulo de ventas a crédito: el cliente requiere un perfil registrado, lo que permite llevar el seguimiento de deudas activas, registrar abonos parciales y consultar el historial de pagos. Centraliza caja, stock, cuentas por cobrar y reportes en una sola interfaz.",
    problem: "Centralizar caja, stock y cuentas por cobrar de varias sedes sin depender de registros externos.",
    role: "Desarrollador full stack freelance (end-to-end).",
    technologies: ["React", "Node.js", "PostgreSQL"],
    impact: "Operación multi-sede en un solo sistema.",
    highlights: [
      "Roles diferenciados: administrador, cajero y almacenero.",
      "Ventas a crédito con seguimiento de deudas y abonos parciales.",
      "Búsqueda por nombre o código de barras e inventario en tiempo real."
    ],
    driveLink: null
  },
  {
    id: 2,
    imageUrl: appwebBM,
    imageWidth: 1919,
    imageHeight: 1018,
    projectName: "Pedidos en tiempo real — Pollería Burger Maicol",
    shortDescription: "Sistema de pedidos multirrol que conecta caja, cocina, salón y reparto en tiempo real.",
    description: "La aplicación web agiliza la gestión de pedidos de la pollería conectando caja, cocina, salón y reparto en un sistema integrado. Permite el registro eficiente de pedidos, la actualización en tiempo real de su estado, notificaciones inmediatas y la generación automática de reportes, con una interfaz adaptada a cada rol.",
    problem: "Coordinar los pedidos entre caja, cocina, salón y reparto con un estado compartido y menos errores.",
    role: "Desarrollador full stack freelance (end-to-end).",
    technologies: ["React", "Node.js", "MySQL", "Socket.io"],
    impact: "Más de 200 pedidos diarios.",
    highlights: [
      "Socket.io para sincronizar en tiempo real el estado de cada pedido entre estaciones.",
      "Interfaces por rol: caja, cocina, salón y reparto.",
      "Reportes automáticos de la operación."
    ],
    driveLink: "https://drive.google.com/file/d/1eeRapJRw-sK038jTYfree7vw1dOddRst/view?usp=sharing"
  },
  {
    id: 4,
    imageUrl: cliente4,
    imageWidth: 1066,
    imageHeight: 492,
    projectName: "Plataforma de sorteos (cliente privado)",
    shortDescription: "Venta de tickets con validación de pagos vía bot de Telegram y asignación automática.",
    description: "Plataforma de gestión de sorteos con sitio público y panel administrativo. Los participantes adquieren tickets subiendo su comprobante de pago (Yape/QR) desde la web; cada compra genera una notificación en tiempo real al administrador vía bot de Telegram, quien aprueba o rechaza el pago directamente desde el chat o desde el panel. Una vez aprobada la compra, el sistema asigna automáticamente números de ticket consecutivos entre los disponibles. Los ganadores se registran tras el sorteo en vivo, con foto de evidencia adjunta.",
    problem: "Evitar pagos no verificados y mantener la trazabilidad de participantes y resultados.",
    role: "Desarrollador full stack freelance (end-to-end).",
    technologies: ["React", "Node.js", "PostgreSQL", "Telegram Bot API"],
    impact: null,
    highlights: [
      "Bot de Telegram (Telegram Bot API) para aprobar o rechazar pagos desde el chat.",
      "Asignación automática de tickets consecutivos tras validar el pago.",
      "Trazabilidad de participantes, pagos y ganadores."
    ],
    driveLink: null
  },
  {
    id: 3,
    imageUrl: cliente3,
    imageWidth: 719,
    imageHeight: 697,
    projectName: "Taller Corazón de María",
    shortDescription: "Web corporativa con catálogo digital y panel para contenido y moderación de reseñas.",
    description: "Plataforma web de presentación institucional y catálogo digital para una empresa especializada en vestimentas litúrgicas (casullas, estolas, albas y similares), orientada a sacerdotes, parroquias e instituciones religiosas. El sitio público permite explorar el catálogo y contactar al taller por correo o WhatsApp. El panel administrativo centraliza la gestión de productos, categorías, banners y reseñas de clientes, que pasan por un flujo de moderación antes de publicarse.",
    problem: "Mostrar el catálogo del taller y recibir contactos de forma digital.",
    role: "Desarrollador full stack freelance (end-to-end).",
    technologies: ["React", "Node.js", "PostgreSQL"],
    impact: null,
    highlights: [
      "Panel administrativo para productos, categorías y banners.",
      "Flujo de moderación de reseñas antes de publicarlas."
    ],
    driveLink: null
  },
  {
    id: 1,
    imageUrl: appwebSGA,
    imageWidth: 624,
    imageHeight: 329,
    projectName: "Sistema de gestión de archivos",
    shortDescription: "Gestión administrativa institucional con certificados, constancias y búsqueda rápida de estudiantes.",
    description: "Aplicación web para gestionar las tareas administrativas de un instituto: carga y gestión de certificados y constancias, búsqueda de estudiantes y generación automatizada de documentos.",
    problem: "Agilizar la gestión de certificados y constancias del instituto.",
    role: "Practicante en el Instituto de Informática (UNP).",
    technologies: ["React", "Node.js", "MySQL", "Express", "Python"],
    impact: null,
    highlights: [
      "Generación automatizada de documentos.",
      "Búsqueda rápida de estudiantes."
    ],
    driveLink: "https://drive.google.com/file/d/1SG74An3FbTJgwiQTz7QyhCY-MNoZ-5Nl/view?usp=sharing"
  }
];
