import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navigation from "./Navigation";



function Dashboard(props) {

  return (
    <div style={{ fontSize: "3rem" }}>
      <Navigation />
      {/* notifications header
      list welcome message
      current geolocation
      any notifications since last login
       */}
      <h1 style={{ fontSize: "5rem" }}>welcome {props.currentUser} !</h1>
      <h2 style={{ fontSize: "5rem" }}>"current location /geolocation" !</h2>

    </div>
  );
}

function mapState(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapState, {})(Dashboard);
