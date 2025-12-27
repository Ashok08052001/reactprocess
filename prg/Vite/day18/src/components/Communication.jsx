const Communication = ({ value_1 }) => {
  return (
    <div className="bg-emerald-100 p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
        Communication Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {value_1.map((item, i) => (
          <div
            key={i}
            className="bg-white border-l-4 border-emerald-500 p-4 rounded-lg shadow"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {i + 1}.{item}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communication;
