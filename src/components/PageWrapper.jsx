import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "./Theme";
import { THEME_CONFIG } from "../utils/themeConfig";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const defaultStyles = (theme) => ({
  backgroundColor: THEME_CONFIG[theme].default.backgroundColor,
  color: THEME_CONFIG[theme].default.color,
  padding: "24px",
  height: "100vh",
  textAlign: "center",
});

const PageWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <div style={{ ...defaultStyles(theme) }}>{children}</div>;
};

PageWrapper.propTypes = propTypes;

PageWrapper.defaultProps = defaultProps;

export default PageWrapper;
