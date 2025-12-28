import { useState } from "react";

const ClassDemo = () => {
  const [showText, setShowText] = useState(false);
  const [isBox, setIsBox] = useState(true);

  return (
    <div className="space-y-8 p-8 bg-gradient-to-r from-indigo-100 via-pink-100 to-yellow-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <button
          onClick={() => setShowText(!showText)}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          {showText ? "Hide Text" : "Show Text"}
        </button>
        {showText && (
          <p className="mt-4 text-lg text-gray-800 font-medium animate-fadeIn">
            This is the class text with style!
          </p>
        )}
      </div>
      <div className="text-center">
        <button
          onClick={() => setIsBox(!isBox)}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          Toggle Shape
        </button>
        <div
          className={`mt-6 w-28 h-28 bg-gradient-to-r from-pink-400 to-purple-500 shadow-xl transition-all duration-500 transform hover:rotate-6 ${
            isBox ? "rounded-lg" : "rounded-full"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ClassDemo;
