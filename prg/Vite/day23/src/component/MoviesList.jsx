import React, { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Dragon", watched: false },
    { id: 2, title: "Jailer", watched: false },
    { id: 3, title: "Master", watched: false },
  ]);

  const toggleWatched = (id) => {
    setMovies(
      movies.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m))
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">🎬 Movie List</h1>

        <ul className="space-y-4">
          {movies.map((m) => (
            <li
              key={m.id}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow-sm"
            >
              <span className="font-medium text-gray-800">{m.title}</span>
              <div className="flex gap-2 items-center">
                {m.watched && (
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                    Watched
                  </span>
                )}
                <button
                  className={`px-3 py-1 rounded transition duration-200 ${
                    m.watched
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                  onClick={() => toggleWatched(m.id)}
                >
                  {m.watched ? "Unmark" : "Mark"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
