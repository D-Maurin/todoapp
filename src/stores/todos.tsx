import { ActionType, IAction } from "../types/todoActions";
import ITodoList from "../types/ITodoList";
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
        link: {
          ...state.link,
          todos: { ...state.link.todos, [id]: [] },
        },
      };
    }

    case ActionType.REMOVE: {
      const id = action.id;
      const { [action.id]: deleteKey1, ...todos } = state.todos;
      const { [action.id]: deleteKey2, ...link } = state.link;
      return {
        ...state,
        todos,
        order: state.order.filter((e) => e !== id),
        link: link,
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

    case ActionType.SELECT_RESP: {
      const id = action.id;
      return {
        ...state,
        link: { ...state.link, [id]: [...action.resps] },
      };
    }

    case ActionType.EDIT_RESP: {
      const id = action.id;
      return {
        ...state,
        resps: { ...state.resps, [id]: { ...action.resp } },
      };
    }

    case ActionType.REMOVE_RESP: {
      const id = action.id;
      const { [id]: deleteKey, ...resps } = state.resps;

      const link = { ...state.link };
      for (const key in link) {
        link[key] = link[key].filter((v) => v !== id);
      }

      return {
        ...state,
        resps,
        link,
      };
    }

    default:
      return state;
  }
};

export default reducerTodos;
