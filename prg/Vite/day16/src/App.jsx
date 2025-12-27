const user = {
  name: "Ashok",
  age: 21,
  skills: ["HTML", "CSS", "React"],
};

console.log(user.name);
console.log(user.skills[2]);

const App = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  const handleNameChange = (e) => {
    console.log("Name changed:", e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with email:", e.target.email.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold mb-6">React Event Demo</h2>
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg mb-6 transition"
      >
        Click Me
      </button>

      <input
        type="text"
        name="username"
        placeholder="Type your name"
        onChange={handleNameChange}
        className="w-64 p-2 rounded bg-gray-800 border border-gray-700 mb-6"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-64"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
