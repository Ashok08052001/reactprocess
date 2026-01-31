import React, { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="p-4 flex items-center gap-3">
      <button
        onClick={toggle}
        className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        aria-pressed={theme === "dark"}
      >
        Toggle Theme
      </button>
      <div>
        Theme: <strong>{theme}</strong>
      </div>
    </div>
  );
}
