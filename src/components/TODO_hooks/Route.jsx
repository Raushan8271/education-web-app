import React from "react";
import { Route } from "react-router";
import Edit from "./Edit";
import NavBar from "./NavBar";
import TodoDetails from "./TodoDetails";
import Todos from "./Todos";

export default function MainRoute() {
  return (
    <div>
      <NavBar />

      <Route exact path="/">
        <Todos />
      </Route>

      <Route exact path="/todo/:id">
        <TodoDetails />
      </Route>

      <Route path="/todo/:id/edit">
        <Edit />
      </Route>
    </div>
  );
}
