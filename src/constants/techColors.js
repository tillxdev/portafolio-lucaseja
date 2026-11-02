// Colores por tecnología (estilo GitHub). Las marcas negras usan un gris medio
// para que el punto de color se vea en tema claro y oscuro.
export const TECH_COLORS = {
  'React': '#61DAFB',
  'Node.js': '#339933',
  'MySQL': '#4479A1',
  'Express': '#8B8B8B',
  'Express.js': '#8B8B8B',
  'Socket.io': '#9CA3AF',
  'Redis': '#DC382D',
  'Telegram Bot API': '#26A5E4',
  'Tailwind CSS': '#06B6D4',
  'JavaScript': '#F7DF1E',
  'TypeScript': '#3178C6',
  'Python': '#3776AB',
  'PHP': '#777BB4',
  'HTML': '#E34F26',
  'CSS': '#1572B6',
  'MongoDB': '#47A248',
  'PostgreSQL': '#4169E1',
  'Docker': '#2496ED',
  'Firebase': '#FFCA28'
};

// Función para obtener el color de una tecnología
export const getTechColor = (tech) => {
  return TECH_COLORS[tech] || '#6B7280'; // Color gris por defecto
};
