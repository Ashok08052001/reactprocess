import React, { useState } from "react";

const GreetingSwitcher = () => {
  const [message, setMessage] = useState("Welcome");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          🎉 Greeting Switcher
        </h1>

        <p className="text-xl font-semibold text-gray-700 mb-6">{message}</p>

        <div className="flex flex-col gap-3">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200"
            onClick={() => setMessage("Welcome")}
          >
            Welcome
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-200"
            onClick={() => setMessage("Good Morning")}
          >
            Good Morning
          </button>

          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition duration-200"
            onClick={() => setMessage("Good Night")}
          >
            Good Night
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreetingSwitcher;
