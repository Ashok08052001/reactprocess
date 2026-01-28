import { useRef } from "react";

export default function Day2() {
  const inputRef = useRef();
  const boxRef = useRef();
  const countRef = useRef(0);
  const videoRef = useRef();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 space-y-6">
        <h1 className="text-2xl font-extrabold text-center text-gray-800">
          DAY 2 – useRef
        </h1>

        {/* Input + Buttons */}
        <div className="space-y-3">
          <input
            ref={inputRef}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            placeholder="Type something..."
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => inputRef.current.focus()}
              className="px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition"
            >
              Focus
            </button>
            <button
              onClick={() => (inputRef.current.value = "")}
              className="px-4 py-2 bg-red-400 rounded-md hover:bg-red-500 transition"
            >
              Clear
            </button>
            <button
              onClick={() =>
                localStorage.setItem("text", inputRef.current.value)
              }
              className="px-4 py-2 bg-green-400 rounded-md hover:bg-green-500 transition"
            >
              Save
            </button>
          </div>
        </div>

        {/* Box + Controls */}
        <div
          ref={boxRef}
          className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md transition-all duration-300"
        >
          Box
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => boxRef.current.classList.toggle("bg-black")}
            className="px-4 py-2 bg-indigo-400 rounded-md hover:bg-indigo-500 transition"
          >
            Theme
          </button>
          <button
            onClick={() => (boxRef.current.style.fontSize = "24px")}
            className="px-4 py-2 bg-purple-400 rounded-md hover:bg-purple-500 transition"
          >
            Font +
          </button>
          <button
            onClick={() => boxRef.current.classList.toggle("hidden")}
            className="px-4 py-2 bg-pink-400 rounded-md hover:bg-pink-500 transition"
          >
            Show/Hide
          </button>
        </div>

        {/* Video + Control */}
        <div className="space-y-3">
          <video
            ref={videoRef}
            width="250"
            className="rounded-lg shadow-md"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />
          <button
            onClick={() =>
              videoRef.current.paused
                ? videoRef.current.play()
                : videoRef.current.pause()
            }
            className="px-4 py-2 bg-blue-400 rounded-md hover:bg-blue-500 transition"
          >
            Play/Pause
          </button>
        </div>

        {/* Counter */}
        <button
          onClick={() => {
            countRef.current++;
            alert(countRef.current);
          }}
          className="w-full px-4 py-3 bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold rounded-md hover:from-pink-500 hover:to-red-500 transition"
        >
          Count Click
        </button>
      </div>
    </div>
  );
}
