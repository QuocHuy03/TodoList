import { AUTH_ACTION_TYPES } from "../constants";

export const loginRequest = () => ({
  type: AUTH_ACTION_TYPES.LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: AUTH_ACTION_TYPES.LOGIN_FAILURE,
  payload: error,
});

