import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../components/Theme";
import { THEME_CONFIG } from "../utils/themeConfig";
import { THEME_CONSTANTS } from "../utils/globalConstants";

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

const defaultProps = {
  text: "",
  onClick: () => {},
  style: {},
  className: "",
};

const defaultStyle = {
  cursor: "pointer",
  padding: "8px 24px",
};

const Button = ({ text, onClick, style, className }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        ...defaultStyle,
        ...style,
        ...THEME_CONFIG[theme][THEME_CONSTANTS.BUTTON_THEME],
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
