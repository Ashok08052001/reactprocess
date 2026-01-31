import React from "react";
import useCounter from "../hooks/useCounter";

export default function Counter({ initial = 0, step = 1 }) {
  const { count, increment, decrement, reset } = useCounter(initial, step);

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <div className="text-3xl font-mono mb-4 text-center">{count}</div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          aria-label="decrement"
        >
          -
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          aria-label="reset"
        >
          Reset
        </button>

        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          aria-label="increment"
        >
          +
        </button>
      </div>
    </div>
  );
}
