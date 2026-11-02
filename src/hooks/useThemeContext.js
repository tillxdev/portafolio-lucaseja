import { useContext } from 'react';
import { ThemeContext } from '../context/themeContextValue';

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext debe usarse dentro de un ThemeProvider');
  }
  return context;
};
