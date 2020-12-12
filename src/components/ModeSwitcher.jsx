import React from "react";
import PropTypes from "prop-types";
import Button from "../atoms/Button";
import { MODES } from "../utils/calculatorConfig";

const propTypes = {
  onChange: PropTypes.func,
};

const defaultProps = {
  onChange: () => {},
};

const ModeSwitcher = ({ onChange }) => {
  return (
    <div>
      <div className="header">Choose Modes</div>
      {MODES.map((mode) => (
        <Button
          key={mode.id}
          onClick={() => onChange(mode.id)}
          text={mode.display}
        />
      ))}
    </div>
  );
};

ModeSwitcher.propTypes = propTypes;

ModeSwitcher.defaultProps = defaultProps;

export default ModeSwitcher;
