import React, { useState,useEffect } from "react";

export function LocationForm({ searchLocation, register }) {
  const [location, setLocation] = useState("");

  function handleChange(event) {
    setLocation({ ...location, [event.target.name]: event.target.value });
  }
console.log("searchLocation",searchLocation)
let location_form;
useEffect(()=>{
   location_form=
  searchLocation === null ? (
    ""
  ) : (searchLocation = "current location") ? (
    <>
      <label htmlFor="range">range</label>
      <input
        placeholder={searchLocation}
        name="range"
        ref={register}
        type="text"
      />

      {searchLocation}
    </>
  ) : (searchLocation === "zip") ? (
    <>
    {searchLocation}
      <label htmlFor="range">range</label>
      <input
        placeholder={searchLocation}
        name="range"
        ref={register}
        type="text"
        />
      <label htmlFor="zip">zip</label>
      <input name="zip"  type="text" ref={register} />
    </>
  ) : (searchLocation === "city/state") ? (
    <>
    {searchLocation}
      <label htmlFor="range">range</label>
      <input
        placeholder={searchLocation}
        name="range"
        ref={register}
        type="text"
        />
      <label htmlFor="city">city</label>
      <input name="city" type="text" ref={register} />
      <label htmlFor="state">state</label>
      <input name="state" type="text" ref={register} />
    </>
  ) : (
""
    
  )

},[searchLocation])

  return (
    <>
      <h1>Location Form</h1>
  <div style={{display:"flex",color:"black",background:"white",border:"green solid 2rem",minHeight:"400px",width:"100%"}}>{location_form}</div> 
    </>
  );
}
