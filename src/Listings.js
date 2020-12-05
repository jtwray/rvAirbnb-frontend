import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import ListingCard from "./ListingCard";

import json from "./listings.json";
export default function Listings() {
  const [listings, setListings] = useState(json.listings);

  //   useEffect(() => {
  //     axiosWithAuth()
  //       .get("/api/listing")
  //       .then((res) => setListings(res.data.listings))
  //       .catch((e) => console.error(e));
  //   }, []);

  return (
    <section>
      {listings
        ? listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))
        : ""}
    </section>
  );
}
