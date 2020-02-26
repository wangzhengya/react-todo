import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addItem }) => {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const submitIt = e => {
    e.preventDefault();
    addItem(text);
    setText("");
  };
  return (
    <form onSubmit={submitIt} style={{ display: "flex" }}>
      <input
        type='text'
        value={text}
        onChange={onChange}
        style={{ flex: "10", padding: "5px" }}
        placeholder='新的代办内容'
      />
      <input type='submit' value='添加' style={{ flex: "1" }} />
    </form>
  );
};

TodoForm.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default TodoForm;
