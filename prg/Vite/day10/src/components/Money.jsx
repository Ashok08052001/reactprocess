const Money = () => {
  return (
    <>
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-3">
          Planetary Currency & Economy
        </h2>
        <p className="text-gray-600 mb-4">
          The official currency is the <b>Solari (S)</b>. The economy is stable
          and supported by eco-tourism, technology, and forest products.
        </p>

        <ul className="space-y-2 text-gray-700">
          <li>• Currency: Solari (S)</li>
          <li>• Exchange Rate: 1 S = 0.72 USD</li>
          <li>• GDP: 123.4B S</li>
          <li>• Main Industries: Eco-Tourism, Tech, Sustainable Energy</li>
        </ul>
      </div>
    </>
  );
};
export default Money;
