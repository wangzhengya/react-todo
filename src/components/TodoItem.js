import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, markCompleted, deleteItem }) => {
  const itemStyle = {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: todo.completed ? "line-through" : "none"
  };
  return (
    <div style={itemStyle}>
      <p>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => markCompleted(todo.id)}
          value={todo.completed}
        />
        {todo.title}
        <button style={btnStyle} onClick={() => deleteItem(todo.id)}>
          X
        </button>
      </p>
    </div>
  );
};

const btnStyle = {
  backgroundColor: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  cursor: "pointer",
  borderRadius: "50%",
  float: "right"
};
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default TodoItem;
