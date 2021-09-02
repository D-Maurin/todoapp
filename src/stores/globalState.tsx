import { combineReducers, createStore } from "@reduxjs/toolkit";
import reducerTodos from "./todos";

const reducers = combineReducers({
  todos: reducerTodos,
});

const store = createStore(reducers);

export default store;
