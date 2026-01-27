import { useLocation } from "react-router-dom";

function About() {
  const { state } = useLocation();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">About Page</h1>

      {state && (
        <div className="bg-gray-100 p-4 rounded">
          <p>Name:{state.name}</p>
          <p>Email:{state.email}</p>
        </div>
      )}
    </div>
  );
}

export default About;
