import React from "react";
import EvenTimer from "./components/EvenTimer";
import FetchRecipes from "./components/FetchRecipes";
import OddTimer from "./components/OddTimer";
import ResetTimer from "./components/ResetTimer";

const App = () => {
  return (
    <>
      <EvenTimer />
      <FetchRecipes />
      <OddTimer />
      <ResetTimer />
    </>
  );
};

export default App;
