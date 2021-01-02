import React, { useEffect } from "react";
import Slider from "react-smooth-range-input";

const RangeSlider = ({
  value,
  min,
  max,
  searchTerms,
  setSearchTerms,
  label,
  classname
}) => {
  function removeSliderFromLabelText(labelText) {
    return [
      labelText.split("_").splice(0, 2).join(" "),
      labelText.split("_").splice(0, 2).join("_")
    ];
  }

  const [labeltext, stateVar] = removeSliderFromLabelText(label);

  return (
    <div className={classname}>
      <label htmlFor={label}>{labeltext}</label>
      <Slider
        id={label}
        value={value}
        min={min}
        max={max}
        onChange={(value) => {
          setSearchTerms({ ...searchTerms, [stateVar]: value });
        }}
      />
    </div>
  );
};
export default RangeSlider;
