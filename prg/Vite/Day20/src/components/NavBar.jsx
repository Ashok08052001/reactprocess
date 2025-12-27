import React from "react";
import logo from "../assets/Day20.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Day20 Logo"
            className="w-14 h-auto drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl font-bold tracking-wide">Day 20</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-amber-400 hover:underline transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-amber-400 hover:underline transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="hover:text-amber-400 hover:underline transition-colors duration-300"
          >
            ProfileCards
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
