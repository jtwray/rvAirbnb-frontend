import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import "./SearchBy.css";
import { useForm } from "react-hook-form";
import CalendarRangePicker from "../../../../utils/CalendarRangePicker";
import RangeSlider from "../../../../utils/RangeSlider.js";
import { LoadingClackers } from "../../../../utils/LoadingClackers";

export default function SearchBy({
  setSearchResults,
  searchResults,
  searchDates,
  isLoading,
}) {
  const [searchBy, setSearchBy] = useState("dates");
  const [searchTerms, setSearchTerms] = useState("");
  let today = new Date();
  let todays_date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  let start_date = searchDates?.start_date
    ? searchDates.start_date
    : `${todays_date}`;
  let end_date = searchDates?.end_date
    ? searchDates.end_date
    : `${todays_date}`;
  function handleChange(e) {
    setSearchTerms(e.target.value);
  }
  function handleSelectSearchBy(e) {
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
    console.log({ searchBy }, { searchResults });
  }

  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: { username: "", email: "", password: "", terms: false },
  });

  const [submitting, setSubmitting] = useState(false);
  const { dirtyFields } = formState;

  return (
    <>
      <section
        style={{ width: "100vw", display: "flex", flexDirection: "column" }}
      >
        <form
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
            <div className="input">
              {dirtyFields.search ? (
                <label className="isDirty" htmlFor="search">
                  search
                </label>
              ) : (
                <label htmlFor="search">search</label>
              )}

              <input
                autoComplete="off"
                type="search"
                name="search"
                id="search"
                value={Object.values(searchTerms)}
                ref={register({ required: "required" })}
              />
              {errors.search ? <p>search required</p> : null}
            </div>
          ) : (
            ""
          )}
          <div className="button">
            <button type="submit" disabled={isLoading}>
              find listings!
              {isLoading && <span>{<LoadingClackers />} </span>}
            </button>
          </div>
        </form>
        <div
          style={{
            display: "flex",
            width: "300px",
            transition: "all 1s",
            backgroundColor: "darkgray",
            color: "indigo",
            borderRadius: "5px",
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "800",
            textShadow: ` .5px .5px 0.1px black,
            -.5px -.5px  .1px white,
            .5px -.5px 1px black,
            -.5px -.5px  1px white`,
            boxShadow:
              "inset 1px 1px 1px 1px white,inset -1px -1px 1px 1px white,-1px -1px 1px 1px black,0px 15px 15px -15px grey",
            marginBottom: "1rem",
          }}
        >
          <h2 style={{ width: "125px", textAlign: "left", padding: "0 1rem" }}>
            search by:
          </h2>

          <p> - {searchBy} - </p>
        </div>
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
      </section>
    </>
  );
}

{
  /**

add submit button on prps object?

*/
}
