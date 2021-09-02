import { ActionType, IAction } from "../types/todoActions";
import { ITodoList } from "../types/todo";
import { v4 as uuidv4 } from "uuid";
import todosExample from "./examples/todos";

const reducerTodos = (state: ITodoList = todosExample, action: IAction) => {
  switch (action.type) {
    case ActionType.ADD: {
      const id = uuidv4();
      return {
        ...state,
        todos: { ...state.todos, [id]: { todo: action.text, done: false, id } },
        order: [...state.order, id],
      };
    }

    case ActionType.REMOVE: {
      const id = action.id;
      const { [action.id]: deleteKey, ...todos } = state.todos;
      return {
        ...state,
        todos,
        order: state.order.filter((e) => e !== id),
      };
    }

    case ActionType.TOGGLE_DONE: {
      const id = action.id;
      return {
        ...state,
        todos: {
          ...state.todos,
          [id]: { ...state.todos[id], done: !state.todos[id].done },
        },
      };
    }

    case ActionType.EDIT: {
      const id = action.id;
      return {
        ...state,
        todos: {
          ...state.todos,
          [id]: { ...state.todos[id], todo: action.text },
        },
      };
    }

    case ActionType.REORDER: {
      const newOrder = [...state.order];
      const [removed] = newOrder.splice(action.source, 1);
      newOrder.splice(action.destination, 0, removed);
      return {
        ...state,
        order: newOrder,
      };
    }

    case ActionType.ADD_RESP: {
      const id = uuidv4();
      return {
        ...state,
        resps: { ...state.resps, [id]: { ...action.resp } },
      };
    }

    default:
      return state;
  }
};

export default reducerTodos;
