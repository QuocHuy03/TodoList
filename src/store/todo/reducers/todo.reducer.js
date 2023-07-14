import { TODO_ACTION_TYPES } from "../constants";
import { db } from "../../../firebaseConfig";
import "firebase/firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const todosCollectionRef = collection(db, "todos");

export const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  console.log("Action Reducer: ", action);
  switch (action?.type) {
    case TODO_ACTION_TYPES.ADD_TODO_SUCCESS:
      const newTodo = {
        ...action.payload,
      };
      addDoc(todosCollectionRef, newTodo);
      return {
        todos: state.todos.concat(newTodo),
      };
    case TODO_ACTION_TYPES.UPDATE_TODO_STATUS_SUCCESS:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      const todoDocUpdate = doc(db, "todos", action.payload.id);
      const updateData = { completed: !action.payload.completed };
      updateDoc(todoDocUpdate, updateData);
      return {
        todos: updatedTodos,
      };
    case TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS:
      const todoDocDelete = doc(db, "todos", action.payload.id);
      deleteDoc(todoDocDelete);
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};
