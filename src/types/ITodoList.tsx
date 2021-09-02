import IRespList from "./IRespList";
import ITodo from "./ITodo";

export default interface ITodoList {
  todos: {
    [key: string]: ITodo;
  };
  order: string[];
  resps: IRespList;
  link: {
    [key: string]: string[];
  };
}
