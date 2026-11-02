import { SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss, SiExpress, SiVite } from 'react-icons/si';
import '../../styles/components/StackShowcase.css';

// Express usa currentColor (hereda el color de texto del tema) y PostgreSQL un azul
// con contraste >= 3:1 tanto en tema claro como oscuro (WCAG 1.4.11).
const STACK_ITEMS = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiVite, label: 'Vite', color: '#646CFF' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#38B2AC' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#68A063' },
  { icon: SiExpress, label: 'Express', color: 'currentColor' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#4F7FD9' },
];

export const StackShowcase = () => {
  return (
    <div className="stack-showcase">
      <p className="stack-label">Mi Stack Principal</p>
      <div className="stack-icons">
        {STACK_ITEMS.map(({ icon: Icon, label, color }) => (
          <div key={label} className="stack-item" title={label} style={{ color: 'var(--text-primary)' }}>
            <Icon size={48} color={color} className="stack-icon" aria-hidden="true" />
            <span className="stack-name">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
