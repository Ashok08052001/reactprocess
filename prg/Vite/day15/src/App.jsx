import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer>
        <div className="bg-black text-red-50 text-center mt-100 b-0  h-15 items-center p-4 ">
          Building modern web experiences with React & TailwindCSS@2026
        </div>
      </footer>
    </>
  );
};

export default App;
