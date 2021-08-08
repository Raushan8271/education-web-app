import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import {
  completedTodo,
  getSelectedTodoFailier,
  getSelectedTodoRequest,
  getSelectedTodoSuccess,
  removeSelectedTodoFailier,
  removeSelectedTodoRequest,
  removeSelectedTodoSuccess,
  toggleSelectedTodoFailier,
  toggleSelectedTodoRequest,
  toggleSelectedTodoSuccess,
  totalTodo,
} from "./Redux/Action";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const EDIT = styled.div`
  &div > a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    color: black;
  }
`;

export default function TodoDetails() {
  const { id } = useParams();
  console.log(id);

  const history = useHistory();

  const dispatch = useDispatch();
  const todo = useSelector((state) => state);

  console.log(todo.slectedTodo);

  useEffect(() => {
    getSelectedTodo();
  }, []);

  // getting selected todo
  const getSelectedTodo = async () => {
    dispatch(getSelectedTodoRequest());

    try {
      const { data } = await axios.get(`http://localhost:3050/todo/${id}`);

      dispatch(getSelectedTodoSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(getSelectedTodoFailier(error));
    }
  };

  // Remove TODO
  const removeSelectedTodo = async () => {
    dispatch(removeSelectedTodoRequest());

    try {
      const { data } = await axios.delete(`http://localhost:3050/todo/${id}`);
      dispatch(removeSelectedTodoSuccess(data));

      history.push("/");
    } catch (error) {
      dispatch(removeSelectedTodoFailier(error));
    }
    // dispatch(totalTodo());
    // dispatch(completedTodo());
  };

  //Toggle TODO
  const toggleSelectedTodo = async () => {
    dispatch(toggleSelectedTodoRequest());

    try {
      const { data } = await axios.patch(`http://localhost:3050/todo/${id}`, {
        ...todo.slectedTodo,
        status: !status,
      });
      //   console.log(data);
      dispatch(toggleSelectedTodoSuccess(data));
    } catch (error) {
      dispatch(toggleSelectedTodoFailier(error));
    }
    // dispatch(completedTodo());
  };

  const { title, status } = todo.slectedTodo;
  return (
    <>
      {todo.isLoading ? (
        <div>Loading...</div>
      ) : todo.isError ? (
        <div>Error...</div>
      ) : (
        <div>
          <p>Title: {title}</p>
          <p>Status: {status ? "DONE" : "NOT DONE"}</p>
          <button onClick={removeSelectedTodo}>REMOVE</button>
          <button onClick={toggleSelectedTodo}>
            {status ? "COMPLETED" : "NOT COMPLETED"}
          </button>
          <EDIT>
            <NavLink
              activeStyle={{ borderBottom: "1px solid" }}
              to={`/todo/${id}/edit`}
            >
              <p>EDIT</p>
            </NavLink>
          </EDIT>
        </div>
      )}
    </>
  );
}
