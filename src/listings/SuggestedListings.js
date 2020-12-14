import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ListingCard from "./ListingCard";
import { usePagination } from "../utils/usePagination.js";

export default function SuggestedListings({
  listings,
  styleOBJ_suggested_listings,
}) {
  const history = useHistory();

  const [paginatedListings] = usePagination(listings, 4);
  const [page, setPage] = useState(1);
  const [pageOfListings, setPageOfListings] = useState(paginatedListings[page]);
  console.log("Listings.js line11", { listings });

  useEffect(() => {
    paginatedListings && setPageOfListings(paginatedListings[page]);
  }, [page, listings, paginatedListings]);

  function routeToSingleListing(event, listing) {
    event.preventDefault();
    console.log("p.history", history, "listings", listings);
    history.push(`listings/${listing.id}`, { listing: listing });
  }

  const styleOBJ_card = { display: "flex", flexDirection: "column" };
  return (
    <>
      {1 < page&&page < paginatedListings.length - 1 && (
        <>
          <button style={{ width: "40%" }} onClick={() => setPage(page - 1)}>
            ⬅ back
          </button>

          <button style={{ width: "40%" }} onClick={() => setPage(page + 1)}>
            more ➡
          </button>
        </>
      )}

      {page === 1 && (
        <button style={{ width: "90%" }} onClick={() => setPage(page + 1)}>
          more ➡
        </button>
      )}
      {page === paginatedListings.length - 1 && (
        <button style={{ width: "90%" }} onClick={() => setPage(page - 1)}>
          ⬅ back
        </button>
      )}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        id="suggestedListings"
      >
        {pageOfListings
          ? pageOfListings.map((listing) => (
              <ListingCard
                styleOBJ_card={styleOBJ_card}
                listing={listing}
                routeToSingleListing={routeToSingleListing}
              />
            ))
          : ""}
      </section>
    </>
  );
}
