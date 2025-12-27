import React, { useState } from "react";

const ProfileCard = () => {
  const [profilecard, setProfilecard] = useState([]);

  const fetchProfiles = async () => {
    const cards = await fetch("/main.json"); // ensure main.json is in public/
    const data = await cards.json();
    setProfilecard(data.profileid);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
        🌟 Team Profiles
      </h1>

      <div className="flex justify-center mb-8">
        <button
          onClick={fetchProfiles}
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-indigo-100 transition-colors"
        >
          Load Profiles
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {profilecard.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src={user.image || `https://i.pravatar.cc/150?img=${user.id}`}
              alt={user.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-indigo-500"
            />

            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-indigo-600 font-medium">{user.role}</p>
            <p className="text-sm mt-1 text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.city}</p>

            <div className="mt-3">
              <strong className="block text-gray-700">Skills:</strong>
              <p className="text-sm text-gray-800 italic">
                {Array.isArray(user.skills)
                  ? user.skills.join(", ")
                  : "No skills listed"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
