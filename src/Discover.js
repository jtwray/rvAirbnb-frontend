import React, { useEffect, useState } from "react";
import Listings from "./listings/Listings";
import axios from "axios";

export default function Discover(props) {
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
          <Listings listings={listings} />
        </section>
        <section style={{ width: "50%" }}>"MAPBOX"</section>
      </div>
    </div>
  );
}
