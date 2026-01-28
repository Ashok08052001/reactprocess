const FormComponent = ({ input, handleChange, handleSubmit }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Welcome
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your information below
        </p>

        <div className="space-y-4">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter something..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
