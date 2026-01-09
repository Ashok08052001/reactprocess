import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const datashow = location.state?.data || [];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Data</h2>

        {datashow.length > 0 ? (
          <ul className="space-y-3">
            {datashow.map((item, index) => (
              <li
                key={index}
                className="bg-amber-100 text-gray-800 rounded-lg py-2 px-4 shadow hover:bg-amber-200 transition duration-300"
              >
                <span className="font-semibold">Item {index + 1}:</span> {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No data available</p>
        )}
      </div>
    </div>
  );
};

export default About;
