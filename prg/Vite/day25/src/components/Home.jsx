import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-white p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6 drop-shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolores
        autem veritatis.
      </h1>

      <Link
        to="/about"
        state={{ saba: "home from components" }}
        className="bg-white text-amber-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-amber-500 hover:text-white transition-transform transform hover:scale-105"
      >
        Go to About →
      </Link>
    </div>
  );
};

export default Home;
