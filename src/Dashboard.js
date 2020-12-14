import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { usePosition } from "./utils/usePosition";
import { LoadingClackers } from "./utils/LoadingClackers";

function Dashboard(props) {
  const [latitude, longitude, accuracy] = usePosition();
  const [gps, setGps] = useState(latitude, longitude, accuracy);

  useEffect(() => {
    setGps({ latitude, longitude, accuracy });
  }, [latitude, longitude, accuracy]);

  return (
    <div style={{ fontSize: "3rem" }}>
      <Navigation />
      {/* notifications header
      list welcome message
      current geolocation
      any notifications since last login
       */}
      <h1 style={{ fontSize: "5rem" }}>welcome {props.currentUser} !</h1>
      {!gps ? (
        <LoadingClackers />
      ) : (
        <>
          <h2 style={{ fontSize: "5rem" }}>
            "current location /geolocation"
          </h2>
          <h6>
          lat:{gps.latitude} lon:{gps.longitude}
          </h6>
        </>
      )}
    </div>
  );
}

function mapState(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapState, {})(Dashboard);
