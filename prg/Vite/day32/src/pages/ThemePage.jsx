import React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function ThemePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4">Theme Switcher</h1>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
