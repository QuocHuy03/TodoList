import { combineReducers } from "redux";
import { todoReducer } from "./todo.reducer";

export const todolistReducer = combineReducers({
  todo: todoReducer,
});
