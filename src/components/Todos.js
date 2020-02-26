import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = ({ todos, markCompleted, deleteItem }) => {
  console.log(todos);
  return (
    <div>
      {todos
        .sort((a, b) => a.completed - b.completed)
        .map(todo => {
          return (
            <TodoItem
              key={todo.id}
              markCompleted={markCompleted}
              deleteItem={deleteItem}
              todo={todo}
            />
          );
        })}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default Todos;
