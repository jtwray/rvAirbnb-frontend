import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CalendarRangePicker from "../../../../utils/CalendarRangePicker";

export default function SingleListingView(props) {
  const params = useParams();
  const { listing } = props.location.state;
  const { title, price, photo } = listing;
  return (
    <div
      style={{
        background: "lightsalmon",
        color: "black",
        fontSize: "5rem",
        textShadow:
          "1px 1px .5px  darksalmon, -.1px -.1px .35px  white,-1px -1px .5px  firebrick",
      }}
    >
      <h1>
        {props.location.state.listing.title}
        <div width="50vw" className="subcardGroup cardImg">
          <img src={photo} alt={title} />
        </div>
        <CalendarRangePicker />
      </h1>
      <h2>here's the skinny on this wonderful slice of paradise </h2>
      "include calendar with available dates " "fetch reserved dates for this
      month-- grey out dates booked" "include a message button to open chat with
      vendor"
    </div>
  );
}
