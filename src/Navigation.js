import React from "react";
import { NavLink } from "react-router-dom";

const navStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  margin: "0",
  width: "100%",
  height: "auto",
  background: "red",
  boxShadow: "1px 0px 0px 0px black"
};

export default function () {
  return (
    <>
      <nav style={navStyles}>
        <NavLink to="/">home</NavLink>
        <NavLink to="/profile">profile</NavLink>
        <NavLink to="/trips">trips</NavLink>
        <NavLink to="/settings">settings</NavLink>
      </nav>
    </>
  );
}
