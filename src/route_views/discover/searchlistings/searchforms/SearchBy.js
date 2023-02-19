import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import "./SearchBy.css";
import { useForm } from "react-hook-form";
import CalendarRangePicker from "../../../../utils/CalendarRangePicker";
import RangeSlider from "../../../../utils/RangeSlider.js";
import { LoadingClackers } from "../../../../utils/LoadingClackers";

import SearchByForm from "./SearchByForm.js";

export default function SearchBy({
  setSearchResults,
  searchResults,
  searchDates,
  isLoading,
  currentLocation,
}) {


  return (
    <>
      <section className="searchByForm">
        <SearchByForm
          setSearchResults={setSearchResults}
          searchResults={searchResults}
          searchDates={searchDates}
          isLoading={isLoading}
          currentLocation={currentLocation}
        />
      </section>
    </>
  );
}
