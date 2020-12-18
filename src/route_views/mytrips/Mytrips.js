import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { LoadingClackers } from "../../utils/LoadingClackers";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Reservations from "./Reservations.js";


function Mytrips({ currentGeoLocation, currentUser, currentId }) {
  const [reservations, setReservations] = useState();
  console.log({ currentUser });
  // reservations &&console.log({reservations});
  let styleOBJ_suggested_listings;

  useEffect(() => {
    axiosWithAuth()
      .get(`api/reserve/${currentId}`)
      .then((res) => setReservations(res.data.reservations))
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    reservations && console.log({ reservations });
    // axiosWithAuth().get(`api/reserve/${currentId}`).then(res=>setReservations(res.data.reservations) ).catch(e=>console.error(e))
  }, [reservations]);
  return (
    <div>
      <h1>My Trips</h1>
      {currentGeoLocation && (
        <div>
          <h3>my current location</h3>
          <p>
            [ lat: {currentGeoLocation.latitude} X lon:
            {currentGeoLocation.longitude} ]
          </p>
        </div>
      )}

      {reservations && (
        <>
          <h1>SUGGESTIONSLOADED</h1>{" "}
          <Reservations listings={reservations} />
        </>
      )}
    </div>
  );
}

function mapState({ currentGeoLocation, currentUser, currentId }) {
  console.log(currentGeoLocation, currentUser, currentId);
  return {
    currentGeoLocation,
    currentUser,
    currentId,
  };
}
export default connect(mapState, {})(Mytrips);
