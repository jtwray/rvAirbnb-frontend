import React, { useState } from "react";
import { login } from "./redux/actions/index.js";
import { connect } from "react-redux";
import SignInSide from "./muiLogin";

function Login(props) {
  const initialCredentials = { username: "", passsword: "" };
  const [credentials, setCredentials] = useState(initialCredentials);

  function handleChange(event) {
    event.preventDefault();
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log({ credentials }, "changed just now", event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.login(credentials);
    setCredentials(initialCredentials);
  }

  return (
    <>
      <SignInSide
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        credentials={credentials}
      />
    </>
  );
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, { login })(Login);
