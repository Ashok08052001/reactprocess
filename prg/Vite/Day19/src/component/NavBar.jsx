import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide hover:scale-105 transition-transform duration-300">
          MyPortfolio
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-white text-black shadow-md"
                  : "text-white hover:bg-black hover:text-white"
              }`
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-white text-black shadow-md"
                  : "text-white hover:bg-black hover:text-white"
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
