import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #2e545a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & div > a {
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    color: white;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <div>
        <NavLink activeStyle={{ borderBottom: "1px solid" }} exact to="/">
          HOME
        </NavLink>
      </div>
    </Nav>
  );
}
