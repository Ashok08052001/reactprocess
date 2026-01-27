import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const titleRef = useRef();
  const boxRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const navigate = useNavigate();

  const changeTitle = () => {
    titleRef.current.innerText = "Button Clicked Title";
  };

  const toggleBox = () => {
    boxRef.current.classList.toggle("hidden");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/about", {
      state: { name: nameRef.current.value, email: emailRef.current.value },
    });
  };

  return (
    <div className="p-6 space-y-4">
      <h1 ref={titleRef} className="text-2xl font-bold">
        Welcome to Home Page
      </h1>
      <button
        onClick={changeTitle}
        className="bg-blue-700 text-white px-4 py-2 rounded"
      >
        Change Title
      </button>
      <button
        onClick={toggleBox}
        className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
      >
        Hide/Show
      </button>

      <div ref={boxRef} className="bg-gray-200 p-4 rounded">
        {" "}
        This is toggle box{" "}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          className="border p-2 w-full"
        />

        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-amber-400 text-white px-4 py-2 rounded"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
