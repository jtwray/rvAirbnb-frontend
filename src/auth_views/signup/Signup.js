import React from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { signup } from "../../redux/actions";

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
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        padding: "0px",
        border: " #f50057 solid .5rem",
        fontSize: "4rem"
      }}
    >
      <div className="half left image" style={left}></div>
      <div className="half right form authform" style={right}>
        <SignupForm signup={props.signup} isLoading={props.isLoading} />
      </div>
    </div>
  );
}
function mapState(state) {
  return { isLoading: state.isLoading };
}
export default connect(mapState, { signup })(Signup);
