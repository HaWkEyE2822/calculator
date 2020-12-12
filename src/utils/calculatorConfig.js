import { MODE_CONSTANTS } from "./globalConstants";

const { BASIC_MODE, SCIENTIFIC_MODE } = MODE_CONSTANTS;

const BASIC_CONFIG = [
  {
    id: "1",
    displayText: "1",
    type: "number",
    mode: "basic",
  },
  {
    id: "2",
    displayText: "2",
    type: "number",
    mode: "basic",
  },
  {
    id: "3",
    displayText: "3",
    type: "number",
    mode: "basic",
  },
  {
    id: "add",
    displayText: "Add (+)",
    type: "operator",
    mode: "basic",
  },

  {
    id: "4",
    displayText: "4",
    type: "number",
    mode: "basic",
  },
  {
    id: "5",
    displayText: "5",
    type: "number",
    mode: "basic",
  },
  {
    id: "6",
    displayText: "6",
    type: "number",
    mode: "basic",
  },
  {
    id: "subtract",
    displayText: "Subtract (-)",
    type: "operator",
    mode: "basic",
  },

  {
    id: "7",
    displayText: "7",
    type: "number",
    mode: "basic",
  },

  {
    id: "8",
    displayText: "8",
    type: "number",
    mode: "basic",
  },
  {
    id: "9",
    displayText: "9",
    type: "number",
    mode: "basic",
  },
  {
    id: "multiply",
    displayText: "Multiply (*)",
    type: "operator",
    mode: "basic",
  },

  {
    id: "clear",
    displayText: "Clear",
    type: "clear",
    mode: "basic",
  },
  {
    id: "0",
    displayText: "0",
    type: "number",
    mode: "basic",
  },
  {
    id: "=",
    displayText: "=",
    type: "result",
    mode: "basic",
  },
  {
    id: "divide",
    displayText: "Divide (/)",
    type: "operator",
    mode: "basic",
  },
];

const scientificConfiguration = [
  {
    id: "sign",
    displayText: "-x",
    type: "single-operator",
    mode: "scientific",
  },
  {
    id: "square",
    displayText: "x^2",
    type: "single-operator",
    mode: "scientific",
  },
  {
    id: "square-root",
    displayText: "root",
    type: "single-operator",
    mode: "scientific",
  },
];

const configuration = {
  [BASIC_MODE]: [...BASIC_CONFIG],
  [SCIENTIFIC_MODE]: [...BASIC_CONFIG, ...scientificConfiguration],
};

const MODES = [
  {
    id: BASIC_MODE,
    display: "Basic Mode",
  },
  {
    id: SCIENTIFIC_MODE,
    display: "Scientific Mode",
  },
];

export { configuration, MODES };
