import { createStore } from "@reduxjs/toolkit";
import reducerTodos from "./todos";

const store = createStore(reducerTodos);

export default store;
