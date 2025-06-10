import React, { useCallback, useMemo } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import API from "../api";
import useFavorites from "../hooks/useFavorites";
import { useSelector } from "react-redux";

const FavoriteButton = ({ movieId, data, deleteFavorite, updateFavorite }) => {
  const { user } = useSelector((state) => state.auth);

  const isFavorite = useMemo(() => {
    return data?.find((movie) => movie.id === movieId) ? true : false;
  }, [user, movieId, data]);
  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = deleteFavorite(movieId);
    } else updateFavorite(movieId);
  }, [movieId, isFavorite, user, data]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item 
             w-6 h-6 lg:w-8 lg:h-8 
             border-2 border-white 
             rounded-full 
             flex justify-center items-center 
             transition hover:border-neutral-300 
             bg-black/50"
    >
      <Icon className="text-white" size={14} />
    </div>
  );
};

export default FavoriteButton;