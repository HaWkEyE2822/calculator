import React, { useContext } from "react";
import ThemeContext from "./Theme";
import Button from "../atoms/Button";
import { THEMES } from "../utils/themeConfig";

const ThemeSwitcher = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="header">Choose Theme</div>
      {THEMES.map((theme) => (
        <Button
          key={theme.id}
          text={theme.display}
          onClick={() => changeTheme(theme.id)}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
