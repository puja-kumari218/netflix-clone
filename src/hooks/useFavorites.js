import React, { useEffect, useState } from "react";
import API from "../api";
import { useSelector } from "react-redux";

const useFavorites = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => {
    setIsLoading(true);
    API.movie
      .getFavorite(user?.email)
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
    if (user?.email) fetchData();
  }, [user?.email]);

  const updateFavorite = (movieId) => {
    setIsLoading(true);
    API.movie
      .insertFavorite(user?.email, movieId)
      .then((res) => {
        if (res) {
          fetchData();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteFavorite = (movieId) => {
    setIsLoading(true);
    API.movie
      .deleteFavorite(user?.email, movieId)
      .then((res) => {
        if (res) {
          fetchData();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { data, isLoading, updateFavorite, deleteFavorite };
};

export default useFavorites;
