import React from "react";
import { useContext, useState } from "react";
import AppContext from "../store/context";

function Input() {
  const { dispatch } = useContext(AppContext);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), content: input, state: false },
    });
    setInput("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={input}
        id=""
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default Input;
