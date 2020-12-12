import React from "react";
import PropTypes from "prop-types";
import ModeSwitcher from "./ModeSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const propTypes = {
  onSwitch: PropTypes.func,
};

const defaultProps = {
  onSwitch: () => {},
};

const CalculatorOptions = ({ onSwitch }) => {
  return (
    <div className="calculator-options flex-center">
      <div className="calculator-options--mode">
        <ModeSwitcher onChange={onSwitch} />
      </div>
      <ThemeSwitcher />
    </div>
  );
};

CalculatorOptions.propTypes = propTypes;

CalculatorOptions.defaultProps = defaultProps;

export default CalculatorOptions;
