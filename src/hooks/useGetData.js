import { useState, useEffect } from "react";

const useGetData = (API) => {
  const [info, setInfo] = useState({})
  useEffect(() => {
    (async () => {
      const res = await fetch(API);
      const data = await res.json();
      setInfo(data)
    })()
  },[]);
  return info;
}
export default useGetData;