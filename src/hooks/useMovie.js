import React, { useEffect, useState } from "react";
import API from "../api";

const useMovie = (movieId) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => {
    setIsLoading(true);
    API.movie
      .getMovieDetails(movieId)
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
    if (movieId) fetchData();
  }, [movieId]);
  return { data, isLoading };
};

export default useMovie;
