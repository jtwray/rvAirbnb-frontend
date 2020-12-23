import react, { useEffect } from "react";
import Slider from "react-smooth-range-input";

const RangeSlider = ({
  value,
  min,
  max,
  searchTerms,
  setSearchTerms,
  labelstyle,
  label,
  classname,
}) => {
  let valueName = value;
  console.log({ label }, { searchTerms }, { value });
  useEffect(() => {
    if (value) {
      console.log({ value }, { searchTerms });
    }
  }, [value, searchTerms]);

  function removeSliderFromLabelText(labelText) {
    return labelText.split("_").splice(0, 2).join(" ");
  }
  const labeltext = removeSliderFromLabelText(label);

  return (
    <div className={classname}>
      <label htmlFor={label}>{labeltext}</label>
      <Slider
        id={label}
        value={valueName}
        min={min}
        max={max}
        onChange={(value) => {
          setSearchTerms({ ...searchTerms, [labeltext]: value });
        }}
      />
    </div>
  );
};
export default RangeSlider;
