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
      <Slider value={value} min={min} max={max} onChange={(value)=>{setSearchTerms(value)}}/>

    </>
  );
};
export default RangeSlider;
