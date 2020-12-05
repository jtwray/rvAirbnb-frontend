import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import Listings from "./listings/Listings";


function Dashboard(props) {
  // console.log({ json });
  // const [listings, setListings] = useState(json.listings);
  // useEffect(() => {
  //   axios
  //     .get("https://rventure.herokuapp.com/api/listing")
  //     // .then((res) => setListings(res.data.listings))
  //     .catch((e) => console.error(e));
  // }, []);
  return (
    <div style={{ fontSize: "3rem" }}>
      <Navigation />
      <h1 style={{ fontSize: "5rem" }}>welcome {props.currentUser} !</h1>
      <h2 style={{ fontSize: "5rem" }}>"current location /geolocation" !</h2>
      <div>"search and filters"</div>
      <div style={{width:"100%",display:"flex"}}>
        <section style={{width:"50%"}}>
          <Listings />
        </section>
        <section style={{width:"50%"}}>"MAP"</section>
      </div>
    </div>
  );
}

function mapState(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapState, {})(Dashboard);
