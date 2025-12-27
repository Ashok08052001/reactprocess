import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="bg-amber-400 flex justify-between items-center h-20">
        <div className="text-2xl p-20">Logo</div>
        <div>
          <Link to="/" className="p-4 font-bold text-white rounded-2xl">
            Home
          </Link>
          <Link to="/Aptitude" className="p-4 font-bold text-white rounded-2xl">
            Aptitude
          </Link>
          <Link
            to="/Communication"
            className="p-4 font-bold text-white rounded-2xl"
          >
            Communication
          </Link>
          <Link
            to="/Technical"
            className="p-4 font-bold text-white rounded-2xl"
          >
            Technical
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
