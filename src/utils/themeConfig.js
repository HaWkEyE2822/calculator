import { THEME_CONSTANTS } from "./globalConstants";

const BASE_THEME = {
  [THEME_CONSTANTS.LIGHT_THEME]: {
    backgroundColor: "#fff",
    color: "#000",
  },
  [THEME_CONSTANTS.DARK_THEME]: {
    backgroundColor: "#000",
    color: "#fff",
  },
};

const THEME_CONFIG = {
  [THEME_CONSTANTS.LIGHT_THEME]: {
    [THEME_CONSTANTS.BUTTON_THEME]: {
      backgroundColor: "#f0f0f0",
      color: "#000",
      border: "1px solid #000",
    },
    default: {
      ...BASE_THEME[THEME_CONSTANTS.LIGHT_THEME],
    },
  },
  [THEME_CONSTANTS.DARK_THEME]: {
    [THEME_CONSTANTS.BUTTON_THEME]: {
      backgroundColor: "#666",
      color: "#fff",
      // border: '1px solid #fff'
    },
    default: {
      ...BASE_THEME[THEME_CONSTANTS.DARK_THEME],
    },
  },
};

const THEMES = [
  {
    id: THEME_CONSTANTS.DARK_THEME,
    display: "Dark Theme",
  },
  {
    id: THEME_CONSTANTS.LIGHT_THEME,
    display: "Light Theme",
  },
];

export { THEME_CONFIG, THEMES };
