import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Branding */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">Day 20 Project</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-400 transition-colors">
            About
          </Link>
          <Link
            to="/profile"
            className="hover:text-amber-400 transition-colors"
          >
            Profile
          </Link>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
