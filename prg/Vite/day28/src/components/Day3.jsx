import { useEffect, useRef, useState } from "react";

export default function Day3() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    console.log("Mounted");
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setData(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 space-y-6">
        <h1 className="text-2xl font-extrabold text-center text-gray-800">
          DAY 3 – useEffect
        </h1>

        {/* Counter */}
        <button
          onClick={() => setCount(count + 1)}
          className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Count: {count}
        </button>

        {/* Input */}
        <input
          ref={inputRef}
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="Type something..."
        />

        {/* User List */}
        <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
          <h2 className="text-lg font-bold text-gray-700 mb-2">
            Fetched Users
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            {data.map((user) => (
              <li key={user.id} className="hover:text-indigo-600 transition">
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
