import React, { useState } from "react";

export default function AmenitiesForm() {
  const [amenities, setAmenities] = useState({guests:0,beds:0,bath:0,wifi:false,kitchen:false,heat:false,water:false,shower:false,firepit:false});

  function handleChange(event) {
    setAmenities({ ...amenities, [event.target.name]: event.target.value });
    console.log({amenities})
  }
  return (
    <>
      <h1>amenities form</h1>

      <form>
        <label htmlFor="firepit">
          firepit
          <input
            type="checkbox"
            value={amenities.firepit}
            name="firepit"
            id="firepit"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="water">
          water
          <input
            type="checkbox"
            value={amenities.water||""}
            name="water"
            id="water"
            onChange={(event)=>setAmenities(...amenities,event.target.value)}
          />
        </label>

        <label htmlFor="shower">
          shower
          <input
            type="checkbox"
            value={amenities.shower}
            name="shower"
            id="shower"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="guests">
          guests
          <input
            type="text"
            value={amenities.guests}
            name="guests"
            id="guests"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="beds">
          beds
          <input
            type="text"
            value={amenities.beds}
            name="beds"
            id="beds"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="bath">
          bath
          <input
            type="text"
            value={amenities.bath}
            name="bath"
            id="bath"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="wifi">
          wifi
          <input
            type="checkbox"
            value={amenities.wifi}
            name="wifi"
            id="wifi"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="kitchen">
          kitchen
          <input
            type="checkbox"
            value={amenities.kitchen}
            name="kitchen"
            id="kitchen"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="heat">
          heat
          <input
            type="checkbox"
            value={amenities.heat}
            name="heat"
            id="heat"
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
}
