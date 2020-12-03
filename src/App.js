import React from "react";
import { Route, Link } from "react-router-dom";
import "./styles.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Signup from "./Signup";

export default function App() {
  return (
    <>
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </>
  );
}
