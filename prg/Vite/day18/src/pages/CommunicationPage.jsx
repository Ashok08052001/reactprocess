import { useState } from "react";
import Communication from "../components/Communication";

const CommunicationPage = () => {
  const [Comm] = useState([
    "Verbal Communication",
    "Non-Verbal Communication",
    "Body Language",
    "Group Discussion (GD)",
    "Self Introduction",
    "Project Explanation",
  ]);

  return (
    <div className=" bg-green-100 h-150 flex items-center justify-center p-4">
      <Communication value_1={Comm} />
    </div>
  );
};

export default CommunicationPage;
