import '../../styles/components/Certifications.css';
import { CardCertification } from '../ui/CardCertification';
import { CERTIFICATIONS_DATA } from '../../constants/certificationsData';

export const Certifications = () => {
    return (
        <section id="certifications" className="certifications-container glass-section section-shell">
            <div className="certifications-wrapper">
                <h2 className="certifications-header">Certificados</h2>

                <div className="certifications-grid">
                    {CERTIFICATIONS_DATA.map((certification) => (
                        <CardCertification
                            key={certification.id}
                            title={certification.title}
                            institution={certification.institution}
                            duration={certification.duration}
                            startDate={certification.startDate}
                            endDate={certification.endDate}
                            certificateUrl={certification.certificateUrl}
                            skills={certification.skills}
                            icon={certification.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
