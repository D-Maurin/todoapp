import { useSelector } from "react-redux";

function useRespName(id: string) {
  const resp = useSelector(
    (state: any) => state.resps[id].firstName + " " + state.resps[id].name
  );
  return resp;
}

export default useRespName;
