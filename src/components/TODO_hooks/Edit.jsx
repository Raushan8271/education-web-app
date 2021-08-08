import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  updateSelectedTodoFailier,
  updateSelectedTodoRequest,
  updateSelectedTodoSuccess,
} from "./Redux/Action";

export default function Edit() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state);

  console.log(todo.slectedTodo);

  const [input, setInput] = useState(todo.slectedTodo.title);
  const history = useHistory();

  const updateSelectedTodo = async (input) => {
    dispatch(updateSelectedTodoRequest());

    try {
      const { data } = await axios.patch(`http://localhost:3050/todo/${id}`, {
        ...todo.slectedTodo,
        title: input,
      });
      dispatch(updateSelectedTodoSuccess(data));

      history.push(`/todo/${id}`);
    } catch (error) {
      dispatch(updateSelectedTodoFailier(error));
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        placeholder="update your task"
      />

      <button onClick={() => updateSelectedTodo(input)}>UPDATE TODO</button>
    </div>
  );
}
