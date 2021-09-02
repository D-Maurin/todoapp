import { useDispatch } from "react-redux";
import { IResp } from "../types/todo";
import { ActionType } from "../types/todoActions";

const useAddResp = () => {
  const dispatch = useDispatch();

  return (responsable: IResp) =>
    dispatch({ type: ActionType.ADD_RESP, resp: responsable });
};

export default useAddResp;
