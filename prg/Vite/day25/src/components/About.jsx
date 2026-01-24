import { useLocation, Link } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const datashow = location.state?.saba;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 text-white p-6">
      <p className="text-lg mb-4"> Hii, welcome to the About page!</p>

      <h1 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
        {datashow || "No data received"}
      </h1>

      <Link
        to="/"
        className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 hover:text-white transition-transform transform hover:scale-105"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default About;
