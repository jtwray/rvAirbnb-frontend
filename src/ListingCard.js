import React from "react";
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

  return (
    <>
      <div className="listingCard" key={props.key}>
        <div className="subcardGroup cardImg">
          <img src={photo} />
        </div>
        <div className="subcardGroup cardInfo">
          <h2 className="location_zipcode">
            Entire Apartment in zipcode: {location}
          </h2>
          <p className="subcard_description">{description} </p>

          <p className="subcard_amenities"> {amenities} </p>
        </div>
        <div className="subcardGroup CTA">
          <div className="favoriteBtn">🤍|💘</div>
          <p className="LO_id">{landowner_id} </p>
          <div className="subcard_price">{price}</div>
        </div>
      </div>
    </>
  );
}
