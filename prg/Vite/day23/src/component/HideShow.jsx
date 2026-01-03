import React, { useState } from "react";

const HideShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Toggle Component
        </h1>

        <button
          onClick={toggleDetails}
          className={`px-6 py-2 rounded-full font-medium transition duration-200 ${
            isVisible
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isVisible ? "Hide Details" : "Show Details"}
        </button>

        <div className="mt-6">
          {isVisible && (
            <p className="text-gray-700 transition-opacity duration-500 ease-in-out opacity-100">
              These are the details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HideShow;
