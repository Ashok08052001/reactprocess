import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products] = useState([1, 23, 4, 5, 6]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 to-pink-500 text-white flex items-center justify-center">
      <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Home</h1>
        <p className="mb-6 text-gray-700">Click below to view product data</p>
        <Link
          to="/Contact"
          state={{ data: products }}
          className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Move to Data
        </Link>
      </div>
    </div>
  );
};

export default Home;
