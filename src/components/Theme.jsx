import React, { useState } from "react";
import PropTypes from "prop-types";
import { THEME_CONSTANTS } from "../utils/globalConstants";

const ThemeContext = React.createContext(THEME_CONSTANTS.LIGHT_THEME);

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(THEME_CONSTANTS.LIGHT_THEME);
  const changeTheme = (theme) => setTheme(theme);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

Theme.propTypes = propTypes;

Theme.defaultProps = defaultProps;

export default ThemeContext;
export { Theme };
