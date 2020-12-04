import React from "react";
import { Route, Link } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import "./styles.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Signup from "./Signup/Signup";

export default function App() {
  return (
    <>
      <div className="App">
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/*" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </>
  );
}
