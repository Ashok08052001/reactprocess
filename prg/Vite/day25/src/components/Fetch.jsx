import { useEffect, useState } from "react";

const Fetch = () => {
  const [user, setUser] = useState([]);

  const productFetch = async () => {
    const rest = await fetch("https://dummyjson.com/products");
    const datachange = await rest.json();
    setUser(datachange.products);
  };

  const handlechange = (id) => {
    const data = user.find((e) => e.id === id);
    alert(`${data.title}, $${data.price}`);
  };

  useEffect(() => {
    productFetch();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        🛒 Product Showcase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {user.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-full h-40 object-cover"
              src={e.images[0]}
              alt={e.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {e.title}
              </h2>
              <p className="text-gray-600">ID: {e.id}</p>
              <p className="text-xl font-bold text-amber-600">${e.price}</p>
              <button
                className="mt-3 w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition"
                onClick={() => handlechange(e.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
