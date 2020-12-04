import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const ERROR = "ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const login = ({ username, password, email }, history) => (dispatch) => {
  dispatch({ type: START });
  axiosWithAuth()
    .post(`auth/rv/login`, { username, password, email })
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("currentUser", username);
      localStorage.setItem("token", res.data.token);
      history.push("/", { currentUser: username });
    })
    .catch((err) => dispatch({ type: ERROR, payload: err }));
};

export const signup = ({ username, password, email }, history) => (
  dispatch
) => {
  dispatch({ type: START });
  axiosWithAuth()
    .post(`auth/rv/register`, { username, password, email })
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      localStorage.setItem("currentUser", username);
      localStorage.setItem("token", res.data.token);
      history.push("/", { currentUser: username });
    })
    .catch((err) => dispatch({ type: ERROR, payload: err }));
};
