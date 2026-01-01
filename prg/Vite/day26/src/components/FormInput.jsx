import React, { useState } from "react";

const FormInput = () => {
  const [user, setUser] = useState("");

  const handle = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-500 via-pink-500 to-purple-600">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          ✍️ Enter a Word
        </h2>

        <input
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4"
          type="text"
          onChange={handle}
          placeholder="Type something..."
        />

        <div className="text-lg font-semibold text-gray-700">
          You typed:{" "}
          <span className="text-pink-600 font-bold animate-pulse">{user}</span>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
