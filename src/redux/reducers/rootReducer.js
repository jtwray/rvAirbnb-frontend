import {
  START,
  ERROR,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  UPDATE_GEOCOORDS,
  SETADDRESS,
} from "../actions";
import { initialState } from "../store";

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case START: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentToken: action.payload.token,
        currentUser: action.payload.username,
        currentId: action.payload.id,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentToken: action.payload.token,
        currentUser: action.payload.username,
        currentId: action.payload.id,
      };
    }
    case UPDATE_GEOCOORDS: {
      return {
        ...state,
        isLoading: false,
        currentGeoLocation: action.payload,
      };
    }
    case SETADDRESS: {
      return {
        ...state,
        isLoading: false,
        currentAddress: action.payload.data.data[0],
      };
    }
    case ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
}
