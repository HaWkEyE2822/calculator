import React from "react";
import PropTypes from "prop-types";
import { configuration } from "../utils/calculatorConfig";
import Button from "../atoms/Button";
import { MODE_CONSTANTS } from "../utils/globalConstants";

const propTypes = {
  result: PropTypes.number,
  onClick: PropTypes.func,
  mode: PropTypes.string,
};

const defaultProps = {
  result: 0,
  onClick: () => {},
  mode: MODE_CONSTANTS.BASIC_MODE,
};

const Calculator = ({ result, onClick, mode }) => {
  return (
    <div className="calculator flex-center">
      <div className="calculator--container">
        <div className="header">Simple Calculator</div>
        <div className="result" id="result">
          {result}
        </div>
        <div className="calculator--keypad">
          {configuration[mode].map((config) => (
            <Button
              text={config.displayText}
              onClick={() => onClick(config)}
              key={config.id}
              id={config.id}
              className="calculator--button"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Calculator.propTypes = propTypes;

Calculator.defaultProps = defaultProps;

export default Calculator;
