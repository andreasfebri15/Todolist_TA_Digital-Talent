import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
