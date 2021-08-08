import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decriment, Incriment } from "./Redux/action";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(Incriment(1))}>Incriment</button>
      <button onClick={() => dispatch(Decriment(1))}>Decriment</button>
    </div>
  );
}
