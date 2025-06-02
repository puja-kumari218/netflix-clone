import React, { useEffect, useState } from "react";
import API from "../api";

const useMoviesList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => {
    setIsLoading(true);
    API.movie
      .movies()
      .then((res) => {
        if (res) {
          setData(res);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading };
};

export default useMoviesList;
