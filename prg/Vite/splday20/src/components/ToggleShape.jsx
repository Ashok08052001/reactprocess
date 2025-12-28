import { useState } from "react";

const ToggleShape = () => {
  const [isBox, setIsBox] = useState(true);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsBox(!isBox)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Toggle Shape
      </button>

      <div
        className={`mt-4 w-24 h-24 bg-purple-400 transition-all duration-300 ${
          isBox ? "" : "rounded-full"
        }`}
      ></div>
    </div>
  );
};

export default ToggleShape;
