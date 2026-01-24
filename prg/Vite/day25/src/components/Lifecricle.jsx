import { useEffect, useState } from "react";

const Lifecycle = () => {
  const [tim, setTim] = useState(0);

  useEffect(() => {
    const timeshow = setInterval(() => {
      setTim((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timeshow);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-amber-400 via-pink-400 to-purple-500">
      <div className="bg-white shadow-xl rounded-xl p-8 text-center transform transition hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">⏱ Timer</h1>
        <p className="text-6xl font-extrabold text-amber-500 animate-pulse">
          {tim}
        </p>
        <p className="mt-4 text-gray-600">Counting seconds since mount...</p>
      </div>
    </div>
  );
};

export default Lifecycle;
