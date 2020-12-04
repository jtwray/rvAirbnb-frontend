import { START, ERROR, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../actions";
import { initialState } from "../store";

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case START: {
      return { ...state };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentToken: action.payload.token,
        currentUser: action.payload.username
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentToken: action.payload.token,
        currentUser: action.payload.username
      };
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
