import { SOCIAL_LINKS, PERSONAL_INFO, CV_FILENAME } from '../../constants/appData';
import '../../styles/components/Aboutme.css';

export const AboutMe = () => {
  return (
    <section id="aboutme" className="about-me glass-section section-shell">
      <div className="about-me-content">
        <h2 className="about-me-title">Sobre mí</h2>
        <p className="about-me-paragraph">
          Soy <strong>{PERSONAL_INFO.profession}</strong> por la{' '}
          <strong>{PERSONAL_INFO.university}</strong> y desde 2024 trabajo como
          desarrollador full stack freelance en Piura.
        </p>
        <p className="about-me-paragraph">
          Desarrollo, despliego y mantengo aplicaciones web en producción para restaurantes,
          comercios e instituciones educativas, llevando cada proyecto de principio a fin:
          base de datos, API, interfaz y servidor.
        </p>
        <p className="about-me-paragraph">
          Mi stack principal es Node.js, React y PostgreSQL sobre servidores Linux, y además
          integro APIs de IA generativa (Claude, OpenAI y Gemini) en las aplicaciones que construyo.
        </p>
      </div>

      <div className="div-button">
        <a
          href={SOCIAL_LINKS.cv}
          download={CV_FILENAME}
          className="button glass-button"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          Descargar mi CV
        </a>
      </div>
    </section>
  );
};
