import { useState } from "react";

export default function Day1() {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState(false);
  const [like, setLike] = useState(false);
  const [bg, setBg] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");
  const [profile, setProfile] = useState({ name: "Vel", age: 22 });
  const [items, setItems] = useState(["Apple"]);

  const users = [
    { id: 1, name: "Arun", role: "Developer" },
    { id: 2, name: "Kumar", role: "Designer" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">
            DAY 1 – useState
          </h1>
          <p className="text-purple-200">React State Management Fundamentals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Counter */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 hover:bg-opacity-20 transition">
            <h2 className="text-2xl font-bold text-white mb-4">Counter</h2>
            <div className="bg-white bg-opacity-5 rounded-lg p-6 mb-4">
              <p className="text-6xl font-bold text-blue-400 text-center">
                {count}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setCount(count + 1)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
              >
                +
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
              >
                -
              </button>
              <button
                onClick={() => setCount(0)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
              >
                Reset
              </button>
            </div>
          </div>

          {/* 2. Users List */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 hover:bg-opacity-20 transition">
            <h2 className="text-2xl font-bold text-white mb-4">Users List</h2>
            <div className="space-y-2">
              {users.map((u) => (
                <div
                  key={u.id}
                  className="bg-white bg-opacity-10 rounded-lg p-4 hover:bg-opacity-20 transition"
                >
                  <p className="text-white font-semibold">{u.name}</p>
                  <p className="text-purple-200 text-sm">{u.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Login */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 hover:bg-opacity-20 transition">
            <h2 className="text-2xl font-bold text-white mb-4">
              Authentication
            </h2>
            <div className="bg-white bg-opacity-5 rounded-lg p-6 mb-4 text-center">
              <p className="text-4xl mb-2">{login ? "Yes" : "No"}</p>
              <p className="text-white font-bold text-xl">
                {login ? "Logged In" : "Logged Out"}
              </p>
              <p className="text-purple-200 text-sm mt-2">
                Role:{" "}
                <span className="font-semibold">
                  {login ? "Admin" : "User"}
                </span>
              </p>
            </div>
            <button
              onClick={() => setLogin(!login)}
              className={`w-full font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 text-white ${
                login
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {login ? "Logout" : "Login"}
            </button>
          </div>

          {/* 4. Like Button */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 hover:bg-opacity-20 transition">
            <h2 className="text-2xl font-bold text-white mb-4">Like Button</h2>
            <div className="bg-white bg-opacity-5 rounded-lg p-6 mb-4 text-center">
              <p className="text-6xl mb-2">{like ? "Like u" : "Unlike u"}</p>
              <p className="text-white font-bold">
                {like ? "Liked!" : "Not Liked"}
              </p>
            </div>
            <button
              onClick={() => setLike(!like)}
              className={`w-full font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 text-white ${
                like
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}
            >
              {like ? "Unlike" : "Like"}
            </button>
          </div>

          {/* 5. Background Color */}
          <div
            className={`rounded-lg p-6 backdrop-blur-md border border-white border-opacity-20 transition-all ${
              bg
                ? "bg-yellow-400 bg-opacity-80"
                : "bg-white bg-opacity-10 hover:bg-opacity-20"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${bg ? "text-gray-800" : "text-white"}`}
            >
              Change Background
            </h2>
            <div
              className={`rounded-lg p-6 mb-4 text-center ${bg ? "bg-white bg-opacity-20" : "bg-white bg-opacity-5"}`}
            >
              <p
                className={`text-lg font-semibold ${bg ? "text-gray-800" : "text-white"}`}
              >
                {bg ? "Background Changed!" : "Default Background"}
              </p>
            </div>
            <button
              onClick={() => setBg(!bg)}
              className={`w-full font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 ${
                bg
                  ? "bg-gray-800 hover:bg-gray-900 text-white"
                  : "bg-indigo-500 hover:bg-indigo-600 text-white"
              }`}
            >
              {bg ? "Revert" : "Change Color"}
            </button>
          </div>

          {/* 6. Profile */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 hover:bg-opacity-20 transition">
            <h2 className="text-2xl font-bold text-white mb-4"> Profile</h2>
            <div className="bg-white bg-opacity-5 rounded-lg p-6 mb-4">
              <p className="text-white text-sm text-gray-300">N</p>
              <p className="text-white font-bold text-2xl mb-3">
                {profile.name}
              </p>
              <p className="text-white text-sm text-gray-300">Age</p>
              <p className="text-blue-400 font-bold text-3xl">{profile.age}</p>
            </div>
            <button
              onClick={() => setProfile({ ...profile, age: profile.age + 1 })}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105"
            >
              Increase Age
            </button>
          </div>
          {/* 7. Items Manager */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 hover:bg-opacity-20 transition">
            <h2 className="text-2xl font-bold text-white mb-4">
              Items Manager
            </h2>
            <div className="bg-white bg-opacity-5 rounded-lg p-4 mb-4">
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-white bg-white bg-opacity-10 p-2 rounded flex items-center gap-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setItems([...items, "Orange"])}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
              >
                + Add
              </button>
              <button
                onClick={() => setItems([...items, "Apple"])}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
              >
                Add Apple
              </button>
              <button
                onClick={() => setItems(items.slice(0, -1))}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
              >
                - Remove Last
              </button>
            </div>
          </div>

          {/* 8. Disable Button */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 hover:bg-opacity-20 transition">
            <h2 className="text-2xl font-bold text-white mb-4">
              Disable Button
            </h2>
            <div className="bg-white bg-opacity-5 rounded-lg p-6 mb-4 text-center">
              {/* <p className="text-4xl mb-2">{disabled ? "🔒" : "🔓"}</p> */}
              <p
                className={`font-bold text-lg ${disabled ? "text-red-400" : "text-green-400"}`}
              >
                {disabled ? "Disabled" : "Enabled"}
              </p>
            </div>
            <button
              disabled={disabled}
              onClick={() => setDisabled(true)}
              className={`w-full font-bold py-3 px-4 rounded-lg transition transform ${
                disabled
                  ? "bg-gray-600 cursor-not-allowed text-gray-300"
                  : "bg-orange-500 hover:bg-orange-600 text-white hover:scale-105"
              }`}
            >
              {disabled ? "Disabled" : "Disable Me"}
            </button>
          </div>

          {/* 9. Form Input */}
          <div className="md:col-span-2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6 hover:bg-opacity-20 transition">
            <h2 className="text-2xl font-bold text-white mb-4">Form Input</h2>
            <div className="bg-white bg-opacity-5 rounded-lg p-6">
              <label className="block text-white font-semibold mb-2">
                Enter Your Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name..."
                className="w-full px-4 py-3 border-2 border-white border-opacity-30 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
              />
              {name && (
                <div className="mt-4 p-4 bg-green-500 bg-opacity-20 border border-green-400 rounded-lg">
                  <p className="text-green-400 font-semibold">Hello, {name}!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
