import React from "react";
import useInput from "../hooks/useInput";

export default function LoginForm() {
  const email = useInput("");
  const password = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Email: ${email.value}\nPassword: ${password.value}`);
    email.reset();
    password.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      <label className="block mb-4">
        <span className="text-sm font-medium">Email</span>
        <input
          type="email"
          value={email.value}
          onChange={email.onChange}
          required
          className="mt-1 block w-full px-3 py-2 border rounded"
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm font-medium">Password</span>
        <input
          type="password"
          value={password.value}
          onChange={password.onChange}
          required
          className="mt-1 block w-full px-3 py-2 border rounded"
        />
      </label>

      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={() => {
            email.reset();
            password.reset();
          }}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Reset
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Login
        </button>
      </div>
    </form>
  );
}
