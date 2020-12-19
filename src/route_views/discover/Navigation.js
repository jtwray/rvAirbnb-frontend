import React from "react";
import { NavLink } from "react-router-dom";

const navStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  margin: "0",
  width: "100%",
  height: "auto",
  background: "red",
  boxShadow: "1px 0px 0px 0px black",
};

export default function Navigation() {
  function handleLogout() {
    localStorage.removeItem("token");
  }
  return (
    <>
      <nav style={navStyles}>
        <NavLink to="/home/discover">discover</NavLink>
        <NavLink to="/home/profile">profile</NavLink>
        <NavLink to="/home/mytrips">my trips</NavLink>
        <NavLink to="/home/messages">messages</NavLink>
        <NavLink onClick={handleLogout} to="/login">
          logout
        </NavLink>
      </nav>
    </>
  );
}
