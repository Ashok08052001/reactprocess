import { createContext, useState } from "react";

export const AppSettingsContext = createContext();

export const AppSettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState(16);

  return (
    <AppSettingsContext.Provider
      value={{ theme, setTheme, fontSize, setFontSize }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
};
