import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  errorMessage: undefined,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isFetching: true,
      };

    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetching: false,
        errorMessage: null,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: undefined,
        isFetching: false,
      };

    case UserActionTypes.CHECK_USER_SESSION:
      return {
        ...state,
      };

    default:
      return state;
  }
};
