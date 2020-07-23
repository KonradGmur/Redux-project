import React from "react";
import "./styles.css";
import TodoList from "./containers/TodoList";
import AddTodo from "./containers/TodoList";

export default function App() {
  return (
    <div className="App">
      <h1>Redux-first project</h1>
      <h2>Hello</h2>

      <AddTodo />
      <TodoList />
    </div>
  );
}
