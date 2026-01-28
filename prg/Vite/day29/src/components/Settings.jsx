import { useContext } from "react";
import { AppSettingsContext } from "../context/AppSettingsContext";

const Settings = () => {
  const { theme, setTheme, fontSize, setFontSize } =
    useContext(AppSettingsContext);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Settings</h2>

      {/* Theme Toggle */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
        <span className="text-gray-700 font-medium">Theme</span>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>

      {/* Font Size Control */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
        <span className="text-gray-700 font-medium">Font Size</span>
        <button
          onClick={() => setFontSize(fontSize + 2)}
          className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
        >   
          Increase (+2)
        </button>
      </div>

      {/* Preview */}
      <div
        className={`p-4 rounded-md shadow-inner transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-50 text-gray-800"
        }`}
        style={{ fontSize: `${fontSize}px` }}
      >
        <p className="text-center">Preview Text</p>
      </div>
    </div>
  );
};

export default Settings;
