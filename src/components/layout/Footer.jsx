import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../constants/appData';
import '../../styles/components/Footer.css';

// Instagram es personal: se mantiene, pero al final.
const FOOTER_LINKS = [
  { href: SOCIAL_LINKS.github, label: 'Perfil de GitHub (abre en nueva pestaña)', Icon: FaGithub, external: true },
  { href: SOCIAL_LINKS.linkedin, label: 'Perfil de LinkedIn (abre en nueva pestaña)', Icon: FaLinkedin, external: true },
  { href: SOCIAL_LINKS.email, label: 'Enviar un correo electrónico', Icon: FaEnvelope, external: false },
  { href: SOCIAL_LINKS.whatsapp, label: 'Escribir por WhatsApp (abre en nueva pestaña)', Icon: FaWhatsapp, external: true },
  { href: SOCIAL_LINKS.instagram, label: 'Perfil de Instagram (abre en nueva pestaña)', Icon: FaInstagram, external: true }
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer glass-footer">
      <div className="footer-icons">
        {FOOTER_LINKS.map(({ href, label, Icon, external }) => (
          <a
            key={href}
            href={href}
            className="footer-icon"
            aria-label={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon size={30} aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="footer-copyright">
        <p>Copyright © {year}, {PERSONAL_INFO.copyrightOwner}</p>
      </div>
    </footer>
  );
};
