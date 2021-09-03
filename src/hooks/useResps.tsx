import { useSelector } from "react-redux";
import IRespList from "../types/IRespList";

function useResps() {
  const resps: IRespList = useSelector((state: any) => state.resps);
  return resps;
}

export default useResps;
