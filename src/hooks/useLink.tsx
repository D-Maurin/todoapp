import { useSelector } from "react-redux";

function useLink() {
  const link: any = useSelector((state: any) => state.link);
  return link;
}

export default useLink;
