import { useState } from "react";
import Technical from "../components/Technical";

const TechnicalPage = () => {
  const [Tech] = useState([
    {
      ID: 1001,
      NAME: "Sathish",
      COURSE: "MERN",
      STACK: "Frontend",
      TASK: "Build Login Page",
    },
    {
      ID: 1002,
      NAME: "Sanjay",
      COURSE: "Java",
      STACK: "Backend",
      TASK: "API Integration",
    },
    {
      ID: 1003,
      NAME: "Bala",
      COURSE: "Python",
      STACK: "Full Stack",
      TASK: "CRUD Application",
    },
  ]);

  return (
    <div className="bg-green-100 flex items-center justify-center p-6">
      <Technical value={Tech} />
    </div>
  );
};

export default TechnicalPage;
