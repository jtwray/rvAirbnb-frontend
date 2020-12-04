import React from "react";
import SignupForm from "./SignupForm";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../redux/actions";

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

function Signup(props) {
  const history = useHistory();

  function pushHome(state) {
    if (state) {
      history.push("/", { state: state });
    }
    history.push("/");
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
        <SignupForm
          pushHome={pushHome}
          history={history}
          signup={props.signup}
        />
      </div>
    </div>
  );
}
export default connect(null, { signup })(Signup);
