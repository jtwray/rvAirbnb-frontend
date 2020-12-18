import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import Navigation from "./discover/Navigation";
import { usePosition } from "../utils/hooks/usePosition";
import { LoadingClackers } from "../utils/LoadingClackers";
import { getCoords, updateCoords } from "../redux/actions/index";

function Dashboard(props) {
  let latitude,longitude;
  const { currentGeoLocation, getCoords, updateCoords } = props;
  if(currentGeoLocation){ const {latitude, longitude} = currentGeoLocation;}
  const [gps, setGps] = useState(latitude, longitude);
  const [roundedGps, setRoundedGps] = useState();

  useEffect(() => {
    if (latitude) {
      console.log({ latitude });
      setGps({ latitude, longitude });
      setRoundedGps({
        latitude: latitude.toFixed(9),
        longitude: longitude.toFixed(9),
      });
      updateCoords({ latitude, longitude });
      console.log(
        "updateing state.currentGeoLocation form useeffect line 29 Dshboard.js",
        { latitude },
        { gps },
        { roundedGps }
      );
    }
  }, [latitude, longitude]);

  const getAddressFromGpsCoords = useCallback(() => {
    axiosWithAuth()
      .post(`api/listing/geo_address`, gps)
      .then(({ data }) => {
        console.log({ data });
      })
      .catch((error) => {
        console.error(error);
      });
    console.log({ roundedGps }, "gotAddresssfromgps");
  }, [roundedGps]);

  useEffect(() => {
    latitude && console.log({ gps }, { latitude });
    latitude && getAddressFromGpsCoords();
  }, [gps, latitude]);

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
            gps.lat{gps.latitude} lon:{gps.longitude}
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
