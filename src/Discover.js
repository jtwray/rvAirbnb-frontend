import React, { useEffect, useState } from "react";
import Listings from "./listings/Listings";
import axios from "axios";
import { LoadingClackers } from "./utils/LoadingClackers";
import SuggestedListings from "./listings/SuggestedListings";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { connect } from "react-redux";

function Discover(props) {
  const { currentGeoLocation } = props;
  const [searchTerms, setSearchTerms] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState();
  const [map, setMap] = useState();
  const [parameters, setParameters] = useState();
  const [maptype, setMaptype] = useState("roadmap");
  const [mapQuery, setMapQuery] = useState();

  const [zoom, setZoom] = useState(5);
  {
    /**import the slider to allow zoom adjustments or just a + / - buttons set*/
  }
  {
    /** maptype= roadmap or satellite*/

  }
  useEffect(()=>{
      setMapQuery('hospital')
  },[])
  useEffect(() => {
    const { latitude, longitude } = currentGeoLocation;
    setParameters(
      `${mapQuery}&center=${
        (latitude, longitude)
      }&zoom=${zoom}&maptype=${maptype}`
    );
  }, [mapQuery, zoom, maptype, currentGeoLocation]);

  useEffect(() => {
    setMap(
      (parameters) =>
        `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_GOOGLE_MAP_API}&q=${parameters}`
    );
  }, [parameters]);

  function handleSubmitSearch(event, searchTerms, searchOptions) {
    event.preventDefault();
    axios
      .get(`http://localhost:8001/api/listing/searchlistings`, { searchTerms })
      .then((res) => setSearchResults(res.data))
      .catch((error) => console.error(error));
  }

  function handleSubmit(event, searchTerms, searchOptions) {
    event.preventDefault();
    axios
      .get(`http://localhost:8001/api/listing/searchlistings`, { searchTerms })
      .then((res) => setSearchResults(res.data.listings))
      .catch((error) => console.error(error));
  }

  function handleUpdateSearchTerms(e) {
    e.preventDefault();
    setSearchTerms(e.target.value);
    console.log({ searchTerms });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/listing`)
      .then((res) => setSuggestions(res.data.listings))
      .catch((err) => console.error(err));
  }, []);
  let styleOBJ_suggested_listings = {};

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //         var latitude = position.coords.latitude;
  //         var longitude = position.coords.longitude;
  //         var accuracy = position.coords.accuracy;
  //         var coords = new google.maps.LatLng(latitude, longitude);
  //         var mapOptions = {
  //             zoom: 15,
  //             center: coords,
  //             mapTypeControl: true,
  //             navigationControlOptions: {
  //                 style: google.maps.NavigationControlStyle.SMALL
  //             },
  //             mapTypeId: google.maps.MapTypeId.ROADMAP
  //         };

  //         var capa = document.getElementById("capa");
  //         capa.innerHTML = "latitude: " + latitude + ", longitude: " + ", accuracy: " + accuracy;

  //         map = new google.maps.Map(document.getElementById("mapContainer"), mapOptions);
  //         var marker = new google.maps.Marker({
  //             position: coords,
  //             map: map,
  //             title: "ok"
  //         });

  //     },
  //     function error(msg) {alert('Please enable your GPS position feature.');},
  //     {maximumAge:10000, timeout:5000, enableHighAccuracy: true});
  // } else {
  //     alert("Geolocation API is not supported in your browser.");
  // }

  return (
    <div style={{ fontSize: "3rem" }}>
      <div>
        <h1>Discover an Adventure</h1>
      </div>
      <div>"search and filters"</div>
      <div
        style={{
          width: "100%",
          height: "300px",
          border: "solid 4px aqua",
          fontSize: "20px",
          display: "flex",
        }}
      >
        <form onSubmit={handleSubmit} style={{ position: "unset" }}>
          <label htmlFor="searchTerms">discover an adventure</label>
          <input
            type="text"
            name="searchTerms"
            id="searchTerms"
            value={searchTerms || ""}
            onChange={(e) => handleUpdateSearchTerms(e)}
          />

          <button
          // onSubmit={(e) => {
          //   handleSubmitSearch(e, searchTerms);
          // }}
          ></button>
        </form>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <section style={{ width: "50%" }}>
          {searchResults !== null &&
          searchResults !== undefined &&
          searchResults.length > 0 ? (
            <Listings searchResults={searchResults} />
          ) : (
            <LoadingClackers />
          )}
        </section>
        <section style={{ width: "50%" }}>
          <div id="capa"></div>
          <section className="mapContainer"></section>
          {map && <iframe src={map} />}
        </section>
      </div>
      {suggestions ? (
        <section
          id="suggestions"
          style={{
            height: "500px",
            /* width: 85vw; */
            border: "5px solid firebrick",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h2>suggestions</h2>
          <SuggestedListings
            listings={suggestions}
            styleOBJ_suggested_listings={styleOBJ_suggested_listings}
          />
        </section>
      ) : (
        <LoadingClackers />
      )}
    </div>
  );
}
function mapState(state) {
  return { currentGeoLocation: state.currentGeoLocation };
}
export default connect(mapState, {})(Discover);
