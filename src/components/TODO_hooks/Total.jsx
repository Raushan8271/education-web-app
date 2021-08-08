import React from "react";
import { useSelector } from "react-redux";

export default function Total() {
  const todo = useSelector((state) => state);

  return (
    <div>
      <h1>TOTAL TODOS: {todo.total}</h1>
      <h1>COMPLETED TODOS: {todo.completed}</h1>
    </div>
  );
}
