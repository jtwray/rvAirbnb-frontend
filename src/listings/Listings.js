import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ListingCard from "./ListingCard";
import { usePagination } from "../utils/usePagination.js";

export default function Listings(props) {
  const [listings, setListings] = useState([]);
  const [paginatedListings] = usePagination(listings, 10);
  const [page, setPage] = useState(1);
  const [pageOfListings, setPageOfListings] = useState(paginatedListings[page]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/listing")
      .then((res) => setListings(res.data.listings))
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    paginatedListings && setPageOfListings(paginatedListings[page]);
  }, [page, listings, paginatedListings]);

  function routeToSingleListing(event, listing) {
    event.preventDefault();
    props.history.push(`listings/${listing.id}`);
  }

  return (
    <section>
      {page > 1 && (
        <button onClick={() => setPage((page - 1))}>⬅ back </button>
      )}
      {page < paginatedListings.length - 1 && (
        <button onClick={() => setPage((page + 1))}> more ➡</button>
      )}
      {pageOfListings
        ? pageOfListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              routeToSingleListing={routeToSingleListing}
            />
          ))
        : ""}
    </section>
  );
}
