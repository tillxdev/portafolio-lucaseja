import PropTypes from 'prop-types';
import { Card } from '../ui/Card';
import { getSkillsByCategory } from '../../constants/skillsData';
import '../../styles/components/Skills.css';

const CORE_STACK = ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Debian Linux'];
const CATEGORY_CONFIG = {
  frontend: { label: 'Frontend', order: 1 },
  backend: { label: 'Backend', order: 2 },
  database: { label: 'Base de Datos', order: 3 },
  infrastructure: { label: 'Infraestructura y DevOps', order: 4 },
  ai: { label: 'IA Generativa', order: 5 },
  tools: { label: 'Herramientas', order: 6 }
};

const CATEGORIES = Object.keys(CATEGORY_CONFIG).sort(
  (a, b) => CATEGORY_CONFIG[a].order - CATEGORY_CONFIG[b].order
);

// Variante de <Card> para iconos de react-icons (mismas clases y estructura).
const IconSkillCard = ({ icon: Icon, color, skillName, className = '' }) => (
  <div className={`card-container glass-skill-card ${className}`}>
    <div className="card-content" style={{ color: 'var(--text-primary)' }}>
      <Icon className="card-icon" color={color} aria-hidden="true" focusable="false" />
      <p className="card-text">{skillName}</p>
    </div>
  </div>
);

IconSkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string,
  skillName: PropTypes.string.isRequired,
  className: PropTypes.string
};

export const Skills = () => {
  const isCoreSkill = (skillName) => CORE_STACK.includes(skillName);

  return (
    <section id="skills" className="skills-container glass-section section-shell">
      <div className="skills-wrapper">
        <h2 className="skills-header">Habilidades</h2>
        <p className="skills-subtitle">Tecnologías con las que trabajo</p>

        <div className="skills-by-category">
          {CATEGORIES.map((category) => {
            const skills = getSkillsByCategory(category);
            if (skills.length === 0) return null;
            return (
              <div key={category} className="skill-category">
                <h3 className="category-label">{CATEGORY_CONFIG[category].label}</h3>
                <div className="skills-grid">
                  {skills.map((tech) => {
                    const className = isCoreSkill(tech.name) ? 'core-skill' : '';
                    return tech.icon ? (
                      <IconSkillCard
                        key={tech.name}
                        icon={tech.icon}
                        color={tech.color}
                        skillName={tech.name}
                        className={className}
                      />
                    ) : (
                      <Card
                        key={tech.name}
                        iconUrl={tech.iconUrl}
                        skillName={tech.name}
                        className={className}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
