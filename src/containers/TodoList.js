import React from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";

const TodoList = ({ todos }) => {
  const toggleTodo = () => {};
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
