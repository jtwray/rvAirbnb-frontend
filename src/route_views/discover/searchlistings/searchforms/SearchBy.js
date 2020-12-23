import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import "./SearchBy.css";
import { useForm } from "react-hook-form";
import  CalendarRangePicker from "../../../../utils/CalendarRangePicker";

export default function SearchBy({
  setSearchResults,
  searchResults,
  searchDates,
},props) {
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

  function searchForListingsBy(event) {
    event.preventDefault();
    axiosWithAuth()
      .post(`http://localhost:8001/api/search/${searchBy}`, {
        start_date,
        end_date,
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
            setSubmitting(true);
            try {
              let { username, password, email } = formData;

              props.login(formData, history);
            } catch (error) {
              console.error(error);
            }
            setSubmitting(false);
          })}
        >{searchBy==="dates" ?<CalendarRangePicker />:""}
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
              ref={register({ required: "required" })}
            />
            {errors.search ? <p>search required</p> : null}
          </div>
          <div className="button">
            <button type="submit" disabled={props.isLoading}>
              find listings!
              {props.isLoading && <span>{<LoadingClackers />} </span>}
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
