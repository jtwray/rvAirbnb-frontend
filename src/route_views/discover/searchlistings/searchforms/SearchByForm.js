import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import CalendarRangePicker from "../../../../utils/CalendarRangePicker";
import RangeSlider from "../../../../utils/RangeSlider.js";

import "./SearchByForm.css";

export default function SearchByForm({
  setSearchResults,
  searchResults,
  searchDates,
  isLoading,
  currentLocation,
}) {
  const buttonsStyle = {
    width: "500px",
    margin: "0 auto",
    display: "flex",
    height: "40px",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const [searchBy, setSearchBy] = useState("currentLocation");
  const [searchTerms, setSearchTerms] = useState(currentLocation);
  const [searchLocationOption, setSearchLocationOption] = useState();
  const { register, handleSubmit, formState } = useForm();

  const handleSetSearchBy = (e, option) => {
    e.preventDefault();
    setSearchBy(option);
    document
      .querySelectorAll("button.SearchBy")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  const handleLocationSearchOption = (e, option) => {
    e.preventDefault();
    setSearchLocationOption(option);
    document
      .querySelectorAll("button.searchByLocation")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  const searchForListingsBy = (data) => {
    let query = { ...searchTerms, ...data };
    console.log({ query });
    axiosWithAuth()
      .post(`api/search/${searchBy}`, {
        ...searchTerms,
        ...data,
      })
      .then((res) => setSearchResults(res.data.listings))
      .catch((e) => console.error(e));
    console.log({ searchTerms, searchResults });
  };

  return (
    <form className="searchByForm" onSubmit={handleSubmit(searchForListingsBy)}>
      <h2 style={{ color: "white" }}>search options</h2>

      <div style={buttonsStyle}>
        <button
          className="SearchBy"
          onClick={(e) => handleSetSearchBy(e, "dates")}
        >
          dates
        </button>
        <button
          className="SearchBy"
          onClick={(e) => handleSetSearchBy(e, "price")}
        >
          price
        </button>
        <button
          className="SearchBy"
          onClick={(e) => handleSetSearchBy(e, "location")}
        >
          location
        </button>
        <button
          className="SearchBy"
          onClick={(e) => handleSetSearchBy(e, "amenities")}
        >
          amenities
        </button>
      </div>
      <input type="submit" />

      {searchBy === "location" ? (
        <>
          <h3 style={{ color: "white" }}>Search Location Options</h3>
          <div style={buttonsStyle}>
            <button
              className="SearchBy"
              onClick={(e) => handleLocationSearchOption(e, "zip")}
            >
              zip
            </button>
            <button
              className="SearchBy"
              onClick={(e) => handleLocationSearchOption(e, "city/state")}
            >
              city, state
            </button>
            <button
              className="SearchBy"
              onClick={(e) => handleLocationSearchOption(e, "current location")}
            >
              current location
            </button>
          </div>
        </>
      ) : (
        ""
      )}

      {searchBy === "location" && searchLocationOption ? (
        <>
          {searchLocationOption === "zip" ? (
            <>
              <label>zip</label>
              <input type="text" name="zip" ref={register} />
            </>
          ) : (
            ""
          )}
          {searchLocationOption === "city/state" ? (
            <>
              <label>city, state</label>
              <input type="text" name="city/state" ref={register} />
            </>
          ) : (
            ""
          )}
          {searchLocationOption === "currentLocation" ? (
            <>
              <label>currentLocation</label>
              <input type="text" name="currentLocation" ref={register} />
            </>
          ) : (
            ""
          )}
          {searchLocationOption === "city/state" ? "" : ""}
          {searchLocationOption === "currentLocation" ? "" : ""}
        </>
      ) : (
        ""
      )}
      {searchBy === "dates" ? (
        <CalendarRangePicker
          searchTerms={searchTerms}
          setSearchTerms={setSearchTerms}
        />
      ) : (
        ""
      )}
      {searchBy === "price" ? (
        <div className="priceRangeContainer">
          <h2> Set Price Range</h2>
          <RangeSlider
            setSearchTerms={setSearchTerms}
            searchTerms={searchTerms}
            min={1}
            value={register}
            max={2000}
            label={"min_price_slider"}
            classname={"priceslider"}
          />
          <RangeSlider
            setSearchTerms={setSearchTerms}
            searchTerms={searchTerms}
            min={1}
            value={register}
            max={2000}
            label={"max_price_slider"}
            classname={"priceslider"}
          />
        </div>
      ) : (
        ""
      )}
      {searchBy === "amenities" ? (
        <>
          <div className="amenitiesContainer">
            <h4 style={{ color: "white" }}>
              select any amenities you can't live without on this adventure
            </h4>
            <div>
              <label htmlFor="guests">
                guests
                <input name="guests" type="text" ref={register} />
              </label>
            </div>
            <div>
              <label htmlFor="beds">
                beds
                <input name="beds" type="text" ref={register} />
              </label>
            </div>
            <div>
              <label htmlFor="bath">
                bath
                <input name="bath" type="text" ref={register} />
              </label>
            </div>
            <div className="checkboxContainer">
              <div>
                <label htmlFor="wifi">wifi</label>
                <input
                  name="wifi"
                  type="checkbox"
                  value="true"
                  ref={register}
                />
              </div>
              <div>
                <label htmlFor="kitchen">kitchen</label>
                <input
                  name="kitchen"
                  type="checkbox"
                  value="true"
                  ref={register}
                />
              </div>
              <div>
                <label htmlFor="water">water</label>
                <input
                  name="water"
                  type="checkbox"
                  value="true"
                  ref={register}
                />
              </div>
              <div>
                <label htmlFor="shower">shower</label>
                <input
                  name="shower"
                  type="checkbox"
                  value="true"
                  ref={register}
                />
              </div>
              <div>
                <label htmlFor="firepit">firepit</label>
                <input
                  name="firepit"
                  type="checkbox"
                  value="true"
                  ref={register}
                />
              </div>
              <div>
                <label htmlFor="heat">heat</label>
                <input
                  name="heat"
                  type="checkbox"
                  value="true"
                  ref={register}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </form>
  );
}
