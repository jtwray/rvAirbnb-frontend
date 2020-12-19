import React, { useState } from "react";

export default function DateForm() {
  const [date, setDate] = useState({arrive_date:"",leave_date:""});

  function handleChange(event) {
    setDate({ ...date, [event.target.name]: event.target.value });
  }

  return (
    <>
      <h1>date form</h1>

      <form>
        <label htmlFor="arrive_date">
          arrive date
          <input
            type="calendar"
            value={date.arrive_date}
            name="arrive_date"
            id="arrive_date"
            onChange={handleChange}
          />
        </label>
        
        <label htmlFor="leave_date">
          leave date
          <input
            type="calendar"
            value={date.leave_date}
            name="leave_date"
            id="leave_date"
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
}
