import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentToken = useSelector((state) => state.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") &&
        localStorage.getItem("token") === currentToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/log-in" />
        )
      }
    />
  );
};
