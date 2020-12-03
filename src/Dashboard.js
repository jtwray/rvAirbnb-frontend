import React from "react";
import { useLocation } from "react-router-dom";

export default function Dashboard(props) {
  const location = useLocation();
  return (
    <>
      <h1>welcome {location?.state?.username}!</h1>
      dashboard will flesh out here
    </>
  );
}
