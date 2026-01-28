import { useContext } from "react";
import { AppSettingsContext } from "../context/AppSettingsContext";

const Content = () => {
  const { theme, fontSize } = useContext(AppSettingsContext);

  const isLight = theme === "light";

  return (
    <div
      className={`mt-6 p-6 rounded-xl shadow-lg transition-all duration-300 ${
        isLight ? "bg-red-200 text-black" : "bg-yellow-200 text-gray-700"
      }`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <h1 className="text-2xl font-bold mb-4">App Content</h1>
      <p className="mb-2">
        <span className="font-semibold">Theme:</span> {theme}
      </p>
      <p>
        <span className="font-semibold">Font Size:</span> {fontSize}px
      </p>
    </div>
  );
};

export default Content;
