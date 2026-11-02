import PropTypes from 'prop-types';
import { FaLayerGroup } from 'react-icons/fa';
import { getTechColor } from '../../constants/techColors';
import '../../styles/components/CardProject.css';

// Marcador visual cuando el proyecto no tiene captura publicable.
export const ProjectImagePlaceholder = ({ projectName, className = '' }) => (
  <div
    className={`card-project-placeholder ${className}`}
    role="img"
    aria-label={`${projectName}: vista previa no disponible`}
  >
    <FaLayerGroup className="card-project-placeholder-icon" aria-hidden="true" />
    <span className="card-project-placeholder-text">Vista previa no disponible</span>
  </div>
);

ProjectImagePlaceholder.propTypes = {
  projectName: PropTypes.string.isRequired,
  className: PropTypes.string
};

export const TechBadges = ({ technologies, className = '' }) => (
  <ul className={`card-project-technologies ${className}`} aria-label="Tecnologías">
    {technologies.map((tech) => (
      <li key={tech} className="tech-badge glass-tech-badge">
        <span
          className="tech-circle"
          style={{ backgroundColor: getTechColor(tech) }}
          aria-hidden="true"
        ></span>
        <span className="tech-name">{tech}</span>
      </li>
    ))}
  </ul>
);

TechBadges.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
};

export const CardProject = ({
  imageUrl = null,
  imageWidth,
  imageHeight,
  projectName,
  description,
  role,
  impact,
  linkProy = null,
  technologies = [],
  className = '',
  onView
}) => {
  return (
    <article className={`card-project-container glass-project-card ${className}`}>
      <div className="card-project-content">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Captura del proyecto ${projectName}`}
            className="card-project-image"
            width={imageWidth || undefined}
            height={imageHeight || undefined}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <ProjectImagePlaceholder projectName={projectName} />
        )}
        <h3 className="card-project-title">{projectName}</h3>

        {impact && (
          <p className="card-project-impact">
            <span className="card-project-meta-label">Impacto:</span> {impact}
          </p>
        )}

        <p className="card-project-description">{description}</p>

        {role && (
          <p className="card-project-role">
            <span className="card-project-meta-label">Rol:</span> {role}
          </p>
        )}

        {technologies.length > 0 && <TechBadges technologies={technologies} />}

        {onView ? (
          <button
            type="button"
            className="card-project-link glass-button"
            onClick={onView}
            aria-label={`Ver caso de estudio del proyecto ${projectName}`}
          >
            Ver caso de estudio
          </button>
        ) : linkProy ? (
          <a
            href={linkProy}
            target="_blank"
            rel="noopener noreferrer"
            className="card-project-link glass-button"
            aria-label={`Ver evidencias del proyecto ${projectName} (abre en nueva pestaña)`}
          >
            Ver evidencias
          </a>
        ) : null}
      </div>
    </article>
  );
};

CardProject.propTypes = {
  imageUrl: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string,
  impact: PropTypes.string,
  linkProy: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  onView: PropTypes.func
};
