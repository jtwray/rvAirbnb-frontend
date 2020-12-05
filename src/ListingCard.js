import React from "react";
import "./ListingCard.css";
export default function ListingCard(props) {
  return (
    <>
      <div className="listingCard" key={props.key}>
        <div className="subcardGroup cardImg">
          <img src={props.listing.photo} />
        </div>
        <div className="subcardGroup cardInfo">
          <h2 className="location_zipcode">
            Entire Apartment in zipcode: {props.listing.location}
          </h2>
          <p className="subcard_description">{props.listing.description} </p>
          <p className="subcard_amenities">{props.listing.amenities}</p>
        </div>
        <div className="subcardGroup CTA">
          <div className="favoriteBtn">🤍|💘</div>
          <p className="LO_id">{props.listing.landowner_id} </p>
          <div className="subcard_price">{props.listing.price}</div>
        </div>
      </div>
    </>
  );
}
