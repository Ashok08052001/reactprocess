import React from "react";
import avatarImg from "../assets/Image/image1.avif";

const UseProfile = () => {
  const user = {
    name: "Ashok Kumar",
    email: "rjashok01@gmail.com",
    bio: "Frontend Developer & UI/UX Designer passionate about building polished, scalable projects.",
    avatar: avatarImg,
    github: "https://github.com/Ashok08052001",
    linkedin: "https://linkedin.com/in/ashok",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center transform transition duration-300 hover:scale-105">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-md"
        />
        <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="mt-4 text-gray-700">{user.bio}</p>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            🐙 GitHub
          </a>
          <a
            href={user.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            🔗 LinkedIn
          </a>
        </div>

        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition duration-200">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UseProfile;
