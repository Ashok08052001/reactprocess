import { useEffect, useState } from "react";

const Time = () => {
  const [timeon, setTimeon] = useState(1);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (stop) return;
    const settime = setInterval(() => {
      setTimeon((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(settime);
  }, [stop]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 text-center transform transition hover:scale-105">
        <h1 className="text-4xl font-bold mb-4">⏳ Timer</h1>
        <p className="text-6xl font-extrabold text-indigo-600 animate-pulse mb-6">
          {timeon}
        </p>
        <button
          onClick={() => setStop(true)}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            stop
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105"
          }`}
          disabled={stop}
        >
          {stop ? "Stopped" : "Stop Timer"}
        </button>
      </div>
    </div>
  );
};

export default Time;
