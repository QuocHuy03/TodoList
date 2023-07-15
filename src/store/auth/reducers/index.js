import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";

export const authenticationReducer = combineReducers({
  auth: authReducer,
});
