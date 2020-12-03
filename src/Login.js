import React, { useState } from "react";
import { login } from "./redux/actions/index.js";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

function Login(props) {
  const initialCredentials = { username: "", password: "", email: "" };
  const [credentials, setCredentials] = useState(initialCredentials);

  function handleChange(event) {
    console.log("p.login", props);
    event.preventDefault();
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log({ credentials }, "changed just now", event.target.value);
  }

  function handleSubmit(event, credentials, history) {
    event.preventDefault();
    props.login(credentials, history);
    setCredentials(initialCredentials);
  }

  return (
    <>
      <LoginForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        credentials={credentials}
        history={props.history}
      />
    </>
  );
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, { login })(Login);
