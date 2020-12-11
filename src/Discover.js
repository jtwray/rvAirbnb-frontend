import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Discover() {
  return (
    <div>
      <h1>Discover an Adventure</h1>
    </div>
  );
}
import { connect } from "react-redux";
import Navigation from "./Navigation";
import Listings from "./listings/Listings";


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
      <div>"search and filters"
          {/* searchbar at top under notifications header */}
      </div>
      <div style={{width:"100%",display:"flex"}}>
        <section style={{width:"50%"}}>
          <Listings props={props} />
        </section>
        <section style={{width:"50%"}}>"MAP"</section>
      </div>
    </div>
  );
}

function mapState(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapState, {})(Dashboard);
