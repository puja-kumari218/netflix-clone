import React, { useEffect, useState } from "react";
import API from "../api";

const useBillboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => {
    setIsLoading(true);
    API.movie
      .random()
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

export default useBillboard;
