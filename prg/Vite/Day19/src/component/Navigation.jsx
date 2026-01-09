import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault(); // prevent form reload
    navigate("/About");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500">
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

        <input
          type="text"
          placeholder="Write something..."
          className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <button
          type="button"
          onClick={login}
          className="w-full bg-amber-500 text-black font-semibold rounded-lg py-2 hover:bg-amber-600 transition duration-300"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Navigation;
