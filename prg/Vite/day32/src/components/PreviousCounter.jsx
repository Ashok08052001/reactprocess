import React, { useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function PreviousCounter() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);

  return (
    <div className="p-6 bg-white rounded shadow max-w-sm mx-auto">
      <div className="text-center mb-4">
        <div className="text-lg">
          Current: <strong>{count}</strong>
        </div>
        <div className="text-gray-600">
          Previous: <strong>{prev ?? "—"}</strong>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          +
        </button>
      </div>
    </div>
  );
}
