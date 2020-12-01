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
        <nav>
          <Link to="/">home</Link>
          {localStorage.getItem("token") ? (
            <Link to="/logout">logout</Link>
          ) : (
            <Link to="/login">login</Link>
          )}
        </nav>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </>
  );
}
