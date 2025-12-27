const Aptitude = ({ values }) => {
  return (
    <div className=" bg-slate-100 p-6 h-150">
      <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">
        APTITUDE
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {values.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-5 border border-slate-200"
          >
            <h2 className="font-semibold text-slate-700 mb-4">
              Q{i + 1}.{e.Q1}
            </h2>
            <div className="space-y-2 text-slate-600">
              <p>A.{e.A}</p>
              <p>B.{e.B}</p>
              <p>C.{e.C}</p>
              <p>D.{e.D}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aptitude;
