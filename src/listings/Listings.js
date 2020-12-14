import React, { useEffect, useState } from "react";
import{useHistory} from "react-router-dom"
import ListingCard from "./ListingCard";
import { usePagination } from "../utils/usePagination.js";

export default function Listings({listings}) {
  const history=useHistory()

  const [paginatedListings] = usePagination(listings, 10);
  const [page, setPage] = useState(1);
  const [pageOfListings, setPageOfListings] = useState(paginatedListings[page]);
console.log("Listings.js line11",{listings})


  useEffect(() => {
    paginatedListings && setPageOfListings(paginatedListings[page]);
  }, [page, listings, paginatedListings,]);

  function routeToSingleListing(event, listing) {
    event.preventDefault();
    console.log("p.history",history,"listings",listings)
 history.push(`listings/${listing.id}`,{listing:listing});
  }

  return (
    <section id="searchedListings">
      {page > 1 && <button onClick={() => setPage(page - 1)}>⬅ back </button>}
      {page < paginatedListings.length - 1 && (
        <button onClick={() => setPage(page + 1)}> more ➡</button>
      )}
      {pageOfListings
        ? pageOfListings.map((listing) => (
            <ListingCard
              listing={listing}
              routeToSingleListing={routeToSingleListing}
            />
          ))
        : ""}
    </section>
  );
}
