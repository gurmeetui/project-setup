import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null as any);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem("fontSize") || "medium";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-font-size",
      fontSize
    );

    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const changeTheme = (themeName: string) => {
    setTheme(themeName);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        changeTheme,

        fontSize,
        setFontSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};