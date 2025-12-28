import { useState } from "react";

const ToggleText = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {show ? "Hide Text" : "Show Text"}
      </button>

      {show && <p className="mt-2 text-gray-700">Hello, this is the text!</p>}
    </div>
  );
};

export default ToggleText;
