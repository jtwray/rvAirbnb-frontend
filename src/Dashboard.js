import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";

function Dashboard(props) {
  return (
    <div style={{ fontSize: "3rem" }}>
      <Navigation />
      <h1 style={{ fontSize: "5rem" }}>welcome {props.currentUser} !</h1>
      <p style={{ fontSize: "2rem" }}>dashboard will flesh out here</p>
    </div>
  );
}

function mapState(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapState, {})(Dashboard);
