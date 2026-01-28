import { useState } from "react";

const Button = ({ text, onClick, color = "indigo" }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-md text-white bg-${color}-500 hover:bg-${color}-600 transition`}
  >
    {text}
  </button>
);

const Day4 = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { text, done: false }]);
    setText("");
  };

  const toggleDone = (index) => {
    const copy = [...todos];
    copy[index].done = !copy[index].done;
    setTodos(copy);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6">
        <h1 className="text-2xl font-extrabold text-center text-gray-800">
          DAY 4 – Components (Arrow Only)
        </h1>

        {/* Input + Add Button */}
        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border p-2 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
            placeholder="Enter todo..."
          />
          <Button text="Add" onClick={addTodo} color="green" />
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm"
            >
              <span
                className={`flex-1 ${
                  t.done ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {t.text}
              </span>
              <div className="flex gap-2">
                <Button
                  text="Done"
                  onClick={() => toggleDone(i)}
                  color="blue"
                />
                <Button
                  text="Delete"
                  onClick={() => deleteTodo(i)}
                  color="red"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Day4;
