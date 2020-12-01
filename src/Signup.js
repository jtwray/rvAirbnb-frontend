import React from "react";
import SignupForm from "./Signup/SignupForm";

const left = {
  display: "flex",
  width: "50%",
  border: "solid pink 1rem",
  height: "100%"
};
const right = {
  display: "flex",
  width: "50%",
  border: "solid pink 1rem",
  height: "100%"
};

export default function Signup() {
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
        <SignupForm />
      </div>
    </div>
  );
}
