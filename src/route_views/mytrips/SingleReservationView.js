import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleListingView(props) {
  console.log({ props });

  return (
    <div>
      <h1>{props.location.state.listing.title}
      </h1>
      <h2>here's the skinny on this wonderful slice of paradise </h2>
      "include calendar with available dates " "fetch reserved dates for this
      month-- grey out dates booked" "include a message button to open chat with
      vendor"
    </div>
  );
}
