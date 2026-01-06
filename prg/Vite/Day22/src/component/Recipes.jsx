import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

    const showRecipes = async () => {
      const recipessdata = await fetch("https://dummyjson.com/recipes");
      const datas = await recipessdata.json();
      setRecipes(datas.recipes);
    };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-gradient-x p-10">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg text-center mb-8">
        🍴 Delicious Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-white/10 p-6 rounded-xl">
        {recipes.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={e.image}
              alt={e.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {e.name}
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                {e.ingredients.slice(0, 4).join(", ")}...
              </p>
              <p className="text-gray-500 text-sm mb-2">
                Prep: {e.prepTimeMinutes} mins | Cook: {e.cookTimeMinutes} mins
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Servings: {e.servings} | Calories: {e.caloriesPerServing} kcal
              </p>
              <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-lg hover:opacity-90 transition">
                Cook Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={showRecipes}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Show Recipes
        </button>
      </div>
    </div>
  );
};

export default Recipes;
