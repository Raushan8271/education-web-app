import React, { useState } from "react";

function TodoInput({ HandleAddTodo }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="enter your task"
        value={input}
      />
      <button onClick={() => HandleAddTodo(input)}>ADD</button>
    </div>
  );
}

export default TodoInput;
