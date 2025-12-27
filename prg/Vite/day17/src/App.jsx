import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import State from "./Components/State";

const App = () => {
  return (
    <>
      <nav className="flex gap-6 p-4 bg-gray-900 text-white">
        <Link className="hover:text-yellow-400" to="/">
          Home
        </Link>
        <Link className="hover:text-yellow-400" to="/about">
          About
        </Link>
        <Link className="hover:text-yellow-400" to="/state">
          State
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<State />} />
      </Routes>
    </>
  );
};

export default App;
