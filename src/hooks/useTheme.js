import { useCallback, useEffect, useMemo, useState } from 'react';

// La clave de localStorage y el atributo data-theme en <html> no deben cambiar:
// el script anti-flash de index.html depende de ellos.
const STORAGE_KEY = 'portfolio-theme';
const THEMES = ['dark', 'light'];
const DARK_QUERY = '(prefers-color-scheme: dark)';

const isValidTheme = (value) => THEMES.includes(value);

const readStoredTheme = () => {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return isValidTheme(value) ? value : null;
  } catch {
    return null;
  }
};

const storeTheme = (value) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Almacenamiento bloqueado: el tema se mantiene solo en esta sesión.
  }
};

const getSystemTheme = () => {
  try {
    return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
  } catch {
    return 'dark';
  }
};

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return readStoredTheme() ?? getSystemTheme();
  });

  // Aplicar el tema al documento. No se persiste aquí: solo cuando el usuario elige,
  // para que el listener del sistema siga activo mientras no haya elección explícita.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0f172a' : '#f8fafc');
    }
  }, [theme]);

  // Seguir prefers-color-scheme mientras el usuario no haya elegido un tema.
  useEffect(() => {
    let mediaQuery;
    try {
      mediaQuery = window.matchMedia(DARK_QUERY);
    } catch {
      return undefined;
    }

    const handleChange = (event) => {
      if (!readStoredTheme()) {
        setTheme(event.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      storeTheme(next);
      return next;
    });
  }, []);

  return useMemo(
    () => ({ theme, toggleTheme, isDark: theme === 'dark' }),
    [theme, toggleTheme]
  );
};
