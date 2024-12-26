export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

// Action interfaces
export interface LoginAction {
  type: typeof LOGIN;
  payload: { uid: string; email: string };
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: any; // Adjust `any` to the specific user data type if known
}

export interface FetchUserErrorAction {
  type: typeof FETCH_USER_ERROR;
  payload: string;
}

// Union type for actions
export type UserActionTypes =
  | LoginAction
  | LogoutAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;

// Action creators
export const login = (user: { uid: string; email: string }): LoginAction => ({
  type: LOGIN,
  payload: user,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const fetchUserSuccess = (user: any): FetchUserSuccessAction => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserError = (error: string): FetchUserErrorAction => ({
  type: FETCH_USER_ERROR,
  payload: error,
});
