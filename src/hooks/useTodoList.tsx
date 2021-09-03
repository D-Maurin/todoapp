import { useSelector } from "react-redux";
import ITodoList from "../types/ITodoList";

function useTodoList() {
  const todolist: ITodoList = useSelector((state: any) => state);
  return todolist;
}

export default useTodoList;
