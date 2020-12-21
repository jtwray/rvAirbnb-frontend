import React, { useEffect, useState } from "react";
import axios from "axios";
export default function SearchBy({setSearchResults}) {
  const [searchBy, setSearchBy] = useState("dates");
  let startDate='2020-12-01';
  let endDate='2020-12-06';
  useEffect(() => {
    axios
      .post(`http://localhost:8001/api/listing/searchdates`,{startDate,endDate})
      .then((res) => setSearchResults(res.data.listings))
      .catch((e) => console.error(e));
  }, [searchBy]);
  return (
    <section>
      <h2>set search option</h2>
      <button onClick={(e) =>{ e.target.style.color=='indigo'?e.target.style.color=='white':e.target.style.color=='indigo'; setSearchBy("dates")}}>dates</button>
      <button onClick={() => setSearchBy("price")}>price</button>
      <button onClick={() => setSearchBy("location")}>location</button>
      <button onClick={() => setSearchBy("amenities")}>amenities</button>

      {searchBy === "date" && <div> "date" </div>}
      {searchBy === "amenities" && <div> "amenities"</div>}
      {searchBy === "location" && <div> "location" </div>}
      {searchBy === "price" && <div> "price" </div>}
    </section>
  );
}
