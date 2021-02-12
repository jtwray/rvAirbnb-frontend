import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ListingCard from "./ListingCard";
import { usePagination } from "../../../../utils/hooks/usePagination.js";

export default function Listings({ listings }) {
  const history = useHistory();

  // const cardWidth=Math.floor(innerWidth / 275);
  const [height, setHeight] = useState();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [paginatedListings] = usePagination(
    listings,
    Math.floor(windowSize?.height / 300) || 4
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
    console.log("p.history", history, "listings", listings);
    history.push(`listings/${listing.id}`, { listing: listing });
  }
  const paginationButtonStyles = {
    width: "50%",
    color: "midnightblue",
    background: "skyblue",
    textShadow: "1px 1px 1px pink, -1px -1px 1px deeppink",
    fontSize: "3rem",
    borderRadius: "5px",
    letterSpacing: "5px",
    fontWeight: "600",
    height: "100px",
  };
  const paginationButtonBoxStyles = { width:"100%" };
  return (
    <section id="searchedListings">
      <div className="paginationButtonsBox" style={paginationButtonBoxStyles}>
        {page > 1 && (
          <button
            style={paginationButtonStyles}
            className="paginationButton"
            onClick={() => setPage(page - 1)}
          >
            ⬅ back{" "}
          </button>
        )}
        {page < paginatedListings.length - 1 && (
          <button
            style={paginationButtonStyles}
            className="paginationButton"
            onClick={() => setPage(page + 1)}
          >
            {" "}
            more ➡
          </button>
        )}
      </div>
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
