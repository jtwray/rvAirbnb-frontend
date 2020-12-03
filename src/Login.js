import React, { useState } from "react";
import { login } from "./redux/actions/index.js";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

const left = {
  display: "flex",
  width: "50%",
  height: "100%",
  backgroundImage: "url(https://source.unsplash.com/random)",
  backgroundSize: "cover",
  backgroundPosition: "center"
};
const right = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "50%",
  height: "100%",
  boxShadow: "-1px 0px 5px .2px black"
};

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
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "99vh",
        padding: "0",
        border: "red solid 1rem",
        fontSize: "3rem"
      }}
    >
      <div className="half left image" style={left}></div>
      <div className="half right form" style={right}>
        <LoginForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          credentials={credentials}
          history={props.history}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, { login })(Login);
