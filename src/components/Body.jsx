import { Welcome, Projects, Experience, Skills, AboutMe, Certifications } from './sections';
import { Contact } from './forms';
import '../styles/components/Body.css';

// Orden pensado para reclutadores; Navbar (NAVIGATION_ITEMS) sigue el mismo orden.
export const Body = () => {
  return (
    <main>
      <Welcome />
      <Projects />
      <Experience />
      <Skills />
      <AboutMe />
      <Certifications />
      <Contact />
    </main>
  );
};
