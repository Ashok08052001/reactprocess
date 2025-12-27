const Technical = ({ value }) => {
  return (
    <div className="bg-slate-100 p-6 rounded-xl ">
      <h1 className="text-2xl font-bold text-indigo-700 text-center mb-6">
        Technical Team
      </h1>
      <div className="grid grid-cols-1  gap-10">
        {value.map((e) => (
          <div
            key={e.ID}
            className="bg-white p-4 rounded-lg shadow border-l-4 border-indigo-500"
          >
            <h2 className="text-lg font-semibold text-gray-800">ID:{e.ID} </h2>
            <h3 className="text-gray-700">Name:{e.NAME}</h3>
            <h3 className="text-gray-600">Course:{e.COURSE}</h3>
            <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
              {e.STACK}
            </span>
            <p className=" text-sm text-gray-600">Task:{e.TASK}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technical;
