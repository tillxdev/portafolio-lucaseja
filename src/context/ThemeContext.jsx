import PropTypes from 'prop-types';
import { useTheme } from '../hooks/useTheme';
import { ThemeContext } from './themeContextValue';

export const ThemeProvider = ({ children }) => {
  const themeValues = useTheme();

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
