import React, { useState } from "react";
import TodoList from "./TodoList";
import Todofrom from "./TodoForm";
// import { RiCloseFill } from "react-icons/ri";
// import { BiEdit } from "react-icons/bi";

function Todo(todos, completeTodo) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      keys={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        {/* <RiCloseFill />
        <BiEdit /> */}
      </div>
    </div>
  ));
}

export default Todo;
