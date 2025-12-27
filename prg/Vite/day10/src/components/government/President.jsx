import React from "react";

const President = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-3">President</h2>
      <p className="text-gray-600 mb-4">
        The President leads the planet focusing on unity, forest protection and
        education reforms.
      </p>

      <ul className="space-y-2 text-gray-700">
        <li>• Name: Asha Venn</li>
        <li>• Term Start: Jan 2024</li>
        <li>• Vision: Green Economy & Safe Planet</li>
        <li>• Latest Message: “Plant 1 Billion Trees by 2027.”</li>
      </ul>
    </div>
  );
};

export default President;
