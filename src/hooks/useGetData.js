import { useState, useEffect } from "react";
import axios from "axios";

const getData = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers:{
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': process.env.API_KEY,
  }
});

export const useGetCategories = (endpoint) => {
  const [info, setInfo] = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await getData(endpoint);
      setInfo(data.genres)
    })()
  },[]);
  return info;
}
export const useGetMovies = (endpoint) => {
  const [info, setInfo] = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await getData(endpoint);
      setInfo(data.results)
    })()
  },[]);
  return info;
}
