import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [tim, setTim] = useState(0);

  useEffect(() => {
    const timeshow = setInterval(() => {
      setTim((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timeshow); // cleanup
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600">
      <div className="bg-white shadow-xl rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">⏱ Timer</h1>
        <p className="text-6xl font-extrabold text-amber-500 animate-pulse">
          {tim}s
        </p>
      </div>
    </div>
  );
};

export default LifeCycle;
