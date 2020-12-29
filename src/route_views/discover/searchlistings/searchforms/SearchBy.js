import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import "./SearchBy.css";
import { useForm } from "react-hook-form";
import CalendarRangePicker from "../../../../utils/CalendarRangePicker";
import RangeSlider from "../../../../utils/RangeSlider.js";
import { LoadingClackers } from "../../../../utils/LoadingClackers";
import { LocationForm } from "./LocationForm.js";

export default function SearchBy({
  setSearchResults,
  searchResults,
  searchDates,
  isLoading,
  currentLocation,
}) {
  const [searchBy, setSearchBy] = useState("dates");
  const [searchTerms, setSearchTerms] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  // let today = new Date();
  // let todays_date =
  //   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  // let start_date = searchDates?.start_date
  //   ? searchDates.start_date
  //   : `${todays_date}`;
  // let end_date = searchDates?.end_date
  //   ? searchDates.end_date
  //   : `${todays_date}`;
  function handleChange(e) {
    setSearchTerms(e.target.value);
  }

  function handleSearchLocation(e) {
    e.preventDefault();
    setSearchLocation(e.target.textContent);
    document
      .querySelectorAll("button.searchByLocation")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  }

  function handleSelectSearchBy(e) {
    e.preventDefault();
    setSearchBy(e.target.textContent);
    document
      .querySelectorAll("button.SearchBy")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  }

  function searchForListingsBy(searchTerms) {
    axiosWithAuth()
      .post(`http://localhost:8001/api/search/${searchBy}`, {
        searchTerms,
      })
      .then((res) => setSearchResults(res.data.listings))
      .catch((e) => console.error(e));
    console.log({ searchTerms, searchResults });
  }

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {},
  });

  const [submitting, setSubmitting] = useState(false);
  const { dirtyFields } = formState;

  return (
    <>
      <section
        style={{ width: "100vw", display: "flex", flexDirection: "column" }}
      >
        <div style={{ width: "100vw", display: "flex", height: "40px" }}>
          <button className="SearchBy" onClick={(e) => handleSelectSearchBy(e)}>
            dates
          </button>
          <button className="SearchBy" onClick={(e) => handleSelectSearchBy(e)}>
            price
          </button>
          <button className="SearchBy" onClick={(e) => handleSelectSearchBy(e)}>
            location
          </button>
          <button className="SearchBy" onClick={(e) => handleSelectSearchBy(e)}>
            amenities
          </button>
        </div>
        <div className="discover--SubmitContainer" >
        <div className="discover--SubmitContainer searchBy-status" >
            <h2
              style={{ width: "125px", textAlign: "left", padding: "0 1rem" }}
            >
              search by:
            </h2>
            <p> - {searchBy} - </p>
          </div>
          <div className="button">
            <button type="submit" disabled={isLoading}>
              find listings!
              {isLoading && <span>{<LoadingClackers />} </span>}
            </button>
          </div>
        </div>
        <form
          onChange={(e) =>
            setSearchTerms({ ...searchTerms, [e.target.name]: e.target.value })
          }
          style={{ fontSize: "4rem" }}
          onSubmit={handleSubmit(async (formData) => {
            console.log({ formData }, { searchTerms });
            setSubmitting(true);
            try {
              let { username, password, email } = formData;
              searchForListingsBy(searchTerms);
            } catch (error) {
              console.error(error);
            }
            setSubmitting(false);
          })}
        >
          {searchBy === "dates" ? (
            <CalendarRangePicker
              searchTerms={searchTerms}
              setSearchTerms={setSearchTerms}
            />
          ) : (
            ""
          )}
          {searchBy === "price" ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: " row",
                justifyContent: " space-around",
                border: "solid .2rem blueviolet",
                padding: "2rem 1rem",
                background: "silver",
              }}
            >
              <h2> Set Price Range</h2>
              <RangeSlider
                setSearchTerms={setSearchTerms}
                searchTerms={searchTerms}
                value={searchTerms["min value"]}
                min={1}
                max={2000}
                label={"min_price_slider"}
                classname={"priceslider"}
              />
              <RangeSlider
                setSearchTerms={setSearchTerms}
                searchTerms={searchTerms}
                value={searchTerms["max value"]}
                min={1}
                max={2000}
                label={"max_price_slider"}
                classname={"priceslider"}
              />
            </div>
          ) : (
            ""
          )}
          {searchBy === "location" ? (
            <div className="input location">
              <div>
                <h3>search listings near</h3>
                <button
                  className="searchByLocation"
                  onClick={(e) => handleSearchLocation(e)}
                >
                  current location
                </button>
                <button
                  className="searchByLocation"
                  onClick={(e) => handleSearchLocation(e)}
                >
                  zip
                </button>
                <button
                  className="searchByLocation"
                  onClick={(e) => handleSearchLocation(e)}
                >
                  city/state
                </button>

                {searchLocation == null ? (
                  ""
                ) : searchLocation == "zip" ? (
                  <div className="inputBox">
                    <label htmlFor="zip">zip</label>
                    <input ref={register} name="zip" />
                    <label htmlFor="range">range</label>
                    <input ref={register} name="range" />
                  </div>
                ) : searchLocation == "city/state" ? (
                  <div className="inputBox">
                    <label htmlFor="city">city</label>
                    <input ref={register} name="city" />
                    <label htmlFor="state">state</label>
                    <input ref={register} name="state" />
                    <label htmlFor="range">range</label>
                    <input ref={register} name="range" />
                  </div>
                ) : searchLocation == "current location" ? (
                  <div className="inputBox">
                    distance from {currentLocation}:
                    <label htmlFor="range">range</label>
                    <input ref={register} name="range" />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </form>
      </section>
    </>
  );
}
