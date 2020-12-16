import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { LoadingClackers } from "./utils/LoadingClackers";
import { connect } from "react-redux";

function MapBox(props) {
  const [viewport, setViewport] = useState({
    latitude: props.currentGeoLocation.latitude || 50,
    longitude: props.currentGeoLocation.longitude || 50,
    width: "50vw",
    height: "100vw",
    zoom: 10,
  });
  const [selectedListing, setSelectedListing] = useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {props.listings ? (
          props.listings.map((listing) =>{
  let listingLatitude=Number(listing.lat);
  console.log({listingLatitude})
  return (
            <Marker
              key={listing.id}
              latitude={Number(listing.lon)}
              longitude={Number(listing.lat)}
            >
              <button>
                <img src="rv.svg" />
              </button>
            </Marker>
          )})
        ) : (
          <LoadingClackers />
        )}
      </ReactMapGL>
    /</div>
  );
}
function mapState(state) {
  return { currentGeoLocation: state.currentGeoLocation };
}

export default connect(mapState, {})(MapBox);
