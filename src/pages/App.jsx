import React, { Component } from "react";
import "../assets/stylesheets/App.css";
import { Theme } from "../components/Theme";
import PageWrapper from "../components/PageWrapper";
import Calculator from "../components/Calculator";
import CalculatorOptions from "../components/CalculatorOptions";
import { MODE_CONSTANTS } from "../utils/globalConstants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayInput: 0,
      currentOperator: "",
      secondaryInput: 0,
      operatorPressed: false,
      mode: MODE_CONSTANTS.BASIC_MODE,
    };
  }

  handleClick = (config) => {
    switch (config.type) {
      case "number":
        this.handleInput(config.id);
        break;
      case "operator":
        this.handleOperator(config.id);
        break;
      case "single-operator":
        this.handleSingleOperator(config.id);
        break;
      case "clear":
        this.handleClear();
        break;
      case "result":
        this.handleResult();
        break;
      default:
        return;
    }
  };

  handleSingleOperator = (operator) => {
    const { displayInput } = this.state;
    this.setState({
      displayInput: this.handleSingleOperation(displayInput, operator),
    });
  };

  handleSingleOperation = (num, operator) => {
    switch (operator) {
      case "sign":
        return num * -1;
      case "square":
        return num * num;
      case "square-root":
        return Math.sqrt(num);
      default:
        return num;
    }
  };

  handleResult = () => {
    const { currentOperator, secondaryInput, displayInput } = this.state;
    this.setState(
      {
        displayInput:
          secondaryInput && displayInput
            ? this.handleOperation(
                secondaryInput,
                displayInput,
                currentOperator
              )
            : displayInput,
      },
      () => {
        this.setState({
          currentOperator: "",
        });
      }
    );
  };

  handleOperator = (operator) => {
    const { currentOperator, displayInput, secondaryInput } = this.state;
    this.setState({
      currentOperator: operator,
      operatorPressed: true,
    });
    if (currentOperator) {
      this.setState({
        displayInput: this.handleOperation(
          secondaryInput,
          displayInput,
          currentOperator
        ),
      });
    }
  };

  handleClear = () => {
    this.setState({
      displayInput: 0,
      currentOperator: "",
      secondaryInput: 0,
      operatorPressed: false,
    });
  };

  handleInput = (input) => {
    const { currentOperator, operatorPressed, displayInput } = this.state;
    if (currentOperator && operatorPressed) {
      const value1 = displayInput;
      this.setState({
        displayInput: Number(input),
        operatorPressed: false,
        secondaryInput: value1,
      });
    } else {
      this.setState({
        displayInput: Number(`${displayInput}${input}`),
      });
    }
  };

  handleOperation = (firstNum, secondNum, operator) => {
    switch (operator) {
      case "add":
        return firstNum + secondNum;
      case "subtract":
        return firstNum - secondNum;
      case "divide":
        return firstNum / secondNum;
      case "multiply":
        return firstNum * secondNum;
      case "%":
        return firstNum % secondNum;
      default:
        return 0;
    }
  };

  handleModeChange = (mode) => {
    this.setState({
      mode,
    });
  };
  render() {
    const { displayInput, mode } = this.state;
    return (
      <Theme>
        <PageWrapper>
          <CalculatorOptions onSwitch={this.handleModeChange} />
          <Calculator
            result={displayInput}
            onClick={this.handleClick}
            mode={mode}
          />
        </PageWrapper>
      </Theme>
    );
  }
}

export default App;
