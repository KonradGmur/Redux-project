import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../action/todo.actions";

const AddTodo = ({ addTodo }) => {
  let input;
  const handleSubmit = () => {
    const value = input.value.trim();
    addTodo(value);
  };
  return (
    <div>
      <input type="text" ref={node => (input = node)} />
      <button type="submit" onClick={handleSubmit}>
        Dodaj zadanie
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  AddTodo: text => dispatch(addTodo(text))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
