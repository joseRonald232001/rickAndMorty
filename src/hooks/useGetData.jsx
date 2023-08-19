import axios from "axios";
import { useDispatch } from "react-redux";
import { obtainData } from "../store/slices/data.slice";

const useGetData = () => {
  const dispatch = useDispatch();
  const getCharacters = (url) => {
    axios.get(url).then((res) => dispatch(obtainData(res.data)));
  };

  return { getCharacters };
};

export default useGetData;
