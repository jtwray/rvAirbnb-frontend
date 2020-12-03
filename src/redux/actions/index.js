import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ERROR = "ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";

export const getFriends = () => (dispatch) => {
  dispatch({ type: START });
  axiosWithAuth()
    .get(`friends`)
    .then((res) => dispatch({ GET_FRIENDS_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ERROR, payload: err }));
};
export const addFriend = (friendObj) => (dispatch) => {
  dispatch({ type: ADD_FRIEND_START });
  console.log("actions addFriend", friendObj);
  axiosWithAuth()
    .post(`api/friends`, friendObj)
    .then((res) => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: ERROR, payload: err }));
};

export const login = ({ username, password, email }, history) => (dispatch) => {
  dispatch({ type: START });
  console.log("action", { username, password, email, history });
  axiosWithAuth()
    .post(`auth/rv/login`, { username, password, email })
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data, history });
    })
    .catch((err) => dispatch({ type: ERROR, payload: err }));
};
