import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="tambahkan sebuah todo"
        value={input}
        name="text"
        className="todo-input"
      ></input>
      <button className="todo-button">tambahkan sebuah todo</button>
    </form>
  );
}

export default TodoForm;
