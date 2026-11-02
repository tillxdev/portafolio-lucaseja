import PropTypes from 'prop-types';
import { PiCertificateFill } from 'react-icons/pi';
import { HiExternalLink } from 'react-icons/hi';
import '../../styles/components/CardProject.css';

export const CardCertification = ({
    title,
    institution,
    duration,
    certificateUrl,
    icon: IconComponent = PiCertificateFill,
    className = ''
}) => {
    // startDate, endDate y skills se aceptan por compatibilidad (ver propTypes) pero no se muestran.
    return (
        <div className={`card-certification-compact ${className}`}>
            {/* Icono lateral */}
            <div className="certification-compact-icon">
                <IconComponent size={40} aria-hidden="true" />
            </div>

            <div className="certification-compact-content">
                <div className="certification-compact-info">
                    <h3 className="certification-compact-title">{title}</h3>
                    <div className="certification-compact-details">
                        <span className="certification-compact-institution">{institution}</span>
                        <span className="certification-compact-duration">{duration}</span>
                    </div>
                </div>

                <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-compact-button"
                    aria-label={`Ver certificado de ${title} (se abre en una pestaña nueva)`}
                >
                    <span>Ver PDF</span>
                    <HiExternalLink size={14} aria-hidden="true" />
                </a>
            </div>
        </div>
    );
};

CardCertification.propTypes = {
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    certificateUrl: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.elementType,
    className: PropTypes.string
};