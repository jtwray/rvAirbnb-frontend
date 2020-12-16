import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { connect } from "react-redux";

function MapBox(props) {
  const [viewport, setViewport] = useState({
    latitude: props.latitude || 50,
    longitude: props.longitude || 50,
    width: "50vw",
    height: "100vw",
    zoom: 10,
  });
  const [selectedListing, setSelectedListing] = useState(null);

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
    </>
  );
}
function mapState(state) {
  return { currentGeoLocation: state.currentGeoLocation };
}

export default connect(mapState, {})(MapBox);
