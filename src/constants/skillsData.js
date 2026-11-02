import { SiAnthropic, SiExpress, SiSocketdotio, SiGithub, SiOpenai, SiGooglegemini, SiJsonwebtokens, SiPm2, SiLetsencrypt } from 'react-icons/si';
import { FaTerminal } from 'react-icons/fa';
import { MdApi, MdQueue, MdDns } from 'react-icons/md';

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/**
 * Habilidades alineadas con el CV, núcleo full stack primero en cada categoría.
 * - iconUrl: imagen remota (devicon), renderizada con <Card>.
 * - icon + color: componente de react-icons (sin petición externa);
 *   color "currentColor" hereda el color de texto del tema.
 */
export const SKILLS_DATA = [
  // FRONTEND
  { iconUrl: `${DEVICON}/react/react-original.svg`, name: "React", category: "frontend" },
  { iconUrl: `${DEVICON}/javascript/javascript-original.svg`, name: "JavaScript", category: "frontend" },
  { iconUrl: `${DEVICON}/typescript/typescript-original.svg`, name: "TypeScript", category: "frontend" },
  { iconUrl: `${DEVICON}/vitejs/vitejs-original.svg`, name: "Vite", category: "frontend" },
  { iconUrl: `${DEVICON}/html5/html5-original.svg`, name: "HTML", category: "frontend" },
  { iconUrl: `${DEVICON}/css3/css3-original.svg`, name: "CSS", category: "frontend" },
  { iconUrl: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, name: "Tailwind CSS", category: "frontend" },
  { iconUrl: `${DEVICON}/bootstrap/bootstrap-original.svg`, name: "Bootstrap", category: "frontend" },
  { iconUrl: `${DEVICON}/xml/xml-original.svg`, name: "XML", category: "frontend" },

  // BACKEND
  { iconUrl: `${DEVICON}/nodejs/nodejs-original.svg`, name: "Node.js", category: "backend" },
  { icon: SiExpress, color: "currentColor", name: "Express.js", category: "backend" },
  { icon: MdApi, color: "#3B82F6", name: "REST APIs", category: "backend" },
  { icon: SiSocketdotio, color: "currentColor", name: "Socket.io", category: "backend" },
  { icon: SiJsonwebtokens, color: "#FB015B", name: "JWT", category: "backend" },
  { iconUrl: `${DEVICON}/prisma/prisma-original.svg`, name: "Prisma ORM", category: "backend" },
  { iconUrl: `${DEVICON}/graphql/graphql-plain.svg`, name: "GraphQL", category: "backend" },
  { icon: MdQueue, color: "#E0234E", name: "BullMQ", category: "backend" },
  { iconUrl: `${DEVICON}/python/python-original.svg`, name: "Python", category: "backend" },
  { iconUrl: `${DEVICON}/java/java-original.svg`, name: "Java", category: "backend" },
  { iconUrl: `${DEVICON}/php/php-original.svg`, name: "PHP", category: "backend" },

  // DATABASE
  { iconUrl: `${DEVICON}/postgresql/postgresql-original.svg`, name: "PostgreSQL", category: "database" },
  { iconUrl: `${DEVICON}/mysql/mysql-original-wordmark.svg`, name: "MySQL", category: "database" },
  { iconUrl: `${DEVICON}/redis/redis-original.svg`, name: "Redis", category: "database" },
  { iconUrl: `${DEVICON}/mariadb/mariadb-original.svg`, name: "MariaDB", category: "database" },
  { iconUrl: `${DEVICON}/mongodb/mongodb-original.svg`, name: "MongoDB", category: "database" },
  { iconUrl: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg`, name: "SQL Server", category: "database" },

  // INFRAESTRUCTURA
  { iconUrl: `${DEVICON}/debian/debian-original.svg`, name: "Debian Linux", category: "infrastructure" },
  { iconUrl: `${DEVICON}/nginx/nginx-original.svg`, name: "Nginx", category: "infrastructure" },
  { icon: SiPm2, color: "currentColor", name: "PM2", category: "infrastructure" },
  { iconUrl: `${DEVICON}/docker/docker-original.svg`, name: "Docker", category: "infrastructure" },
  { icon: MdDns, color: "#06B6D4", name: "VPS", category: "infrastructure" },
  { icon: SiLetsencrypt, color: "currentColor", name: "SSL/Certbot", category: "infrastructure" },
  { iconUrl: `${DEVICON}/firebase/firebase-plain.svg`, name: "Firebase", category: "infrastructure" },
  { iconUrl: `${DEVICON}/googlecloud/googlecloud-original.svg`, name: "Google Cloud", category: "infrastructure" },

  // IA GENERATIVA
  { icon: SiAnthropic, color: "#D97757", name: "Claude API", category: "ai" },
  { icon: SiOpenai, color: "currentColor", name: "OpenAI API", category: "ai" },
  { icon: SiGooglegemini, color: "#8E75B2", name: "Gemini Pro", category: "ai" },
  { icon: FaTerminal, color: "#D97757", name: "Claude Code CLI", category: "ai" },

  // HERRAMIENTAS
  { iconUrl: `${DEVICON}/git/git-original.svg`, name: "Git", category: "tools" },
  { icon: SiGithub, color: "currentColor", name: "GitHub", category: "tools" },
  { iconUrl: `${DEVICON}/postman/postman-original.svg`, name: "Postman", category: "tools" },
  { iconUrl: "https://img.icons8.com/color/48/power-bi.png", name: "Power BI", category: "tools" }
];

export const getSkillsByCategory = (category) => {
  return SKILLS_DATA.filter(skill => skill.category === category);
};
