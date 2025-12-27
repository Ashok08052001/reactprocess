import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ashok");

  const [skills, setSkills] = useState(["HTML", "CSS", "React"]);
  const [user, setUser] = useState({ age: 21, city: "Chennai" });

  return (
    <div className="p-10 space-y-8">
      <h2 className="text-2xl font-bold text-purple-600">Primitive State</h2>

      <div className="space-y-3">
        <p className="text-lg">Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Increase
        </button>

        <p className="text-lg">Name: {name}</p>
        <button
          onClick={() => setName("ASHOK BCA")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Change Name
        </button>
      </div>

      <hr className="border-gray-300" />

      <h2 className="text-2xl font-bold text-orange-600">
        Non‑Primitive State
      </h2>

      <div>
        <h3 className="text-xl font-semibold">Skills (Array):</h3>
        <ul className="list-disc ml-6">
          {skills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <button
          onClick={() => setSkills([...skills, "Node.js"])}
          className="mt-3 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Add Skill
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold">User (Object):</h3>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>

        <button
          onClick={() => setUser({ ...user, city: "Bengaluru" })}
          className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Change City
        </button>
      </div>
    </div>
  );
};
export default State;