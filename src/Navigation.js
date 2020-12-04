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
        <NavLink>home</NavLink>
        <NavLink>profile</NavLink>
        <NavLink>trips</NavLink>
        <NavLink>settings</NavLink>
      </nav>
    </>
  );
}
