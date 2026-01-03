import { useEffect, useState } from "react";

const FetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/recipes.json");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data.recipes || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          🍲 Delicious Recipes
        </h1>

        {loading && (
          <p className="text-center text-gray-600">Loading recipes...</p>
        )}
        {error && <p className="text-center text-red-600">Error: {error}</p>}
        {!loading && !error && recipes.length === 0 && (
          <p className="text-center text-gray-600">No recipes found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105 bg-gray-50"
            >
              <img
                src={item.image}
                alt={`Recipe for ${item.name}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600">{item.cuisine}</p>
                <button className="mt-3 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition duration-200">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchRecipes;
