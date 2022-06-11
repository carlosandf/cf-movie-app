import { useState, useEffect } from "react";

const useGetMovies = (API) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    (async () => {
      const res = await fetch(API);
      const data = await res.json();
      setMovies(data.results);
    })()
  },[]);
  return movies;
}
export default useGetMovies;