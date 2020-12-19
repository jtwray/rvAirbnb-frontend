import React, { useState } from "react";

export default function LocationForm() {
  const [location, setLocation] = useState("");

  function handleChange(event) {
    setLocation({ ...location, [event.target.name]: event.target.value });
  }

  return (
    <>
      <h1>Location Form</h1>

      <form>
        <label htmlFor="location">
          location
          <input
            type="checkbox"
            value={location}
            name="location"
            id="location"
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
}
