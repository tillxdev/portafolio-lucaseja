import PropTypes from 'prop-types';
import { FaBriefcase, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import { EXPERIENCE_DATA, EDUCATION_DATA, LANGUAGES_DATA } from '../../constants/experienceData';
import '../../styles/components/Experience.css';

const DateRange = ({ start, end }) => (
  <p className="experience-dates">
    <time dateTime={start.dateTime}>{start.label}</time>
    {' – '}
    {end.dateTime ? <time dateTime={end.dateTime}>{end.label}</time> : <span>{end.label}</span>}
  </p>
);

const datePropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  dateTime: PropTypes.string
});

DateRange.propTypes = {
  start: datePropType.isRequired,
  end: datePropType.isRequired
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="experience-container glass-section section-shell"
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className="experience-header">Experiencia</h2>

      <ol className="experience-timeline">
        {EXPERIENCE_DATA.map((job) => (
          <li key={job.id} className="experience-item">
            <span className="experience-marker" aria-hidden="true">
              <FaBriefcase />
            </span>
            <article className="experience-card glass-skill-card">
              <header className="experience-card-header">
                <h3 className="experience-role">{job.role}</h3>
                <p className="experience-org">
                  {job.organization} · {job.location}
                </p>
                <DateRange start={job.start} end={job.end} />
              </header>
              <ul className="experience-highlights">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      <div className="experience-extra">
        <div className="experience-extra-block glass-skill-card">
          <h3 className="experience-extra-title">
            <FaGraduationCap aria-hidden="true" /> Educación
          </h3>
          <ul className="experience-extra-list">
            {EDUCATION_DATA.map((edu) => (
              <li key={edu.id}>
                <strong>{edu.degree}</strong>
                <span>{edu.institution}</span>
                <DateRange start={edu.start} end={edu.end} />
              </li>
            ))}
          </ul>
        </div>

        <div className="experience-extra-block glass-skill-card">
          <h3 className="experience-extra-title">
            <FaLanguage aria-hidden="true" /> Idiomas
          </h3>
          <ul className="experience-extra-list">
            {LANGUAGES_DATA.map((lang) => (
              <li key={lang.id}>
                <strong>{lang.language}</strong>
                <span>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
