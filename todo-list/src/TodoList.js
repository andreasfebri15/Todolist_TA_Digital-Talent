import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todoos, settodos] = useState([]);

  const addtodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, todos];
    settodos(newTodos);
    console.log(todos);
  };
  return (
    <div className="Todo-list">
      <h1>Belajar menggunakan React JS</h1>
      <h1>Catatan rencana hari ini</h1>
      <TodoForm onSubmit={addtodo} />
    </div>
  );
}

export default TodoList;
