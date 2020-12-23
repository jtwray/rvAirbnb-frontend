import react, { useEffect,useState } from "react";
import Slider from "react-smooth-range-input";

const RangeSlider = ({ value, min, max ,searchTerms,setSearchTerms}) => {

    
    const[rvalue,setValue]=useState()
  useEffect(() => {
    if (value) {
      console.log({ value },{searchTerms});
    }
  }, [value,searchTerms]);
  return (
    <>
    <label style={{position:"unset",}} htmlFor="minPriceSlider">min price</label>
      <Slider id="minPriceSlider" value={value} min={min} max={max} onChange={(value)=>{setSearchTerms(value)}}/>

    </>
  );
};
export default RangeSlider;
