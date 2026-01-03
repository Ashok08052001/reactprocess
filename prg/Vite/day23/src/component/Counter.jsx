import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-96 text-center">
        <h1 className="text-xl font-bold mb-4">
          NUMBER INCREMENT AND DECREMENT
        </h1>

        <p className="text-3xl font-extrabold mb-6">Counter: {counter}</p>

        <div className="flex justify-center gap-4">
          <button
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition duration-200"
            onClick={increment}
          >
            ➕ Increment
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition duration-200"
            onClick={decrement}
          >
            ➖ Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
