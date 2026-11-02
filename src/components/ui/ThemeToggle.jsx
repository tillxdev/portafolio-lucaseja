import { useThemeContext } from '../../hooks/useThemeContext';
import '../../styles/components/ThemeToggle.css';

export const ThemeToggle = () => {
  const { toggleTheme, isDark } = useThemeContext();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      <div className="theme-toggle-icon" aria-hidden="true">
        {isDark ? (
          // Icono de sol para cambiar a modo claro
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
          </svg>
        ) : (
          // Icono de luna para cambiar a modo oscuro
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </div>
      
      {/* Indicador visual del tema actual */}
      <div className="theme-indicator" aria-hidden="true">
        <span className="theme-label">
          {isDark ? 'Oscuro' : 'Claro'}
        </span>
      </div>
    </button>
  );
};