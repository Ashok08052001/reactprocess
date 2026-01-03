import { useEffect, useState } from "react";

const ResetTimer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => (prev === 50 ? 10 : prev + 1));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const resetManually = () => {
    setTime(10);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center w-80">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Reset Timer: {time}
        </h1>
        <button
          onClick={resetManually}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200"
        >
          🔄 Reset Now
        </button>
      </div>
    </div>
  );
};

export default ResetTimer;
