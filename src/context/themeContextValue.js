import { createContext } from 'react';

// Contexto separado del Provider para que ThemeContext.jsx solo exporte componentes
// (requisito de react-refresh/only-export-components).
export const ThemeContext = createContext(null);
