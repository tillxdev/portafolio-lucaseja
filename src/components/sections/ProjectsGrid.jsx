import { useState } from 'react';
import { PROJECTS_DATA } from '../../constants/projectsData';
import { CardProject, ProjectImagePlaceholder, TechBadges } from '../ui/CardProject';
import { Modal } from '../ui/Modal';
import '../../styles/components/ProjectsGrid.css';
import '../../styles/components/ProjectModal.css';

const INITIAL_VISIBLE = 3;

export const ProjectsGrid = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const isModalOpen = Boolean(activeProject);

  const hasMoreProjects = PROJECTS_DATA.length > INITIAL_VISIBLE;
  const visibleProjects = showAll ? PROJECTS_DATA : PROJECTS_DATA.slice(0, INITIAL_VISIBLE);

  return (
    <>
      <div className="projects-grid-container">
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-grid-item">
              <CardProject
                imageUrl={project.imageUrl}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
                projectName={project.projectName}
                description={project.shortDescription || project.description}
                role={project.role}
                impact={project.impact}
                linkProy={project.driveLink}
                technologies={project.technologies}
                onView={() => setActiveProject(project)}
              />
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="projects-cta">
            <button
              type="button"
              className="view-more-btn glass-button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
            >
              {showAll ? 'Ver menos proyectos' : 'Ver todos los proyectos'}
            </button>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setActiveProject(null)}
        title={activeProject?.projectName}
        size="lg"
        closeOnOverlayClick
      >
        {activeProject && (
          <div className="project-modal">
            <div className="project-modal-media">
              {activeProject.imageUrl ? (
                <img
                  src={activeProject.imageUrl}
                  alt={`Captura del proyecto ${activeProject.projectName}`}
                  className="project-modal-image"
                  width={activeProject.imageWidth || undefined}
                  height={activeProject.imageHeight || undefined}
                />
              ) : (
                <ProjectImagePlaceholder
                  projectName={activeProject.projectName}
                  className="card-project-placeholder--modal"
                />
              )}
            </div>
            <div className="project-modal-content">
              <dl className="project-case">
                {activeProject.problem && (
                  <div className="project-case-item">
                    <dt>Problema</dt>
                    <dd>{activeProject.problem}</dd>
                  </div>
                )}
                {activeProject.role && (
                  <div className="project-case-item">
                    <dt>Rol</dt>
                    <dd>{activeProject.role}</dd>
                  </div>
                )}
                {activeProject.impact && (
                  <div className="project-case-item">
                    <dt>Impacto</dt>
                    <dd>{activeProject.impact}</dd>
                  </div>
                )}
              </dl>

              <p className="project-modal-description">{activeProject.description}</p>

              {activeProject.highlights?.length > 0 && (
                <div className="project-case-highlights">
                  <h3 className="project-case-subtitle">Aspectos técnicos</h3>
                  <ul>
                    {activeProject.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeProject.technologies?.length > 0 && (
                <TechBadges
                  technologies={activeProject.technologies}
                  className="project-modal-technologies"
                />
              )}

              {activeProject.driveLink && (
                <a
                  href={activeProject.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-project-link glass-button project-modal-link"
                >
                  Ver evidencias en Google Drive
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
