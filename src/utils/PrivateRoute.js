import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentToken = useSelector((state) => state.currentToken);
  const localToken = localStorage.getItem("token");
  if (currentToken === localToken) {
    console.log("<MATCH!!");
  } else {
    console.log("NOTMATCH!");
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        localToken && localToken === currentToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
