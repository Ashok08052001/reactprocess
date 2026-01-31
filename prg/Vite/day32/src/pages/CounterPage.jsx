import React from "react";
import Counter from "../components/Counter";

export default function CounterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">
            Counter A — initial: 0, step: 1
          </h2>
          <Counter initial={0} step={1} />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">
            Counter B — initial: 10, step: 5
          </h2>
          <Counter initial={10} step={5} />
        </div>
      </div>
    </div>
  );
}
