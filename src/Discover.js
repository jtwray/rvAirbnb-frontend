import React, { useEffect, useState } from "react";
import Listings from "./listings/Listings";
import axios from "axios";
import { LoadingClackers } from "./utils/LoadingClackers";

export default function Discover(props) {
  let listings;
  return (
    <div style={{ fontSize: "3rem" }}>
      <div>
        <h1>Discover an Adventure</h1>
      </div>
      <div>
        "search and filters"
        {/* searchbar at top under notifications header */}
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <section style={{ width: "50%" }}>
          {listings !== null && listings !== undefined &&listings.length > 0 ? (
            <Listings listings={listings} />
          ) : (
            <LoadingClackers />
          )}
        </section>
        <section style={{ width: "50%" }}>"MAPBOX"</section>
      </div>
      {/* random suggested listings  */}
    </div>
  );
}
