import React from "react";
import AddRandom from "./component/AddRandom.jsx";
import Counter from "./component/Counter.jsx";
import GreetingSwitcher from "./component/GreetingSwitcher.jsx";
import HideShow from "./component/HideShow.jsx";
import MovieList from "./component/MoviesList.jsx";
import UseProfile from "./component/UseProfile.jsx";

const App = () => {
  return (
    <>
      <AddRandom />
      <Counter />
      <GreetingSwitcher />
      <HideShow />
      <MovieList/>
      <UseProfile/>
    </>
  );
};

export default App;
