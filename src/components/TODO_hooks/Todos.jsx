import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  addTOdoFailier,
  addTodoRequest,
  addTodoSuccess,
  completedTodo,
  getTOdoFailier,
  getTodoRequest,
  getTodoSuccess,
  totalTodo,
} from "./Redux/Action";
import TodoInput from "./TodoInput";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Total from "./Total";

const TODO = styled.div`
  &div > a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    color: black;
  }
`;

export default function Todos() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => ({
    todo: state.todo,
    isLoading: state.isLoading,
    isError: state.isError,
  }));
  console.log(todo.todo);

  const getTodo = async () => {
    // dispatch(addTodo(payload));
    dispatch(getTodoRequest());
    try {
      const { data } = await axios.get(`http://localhost:3050/todo`);
      dispatch(getTodoSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(getTOdoFailier(error));
    }
    dispatch(totalTodo());
    dispatch(completedTodo());
    // axios
    //   .get(`http://localhost:3050/todo`)
    //   .then((res) => dispatch(getTodoSuccess(res.data)));
  };

  useEffect(() => {
    getTodo();
  }, []);

  const HandleAddTodo = async (input) => {
    const payload = {
      title: input,
      status: false,
    };

    dispatch(addTodoRequest());
    try {
      const { data } = await axios.post(`http://localhost:3050/todo`, payload);
      dispatch(addTodoSuccess());
      getTodo();

      console.log(getTodo());
    } catch (error) {
      dispatch(addTOdoFailier(error));
    }
  };

  return (
    <>
      <div>
        <TodoInput HandleAddTodo={HandleAddTodo} />
      </div>
      <div>
        <Total />
      </div>
      <div>
        {todo.todo.map((e, i) => {
          return (
            <TODO key={i}>
              <NavLink
                activeStyle={{ borderBottom: "1px solid" }}
                to={`/todo/${e.id}`}
              >
                <h2>
                  {i + 1}. {e.title}
                </h2>
              </NavLink>
              {/* <p>{e.status ? "Done" : "Note Done"}</p> */}
            </TODO>
          );
        })}
      </div>
    </>
  );
}
