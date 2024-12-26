import { LOGIN, LOGOUT, FETCH_USER_SUCCESS, FETCH_USER_ERROR, UserActionTypes } from "./actions";

export interface UserState {
  user: { uid: string; email: string } | null;
  userData: any | null; // Adjust `any` if you have a known type for user data
  error: string | null;
}

const initialState: UserState = {
  user: null,
  userData: null,
  error: null,
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null, userData: null, error: null };
    case FETCH_USER_SUCCESS:
      return { ...state, userData: action.payload, error: null };
    case FETCH_USER_ERROR:
      return { ...state, userData: null, error: action.payload };
    default:
      return state;
  }
};
