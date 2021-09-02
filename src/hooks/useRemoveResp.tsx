import { useDispatch } from "react-redux";
import { ActionType } from "../types/todoActions";

const useRemoveResp = () => {
  const dispatch = useDispatch();

  return (id: string) => dispatch({ type: ActionType.REMOVE_RESP, id });
};

export default useRemoveResp;
