import Banking from "../components/government/Banking";
import Education from "../components/government/Education";
import Forest from "../components/government/Forest";
import Police from "../components/government/Police";
import President from "../components/government/President";
import Money from "../components/Money";
import VisitengPlace from "../components/VisitengPlace";

const Plannet = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        🌍 My Planet Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Money />
        <VisitengPlace />
        <Banking />
        <Education />
        <Police />
        <President />
        <Forest />
      </div>
    </div>
  );
};

export default Plannet;
