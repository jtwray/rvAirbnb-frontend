import React, { useState } from "react";
import "./ReservationCard.css";

export default function ReservationCard(props) {
  const {styleOBJ_card, Reservation } = props;
  const { photo, address, title, price, landowner_id, id } = Reservation;
  console.log("ReservationCard props.Reservation",props.Reservation)
  // console.log({Reservation},{ props }, { amenities }, JSON.parse(amenities));
  if (!props.Reservation || props.Reservation.length === 0) {
    return <h2>"Loading Spinner"</h2>;
  }
{/**
address: "{"address":"30 Memorial Drive","city":"Avon","state":"MA","zip":"2322"}"
id: 1
landowner_id: 28
photo: "https://i.imgur.com/zmbaXFD.jpg"
price: "$98.13"
title: "Lake Front Dream Escap

*/}
  return (
    <div style={styleOBJ_card} className="ReservationCard" key={id}>
      <div className="subcardGroup cardImg">
        <img src={photo} alt={title} />
      </div>
      <div className="subcardGroup cardInfo">
        <h2 className="location_zipcode">
          Entire Apartment in zipcode: {address}
        </h2>
        <p className="subcard_description">{title} </p>

        <p className="subcard_amenities">
          {/* <ul>
            {Object.entries(amenities).map(([key, value]) => (
              <li>
                {key}:{value.toString()}
              </li>
            ))}
          </ul> */}
        </p>
      </div>
      <div className="subcardGroup CTA">
        <div className="favoriteBtn">🤍|💘</div>
        <p className="Vendor_id">{landowner_id} </p>
        <div className="subcard_price">
          {price}{" "}
          <button onClick={(e) => {props.routeToSingleReservation(e,Reservation)}}>
            intrigued?
          </button>
        </div>
      </div>
    </div>
  );
}
