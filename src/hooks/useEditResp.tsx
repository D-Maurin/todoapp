import { useDispatch } from "react-redux";
import IResp from "../types/IResp";
import { ActionType } from "../types/todoActions";

const useEditResp = () => {
  const dispatch = useDispatch();

  return (id: string, responsable: IResp) =>
    dispatch({ type: ActionType.EDIT_RESP, id, resp: responsable });
};

export default useEditResp;
