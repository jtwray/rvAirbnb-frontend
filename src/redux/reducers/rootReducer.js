import {
  START,
  ADD_FRIEND_START,
  ERROR,
  LOGIN_SUCCESS,
  ADD_FRIEND_SUCCESS,
  GET_FRIENDS_SUCCESS
} from "../actions";
import { initialState } from "../store";

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case START: {
      return { ...state };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem(`token`, action.payload);
      action.payload.history.push("/dashboard");
      return { ...state, isLoading: false };
    }
    case ERROR:
      return {
        ...state,
        isError: true,
        error: action.payload
      };
    default:
      return { ...state };
  }
}
