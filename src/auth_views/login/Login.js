import React, { useState, useEffect } from "react";
import { login } from "../../redux/actions/index.js";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import axios from "axios";
import logo from "../../images/logo.png";
import bgImage from "../../images/tallNightSky.png";
import { useFetchImg } from "../../utils/hooks/useFetchImg";

const left = {
  display: "flex",
  width: "50%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center"
};
const right = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "50%",
  height: "100%",
  boxShadow: "-1px 0px 5px .2px black"
};

function Login(props) {
  const [images, setImages] = useState([]);
  const [i] = useFetchImg(images, setImages);

  function getRanNum(n) {
    return Math.floor(Math.random() * n) + 1;
  }
  const [image, setImage] = useState("");

  useEffect(() => {
    i.length && setImage(i[getRanNum(9)].urls.full);
  }, [i]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        padding: "0",
        border: " #f50057 solid .5rem",
        fontSize: "4rem"
      }}
    >
      <div
        className="half left image"
        style={{
          ...left,
          backgroundImage: `url(${bgImage})`
        }}
      ></div>
      <div className="half right form authform" style={right}>
        <LoginForm login={props.login} isLoading={props.isLoading} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { isLoading: state.isLoading };
}
export default connect(mapStateToProps, { login })(Login);
