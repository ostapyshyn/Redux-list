import { useState, createContext, useMemo } from 'react';

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(false);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeProvider };
