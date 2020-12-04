import React from "react";
import { NavLink } from "react-router-dom";
export default function () {
  return (
    <>
      <NavLink>home</NavLink>
      <NavLink>profile</NavLink>
      <NavLink>trips</NavLink>
      <NavLink>settings</NavLink>
    </>
  );
}
