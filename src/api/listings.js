import React from "react";
import ListingCard from "../listings/ListingCard";

export default function Listings(props) {
  return (
    <>
      <section styles={props.styles}>
        {props.listings.map((listing) => (
          <ListingCard listing={listing} />
        ))}
      </section>
    </>
  );
}
