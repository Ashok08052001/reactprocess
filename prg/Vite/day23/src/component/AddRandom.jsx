import React, { useState } from "react";

const AddRandom = () => {
  const [number, setNumber] = useState([]);

  const addRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber([...number, random]);
  };

  const resetNumber = () => {
    setNumber([]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">🎲 Add Random</h1>

        <div className="space-x-3 mb-4">
          <button
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition duration-200"
            onClick={addRandomNumber}
          >
            ➕ Add Number
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-200"
            onClick={resetNumber}
          >
            🔄 Reset
          </button>
        </div>

        <ul className="space-y-2">
          {number.map((num, index) => (
            <li
              key={index}
              className="bg-gray-100 text-gray-800 py-1 rounded shadow-sm"
            >
              {num}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddRandom;
