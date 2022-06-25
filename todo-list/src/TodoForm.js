import React, { useState } from "react";

function TodoForm(atribut) {
  //membuat variable input untuk mengisi keyword
  const [input, setInput] = useState("");
  //membuat variable handlechange agar melakukan perubahan pada input data
  const handleChange = a => {
    setInput(a.target.value);
  };

  //membuat variable handlesubmit untuk mengsubmit data keyboard
  const handleSubmit = a => {
    a.preventDefault();
    atribut.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      ``
      <input
        type="text"
        placeholder="tambahkan sebuah todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      ></input>
      <button className="todo-button">Tambahkan sebuah catatan</button>
    </form>
  );
}

export default TodoForm;
