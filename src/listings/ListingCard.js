import React, { useState } from "react";
import "./ListingCard.css";
export default function ListingCard(props) {
  let {
    amenities,
    photo,
    location,
    description,
    price,
    landowner_id,
  } = props.listing;

  if (!props.listing || props.listing.length === 0) {
    return <h2>"Loading Spinner"</h2>;
  }

  return (
    <>
      <div className="listingCard" key={props.key}>
        <div className="subcardGroup cardImg">
          <img src={photo} alt={description} />
        </div>
        <div className="subcardGroup cardInfo">
          <h2 className="location_zipcode">
            Entire Apartment in zipcode: {location}
          </h2>
          <p className="subcard_description">{description} </p>

          <p className="subcard_amenities">
            {" "}
            <ul>
            {Object.entries(amenities).map(
                ([key,value]) => (
                <li>
                  {key}:{value.toString()}
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div className="subcardGroup CTA">
          <div className="favoriteBtn">🤍|💘</div>
          <p className="Vendor_id">{landowner_id} </p>
          <div className="subcard_price">
            {price}{" "}
            <button onClick={props.routeToSingleListing}>intrigued?</button>
          </div>
        </div>
      </div>
    </>
  );
}
