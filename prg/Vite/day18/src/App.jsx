import React from "react";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import AptitudePages from "./pages/AptitudePages.jsx";
import CommunicationPage from "./pages/CommunicationPage.jsx";
import TechnicalPage from "./pages/TechnicalPage.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aptitude" element={<AptitudePages />} />
        <Route path="/communication" element={<CommunicationPage />} />
        <Route path="/technical" element={<TechnicalPage />} />
      </Routes>
      <footer className="bg-gray-900 text-gray-300 py-6 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-white">MyWebsite</div>
          <div className="flex gap-6">
            <a href="/" className="hover:text-green-400 transition">
              Home
            </a>
            <a href="/aptitude" className="hover:text-green-400 transition">
              Aptitude
            </a>
            <a
              href="/communication"
              className="hover:text-green-400 transition"
            >
              Communication
            </a>
            <a href="/technical" className="hover:text-green-400 transition">
              Technical
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default App;
