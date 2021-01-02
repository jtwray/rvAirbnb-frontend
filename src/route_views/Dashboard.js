import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import Navigation from "./discover/Navigation";
import { usePosition } from "../utils/hooks/usePosition";
import { LoadingClackers } from "../utils/LoadingClackers";
import { getCoords, updateCoords } from "../redux/actions/index";

function Dashboard(props) {
  const { currentGeoLocation, currentAddress, getCoords, updateCoords } = props;
 
  let { latitude, longitude } = currentGeoLocation;
  const [gps, setGps] = useState({ latitude, longitude });
  const [roundedGps, setRoundedGps] = useState();

  useEffect(() => {
    if (latitude && currentGeoLocation) {
      setGps({ latitude, longitude });
      setRoundedGps({
        latitude: latitude.toFixed(9),
        longitude: longitude.toFixed(9),
      });
      updateCoords({ latitude, longitude });
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
          <div style={{ fontSize: "2rem" }}>
            current address:
            {
              <>
                {currentAddress?.name} {currentAddress?.locality},
                {currentAddress?.region} {currentAddress?.postal_code}
              </>
            }
          </div>
          <table style={{ border: "solid 2px indigo" }}>
            <th>geo coords</th>
            <tr>
              <td
                style={{
                  border: "solid 1px indigo",
                  margin: "0 auto",
                  padding: "0px 1px",
                }}
              >
                lat
              </td>
              <td
                style={{
                  border: "solid 1px indigo",
                  margin: "0 auto",
                  padding: "0px 1px",
                }}
              >
                lon
              </td>
              <td
                style={{
                  border: "solid 1px indigo",
                  margin: "0 auto",
                  padding: "0px 1px",
                }}
              >
                address
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "solid 1px indigo",
                  margin: "0 auto",
                  padding: "0px 1px",
                }}
              >
                {currentGeoLocation?.latitude}
              </td>
              <td
                style={{
                  border: "solid 1px indigo",
                  margin: "0 auto",
                  padding: "0px 1px",
                }}
              >
                {currentGeoLocation?.longitude}
              </td>
              <td
                style={{
                  border: "solid 1px indigo",
                  margin: "0 auto",
                  padding: "0px 1px",
                }}
              >
                {currentAddress?.label}
              </td>
            </tr>
          </table>
        </>
      )}
    </div>
  );
}

function mapState(state) {
  return {
    currentUser: state.currentUser,
    currentGeoLocation: state.currentGeoLocation,
    currentAddress: state.currentAddress,
  };
}

export default connect(mapState, { getCoords, updateCoords })(Dashboard);
