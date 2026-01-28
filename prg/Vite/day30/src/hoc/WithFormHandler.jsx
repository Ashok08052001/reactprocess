import { useState } from "react";

const withFormHandler = (Component) => {
  return function WithForm(props) {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
      setInput(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(input);
      setInput("");
    };

    return (
      <Component
        {...props}
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };
};

export default withFormHandler;
