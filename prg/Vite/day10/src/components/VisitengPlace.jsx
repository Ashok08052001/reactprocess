const VisitengPlace = () => {
  return (
    <>
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-3">Visiting Places</h2>
        <p className="text-gray-600 mb-4">
          Explore waterfalls, floating markets, observatories and deep forests.
        </p>

        <div className="space-y-3">
          <div className="p-4 bg-gray-100 rounded-xl">
            <h3 className="font-semibold">Lumina Falls</h3>
            <p className="text-gray-600">
              Glow waterfalls at dusk. Easy trail.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl">
            <h3 className="font-semibold">AeroMarket</h3>
            <p className="text-gray-600">
              Floating market city. Open 8AM–10PM.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default VisitengPlace;
