import { useEffect, useState } from "react";

const OddTimer = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setNum((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center w-80">
        <h1
          className={`text-4xl font-extrabold mb-4 ${
            num % 2 !== 0 ? "text-red-600" : "text-gray-800"
          }`}
        >
          {num}
        </h1>
        {num % 2 !== 0 && (
          <p className="text-red-600 font-semibold animate-pulse">
            It's an Odd Number 🔴
          </p>
        )}
      </div>
    </div>
  );
};

export default OddTimer;
