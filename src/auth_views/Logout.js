import React from "react";
import { Link } from "react-router-dom";
export default function Logout() {
  function handleLogout() {
    localStorage.removeItem("token");
    console.log("loggin out");
  }
  return (
    <>
      <Link onClick={handleLogout} to="/login">
        logout
      </Link>
    </>
  );
}
