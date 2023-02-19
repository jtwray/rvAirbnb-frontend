import React, { useEffect, useState, useLayoutEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import ListingCard from "../searchlistings/listings/ListingCard";
import { usePagination } from "../../../utils/hooks/usePagination.js";

export default function SuggestedListings({
  listings,
  styleOBJ_suggested_listings,
}) {
  const history = useHistory();
  // const cardWidth=Math.floor(innerWidth / 275);
  const [width, setWidth] = useState();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [paginatedListings] = usePagination(
    listings,
    Math.floor(windowSize?.width / 255) || 4
  );
  const [page, setPage] = useState(1);
  const [pageOfListings, setPageOfListings] = useState(paginatedListings[page]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize());
    return () => {
      window.removeEventListener("resize", handleResize());
    };
  }, []);

  useEffect(() => {
    paginatedListings && setPageOfListings(paginatedListings[page]);
  }, [page, listings, paginatedListings, windowSize]);

  function routeToSingleListing(event, listing) {
    event.preventDefault();
    console.log({ listing });
    history.push(`/home/listings/${listing.id}`, { listing: listing });
  }

  const styleOBJ_card = { display: "flex", flexDirection: "column" };
  return (
    <>
      {1 < page && page < paginatedListings.length - 1 && (
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
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        id="suggestedListings"
      >
        {pageOfListings
          ? pageOfListings.map((listing) => {
              return (
                <ListingCard
                  styleOBJ_card={styleOBJ_card}
                  listing={listing}
                  routeToSingleListing={routeToSingleListing}
                />
              );
            })
          : ""}
      </section>
    </>
  );
}
