import react, { useEffect,useState } from "react";
import Slider from "react-smooth-range-input";

const RangeSlider = ({ value, min, max }) => {


  return (
    <>
      <Slider value={value} min={min} max={max} />

    </>
  );
};
export default RangeSlider;
