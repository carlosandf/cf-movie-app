import { useState, useEffect } from "react";

const useGetCategories = (API) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    (async () => {
      const res = await fetch(API);
      const data = await res.json();
      setCategories(data.genres)
    })()
  },[]);
  return categories;
}
export default useGetCategories;