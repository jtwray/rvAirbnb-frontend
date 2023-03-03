import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

export const START = "START";
export const ERROR = "ERROR";
export const SETADDRESS = "SETADDRESS";
export const UPDATE_GEOCOORDS = "UPDATE_GEOCOORDS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
function demoCredentials() {
  localStorage.setItem("token", "demoToken");
  localStorage.setItem("currentUser", "demoToken");
  localStorage.setItem("currentId", 1);
  dispatch({ type: SIGNUP_SUCCESS, payload: "demoToken" });
  dispatch({ type: LOGIN_SUCCESS, payload: "demoToken" });
}
export const login = ({ username, password, email }, navigate) => (dispatch) => {
  dispatch({ type: START });

  setTimeout(() => {
    process.env.REACT_APP_DEMO === true ? demoCredentials() :
      axiosWithAuth()
        .post(`auth/rv/login`, { username, password, email })
        .then(async (res) => {
          async function verifyCredentials(res) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("currentUser", username);
            localStorage.setItem("currentId", res.data.id);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
          } (res).then(
            () => console.log("pushing to dashboard"),
            navigate("/home")
          );
        })
        .catch((err) => dispatch({ type: ERROR, payload: err }));
  }, 1500);
};

export const signup = ({ username, password, email }, navigate) => (
  dispatch
) => {
  dispatch({ type: START });
  process.env.REACT_APP_DEMO === true ? demoCredentials() :
    axiosWithAuth()
      .post(`auth/rv/register`, { username, password, email })
      .then((res) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        localStorage.setItem("currentUser", username);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("currentId", res.data.id);
        navigate("/home");
      })
      .catch((err) => dispatch({ type: ERROR, payload: err }));
};

export const getCoords = () => (dispatch) => {
  dispatch({ type: START });
  const onChange = ({ coords }) => {
    dispatch({ type: UPDATE_GEOCOORDS, payload: coords });
  };
  const onError = (err) => {
    dispatch({ type: ERROR, payload: err });
  };
  const geo = navigator.geolocation;
  if (!geo) {
    dispatch({
      type: ERROR,
      payload: { error: { message: "Geolocation is not supported" } }
    });
  }
  let watcher = geo.watchPosition(onChange, onError);
  return () => geo.clearWatch(watcher);
};

export const updateCoords = (coords) => (dispatch) => {
  console.log("coords in update coords action line67", coords);
  dispatch({ type: START });
  try {
    dispatch({ type: UPDATE_GEOCOORDS, payload: coords });
  } catch (err) {
    console.error("error in the updateCoords action", err);
    dispatch({ type: ERROR, payload: err });
  }
};

// export const getLocationByLatLng = (lat, lng) =>dispatch=>{
//   dispatch({type:START})

//   axios.get(
//     `${process.env.REACT_APP_GOOGLE_MAP_API_URL}?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_API}`
//   )
//  .then((res) => {
//     dispatch({ type: SETADDRESS, payload: res.data });
//   })
//   .catch((err) => dispatch({ type: ERROR, payload: err }));
// };

export const setAddress = (lat, lon) => (dispatch) => {
  console.log("lat", lat, "lon", lon);
  dispatch({ type: START });
  axiosWithAuth()
    .post(`api/listing/geo_address`, { lat, lon })
    .then((res) => {
      dispatch({ type: SETADDRESS, payload: res.data });
    })
    .catch((err) => {
      console.error(`error in the setAddress action||${err}`);
      dispatch({ type: ERROR, payload: err });
    });
};
