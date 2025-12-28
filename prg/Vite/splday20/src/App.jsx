import React from "react";
import ToggleText from "./components/ToggleText ";
import ToggleShape from "./components/ToggleShape";
import ClassDemo from "./components/ClassDemo ";

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <ToggleText />
      <ToggleShape />
      <ClassDemo />
    </div>
    </>
  );
};

export default App;
