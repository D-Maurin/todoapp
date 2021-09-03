import { useSelector } from "react-redux";

function useResp(id: string) {
  const resp = useSelector((state: any) => state.resps[id]);
  return resp;
}

export default useResp;
