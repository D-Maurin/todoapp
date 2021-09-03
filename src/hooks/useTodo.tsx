import { useSelector } from "react-redux";
import ITodo from "../types/ITodo";

function useTodo(id: string) {
  const todo: ITodo = useSelector((state: any) => state.todos[id]);
  return todo;
}

export default useTodo;
