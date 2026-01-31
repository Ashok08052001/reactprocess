import React from "react";
import ToggleButton from "../components/ToggleButton";

export default function TogglePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-semibold">Toggle demo</h1>
        <ToggleButton />
      </div>
    </div>
  );
}
