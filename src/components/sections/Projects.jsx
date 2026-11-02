import '../../styles/components/Projects.css';
import { ProjectsGrid } from './ProjectsGrid';

export const Projects = () => {
  return (
    <section id="projects" className="projects-container glass-section section-shell">
      <div className="projects-wrapper">
        <h2 className="projects-header">Proyectos destacados</h2>
        <p className="projects-subtitle">Aplicaciones full stack en producción, de principio a fin</p>
        <ProjectsGrid />
      </div>
    </section>
  );
};
