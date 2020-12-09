import { ThreeSixtyRounded } from "@material-ui/icons";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const ERROR = "ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const login = ({ username, password, email }, history) => (dispatch) => {
  dispatch({ type: START });
  setTimeout(() => {
    axiosWithAuth()
      .post(`auth/rv/login`, { username, password, email })
      .then(async (res) => {
        async function verifyCredentials() {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("currentUser", username);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        }
        let routeToDashboard = await verifyCredentials().then(
          () => console.log("pushing to dashboard"),
          history.push("/")
        );
      })
      .catch((err) => dispatch({ type: ERROR, payload: err }));
  }, 5000);
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
      history.push("/");
    })
    .catch((err) => dispatch({ type: ERROR, payload: err }));
};
