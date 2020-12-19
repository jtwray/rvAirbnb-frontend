import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { LoadingClackers } from "../../utils/LoadingClackers";
import { connect } from "react-redux";
import { ReactComponent as RV_Site_Marker } from "../../images/image.svg";

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
          props.listings.map((listing) => {
            let listingLatitude = Number(listing.lat);

            return (
              <Marker
                key={listing.id}
                latitude={Number(listing.lon)}
                longitude={Number(listing.lat)}
              >
                <button
                  style={{
                    background: "purple",
                    width: "20px",
                    height: "20px",
                    border: "solid 1px black",
                    cursor: "pointer",
                    padding: "0",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedListing(listing);
                  }}
                >
                  <RV_Site_Marker
                    style={{
                      width: "20px",
                      height: "20px",
                      padding: "0",
                      margin: "0",
                    }}
                  />
                </button>
              </Marker>
            );
          })
        ) : (
          <LoadingClackers />
        )}
        {selectedListing ? (
          <Popup
            latitude={Number(selectedListing.lon)}
            longitude={Number(selectedListing.lat)}
            onClose={() => {
              setSelectedListing(null);
            }}
          >
            <div >
              <h2>{selectedListing.title}</h2>
              <p>{selectedListing.price}/night</p>
              <p>{selectedListing.city},{selectedListing.state},{selectedListing.zip}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
      /
    </div>
  );
}
function mapState(state) {
  return { currentGeoLocation: state.currentGeoLocation };
}

export default connect(mapState, {})(MapBox);
