import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { StackShowcase } from './StackShowcase';
import { SOCIAL_LINKS, PERSONAL_INFO, CONTACT_INFO, CV_FILENAME } from '../../constants/appData';
import '../../styles/components/Welcome.css';
import '../../styles/components/Aboutme.css';
import lucasImage from '../../assets/lucaseja2.jpg';

// Estilos de los CTAs del hero: reutilizan .button/.glass-button y variables del tema.
const ctaGroupStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 'var(--spacing-md)',
    marginTop: 'var(--spacing-md)',
    width: '100%'
};

const ctaBaseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-sm)',
    textDecoration: 'none',
    flex: '1 1 160px',
    maxWidth: '220px'
};

const ctaSecondaryStyle = {
    ...ctaBaseStyle,
    background: 'var(--glass-bg-subtle)',
    border: '2px solid var(--accent-color-1)',
    color: 'var(--text-primary)'
};

const metaStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-xs)',
    margin: 0,
    color: 'var(--text-muted)',
    fontSize: 'var(--font-size-sm)'
};

// React 18 no reconoce la prop fetchPriority; en minúsculas se pasa tal cual al DOM.
const LCP_IMAGE_ATTRS = { fetchpriority: 'high' };

export const Welcome = () => {
    return (
        <section id="welcome" className="welcome-container glass-section section-shell">
            <div className="welcome-content">
                <div className="welcome-hero">
                    <div className="welcome-photo">
                        <img
                            src={lucasImage}
                            alt={`Retrato de ${PERSONAL_INFO.fullName}, desarrollador full stack`}
                            width="170"
                            height="170"
                            loading="eager"
                            decoding="async"
                            {...LCP_IMAGE_ATTRS}
                        />
                    </div>
                    <div className="welcome-text">
                        <p className="welcome-greeting">¡Hola! Mi nombre es</p>
                        <h1 className="welcome-name">{PERSONAL_INFO.name}</h1>
                        <p className="welcome-quote">{PERSONAL_INFO.headline}</p>
                        <p className="welcome-greeting" style={{ maxWidth: '38rem' }}>
                            {PERSONAL_INFO.valueProposition}
                        </p>
                        <p style={metaStyle}>
                            <FaMapMarkerAlt aria-hidden="true" />
                            {CONTACT_INFO.location}
                        </p>
                        <div style={ctaGroupStyle}>
                            <a
                                href={SOCIAL_LINKS.cv}
                                download={CV_FILENAME}
                                className="button glass-button"
                                style={ctaBaseStyle}
                            >
                                <FaFileDownload aria-hidden="true" />
                                Descargar CV
                            </a>
                            <a href="#contact" className="button" style={ctaSecondaryStyle}>
                                <FaEnvelope aria-hidden="true" />
                                Contactar
                            </a>
                        </div>
                    </div>
                </div>

                <StackShowcase />

                <div className="welcome-socials">
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link github-link"
                        aria-label="Perfil de GitHub (abre en nueva pestaña)"
                        title="GitHub"
                    >
                        <FaGithub size={32} aria-hidden="true" />
                    </a>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link linkedin-link"
                        aria-label="Perfil de LinkedIn (abre en nueva pestaña)"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={32} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
};
