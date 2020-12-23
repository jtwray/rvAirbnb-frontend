import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Listings from "./searchlistings/listings/Listings";
import SuggestedListings from "./suggested_listings/SuggestedListings";
import { LoadingClackers } from "../../utils/LoadingClackers";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import SearchBy from "./searchlistings/searchforms/SearchBy";
import MapBox from "./MapBox";

function Discover(props) {
  const { currentGeoLocation } = props;
  const { latitude, longitude } = currentGeoLocation;
  const [searchDates, setSearchDates] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState();
  const [zoom, setZoom] = useState(3);

  function handleUpdateSearchDates(e) {
    e.preventDefault();
    setSearchDates(e.target.value);
    console.log({ searchDates });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/listing`)
      .then((res) => setSuggestions(res.data.listings))
      .catch((err) => console.error(err));
  }, []);

  let styleOBJ_suggested_listings = {};

  return (
    <div style={{ fontSize: "3rem" }}>
      <div>
        <h1>Discover an Adventure</h1>
      </div>
      <div>"search and filters"</div>

{/**<!---- ⬇  |- searchBy component |  ---!>*/}
      <div
        style={{
          width: "100%",
          height: "300px",
          border: "solid 4px aqua",
          fontSize: "20px",
          display: "flex",
        }}
      >

        <SearchBy
          setSearchResults={setSearchResults}
          searchResults={searchResults}
          searchDates={searchDates}
        />
      </div>

{/**<!---- ⬇  |-searchResults  cond`t`l|  ---!>*/}
      <div style={{ width: "100%", display: "flex" }}>
        <section style={{ width: "50%" }}>
          {searchResults?.length > 0 ? (
            <div>{console.log("searchresults",searchResults)}
              <h2>!!search results!!</h2>
              <Listings listings={searchResults} />
            </div>
          ) : (
            <LoadingClackers />
          )}
        </section>
        <section style={{ width: "50%" }}>
          <MapBox listings={searchResults||suggestions} />
        </section>
      </div>
{/**<!----| ⬆    |-searchResults cond`t`l   |---!>*/}

{/**<!----| ⬇   |-suggestions cond`t`l     |---!>*/}
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
{/**<!---| ⬆  |-suggestions cond`t`l  |---!>*/}
    </div>
  );
}
function mapState(state) {
  return { currentGeoLocation: state.currentGeoLocation };
}
export default connect(mapState, {})(Discover);
