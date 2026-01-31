import React from "react";
import PreviousCounter from "../components/PreviousCounter";

export default function PreviousPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Previous value demo
        </h1>
        <PreviousCounter />
      </div>
    </div>
  );
}
