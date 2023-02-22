import React, { useState, useEffect } from "react";
// import ReactMapGL, { Marker, Popup,LinearInterpolator } from "react-map-gl/src/index";
import  {  LinearInterpolator } from 'mapbox-gl';
// import  { Marker, Popup, LinearInterpolator } from 'mapbox-gl';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { LoadingClackers } from "../../utils/LoadingClackers";
import { connect } from "react-redux";
import { ReactComponent as RV_Site_Marker } from "../../images/rv_site_marker.svg";
import "mapbox-gl/dist/mapbox-gl.css"

function MapBox(props) {
  const [viewport, setViewport] = useState({
    latitude: props.currentGeoLocation.latitude || 50,
    longitude: props.currentGeoLocation.longitude || 50,
    width: "50vw",
    height: "100vh",
    zoom: 1,
    transitionDuration: 500,
    transitionInterpolator: new LinearInterpolator(),

  });
  const [selectedListing, setSelectedListing] = useState(null);

  useEffect(() => {
    function listener(e) {
      if (e.key === "Escape") {
        setSelectedListing(null);
      }
    }
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport({
            ...viewport,
            transitionDuration: 500,
            transitionInterpolator: new LinearInterpolator({ center: [longitude, latitude], duration: 2000 }),
            // transitionInterpolator: new FlyToInterpolator(),

          });
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
            <div
              style={{
                borderRadius: "3%",
                padding: ".2rem 1.5rem",
                color: "darkgray",
                background: "linear-gradient(red,firebrick,darkred)",
                letterSpacing: "1px",
                fontWeight: "lighter",
                textShadow:
                  " .5px .5px 2.5px white, -.15px .15px .5px white,-1.5px -1.5px .5px black, -.15px -.15px 2.5px black",
                fontSize: "3.7rem",
                height: "auto",
                width: "300px",
              }}
            >
              <h2>{selectedListing.title}</h2>
              <p>{selectedListing.price}/night</p>
              <p>
                {selectedListing.city},{selectedListing.state},
                {selectedListing.zip}
              </p>
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


// import * as React from 'react';
// import {useRef, useCallback} from 'react';
// import {render} from 'react-dom';
// import Map, {MapRef} from 'react-map-gl';

// import ControlPanel from './control-panel';

// const MAPBOX_TOKEN = ''; // Set your mapbox token here

// const initialViewState = {
//   latitude: 37.7751,
//   longitude: -122.4193,
//   zoom: 11,
//   bearing: 0,
//   pitch: 0
// };

// export default function App() {
//   const mapRef = useRef<MapRef>();

//   const onSelectCity = useCallback(({longitude, latitude}) => {
//     mapRef.current?.flyTo({center: [longitude, latitude], duration: 2000});
//   }, []);

//   return (
//     <>
//       <Map
//         ref={mapRef}
//         initialViewState={initialViewState}
//         mapStyle="mapbox://styles/mapbox/light-v9"
//         mapboxAccessToken={MAPBOX_TOKEN}
//       />
//       <ControlPanel onSelectCity={onSelectCity} />
//     </>
//   );
// }

// export function renderToDom(container) {
//   render(<App />, container);
// }