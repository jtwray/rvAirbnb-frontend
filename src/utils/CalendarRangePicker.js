import React, { useState, useEffect } from "react";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";

export default function CalendarRangePicker({ searchTerms, setSearchTerms }) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    if (startDate && endDate) {
      setSearchTerms({
        start_date: startDate?.toISOString().split("T")[0],
        end_date: endDate?.toISOString().split("T")[0],
      });
    }
  }, [endDate]);
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format="yyyyMMdd"
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div
          className="date-range"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <input
            style={{ width: "200px" }}
            className={"input" + (focus === START_DATE ? " -focused" : "")}
            {...startDateInputProps}
            placeholder="Start date"
          />
          <span className="date-range_arrow" />
          {startDate && (
            <input
              style={{ width: "200px" }}
              className={"input" + (focus === END_DATE ? " -focused" : "")}
              {...endDateInputProps}
              placeholder="End date"
            />
          )}
        </div>
      )}
    </DateRangePicker>
  );
}
