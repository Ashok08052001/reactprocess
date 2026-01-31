import React from "react";
import useToggle from "../hooks/useToggle";

export default function ToggleButton() {
  const [on, toggle] = useToggle(false);

  return (
    <button
      onClick={toggle}
      className={`px-5 py-3 rounded-md text-white transition-colors duration-150 ${
        on ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"
      }`}
      aria-pressed={on}
    >
      {on ? "ON" : "OFF"}
    </button>
  );
}
