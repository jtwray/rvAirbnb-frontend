import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { usePosition } from "./utils/usePosition";
import { LoadingClackers } from "./utils/LoadingClackers";
import { getCoords, updateCoords } from "./redux/actions/index";
import { StepContent } from "@material-ui/core";

function Dashboard(props, { currentGeoLocation }) {
  const [latitude, longitude, accuracy] = usePosition();
  const [gps, setGps] = useState(latitude, longitude, accuracy);

  useEffect(() => {
    getCoords();
  }, []);

  useEffect(() => {
    latitude && console.log({gps},{ latitude });
    latitude &&
      axiosWithAuth()
        .post(`api/listing/geo_address`, gps)
        .then(({ data }) => {
          console.log({ data });
        })
        .catch((error) => {
          console.error(error);
        });
  }, [gps,latitude]);

  useEffect(() => {
    setGps({ latitude, longitude, accuracy });
    updateCoords({ latitude, longitude, accuracy });
  }, [latitude, longitude, accuracy]);

  // useEffect(() => {
  //   latitude && console.log({ latitude });
  //   latitude &&
  //     axiosWithAuth()
  //       .post(`api/listing/geo_address`, {
  //         gps,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  // }, [gps]);
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
          <h2 style={{ fontSize: "5rem" }}>"current location /geolocation"</h2>
          <h6>
            store.lat:{currentGeoLocation?.latitude}
            {/**  GeoLocationCoordinates.getlatitude()*/}gps.lat{gps.latitude}{" "}
            lon:{gps.longitude}
          </h6>
        </>
      )}
    </div>
  );
}

function mapState(state) {
  return {
    currentUser: state.currentUser,
    currentGeoLocation: state.currentGeoLocation,
  };
}

export default connect(mapState, { getCoords, updateCoords })(Dashboard);
