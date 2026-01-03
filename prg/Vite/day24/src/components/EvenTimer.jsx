import { useEffect, useState } from "react";

const EvenTimer = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setNum((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center w-80">
        <h1
          className={`text-4xl font-extrabold mb-4 ${
            num % 2 === 0 ? "text-green-600" : "text-gray-800"
          }`}
        >
          {num}
        </h1>
        {num % 2 === 0 && (
          <p className="text-green-600 font-semibold animate-pulse">
            It's an Even Number 🎉
          </p>
        )}
      </div>
    </div>
  );
};

export default EvenTimer;
