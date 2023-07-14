import { TODO_ACTION_TYPES } from "../constants";

export function getTodo(todo) {
  return {
    type: TODO_ACTION_TYPES.GET_TODO_SUCCESS,
    payload: todo,
  };
}

export function addTodo(todo) {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
    payload: todo,
  };
}

export function removeTodo(todo) {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS,
    payload: todo,
  };
}

export function updateTodo(todo) {
  return {
    type: TODO_ACTION_TYPES.UPDATE_TODO_STATUS_SUCCESS,
    payload: todo,
  };
}
