import { useState } from "react";
import Aptitude from "../components/Aptitude";

const AptitudePage = () => {
  const [aapi] = useState([
    {
      Q1: "DOG, CAT, WOLF, RAT",
      A: "DOG",
      B: "CAT",
      C: "RAT",
      D: "WOLF",
    },
    {
      Q1: "FISH, OCTOPUS, CRAB, EAGLE",
      A: "EAGLE",
      B: "CRAB",
      C: "OCTOPUS",
      D: "FISH",
    },
    {
      Q1: "A is 20 m south of B. B is 10 m east of C. If I is 5 m east of C, what is the distance between I and G?",
      A: "20 m",
      B: "25 m",
      C: "30 m",
      D: "35 m",
    },
    {
      Q1: "Uday moves 3 km south, right 2 km, left 5 km, right 3 km, right 8 km. Shortest distance & direction to A?",
      A: "√13 km, North-West",
      B: "√10 km, North-East",
      C: "13 km, West",
      D: "√17 km, South-East",
    },
  ]);

  return <Aptitude values={aapi} />;
};

export default AptitudePage;
