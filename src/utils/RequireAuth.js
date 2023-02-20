import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const getAuth = () => {
  const currentToken = useSelector((state) => state.currentToken);
  const localToken = localStorage.getItem("token");
  if (currentToken === localToken) {
    console.log("<MATCH!!");
  } else {
    console.log("NOTMATCH!");
  }
  return localToken && localToken === currentToken;
};

function RequireAuth({ children, redirectTo = "/login" }) {
  let isAuthenticated = getAuth();
  return (isAuthenticated ? children : <Navigate to={redirectTo} />)
}

export { RequireAuth };
