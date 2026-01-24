import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Fetch from "./components/Fetch";
import Time from "./components/Time";
import Lifecycle from "./components/Lifecricle";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Home />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Fetch />
        <Time />
        <Lifecycle />
      </div>
    </BrowserRouter>
  );
};
export default App;
