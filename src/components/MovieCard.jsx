import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { Navigate, useNavigate } from "react-router-dom";
import useInfoModal from "../hooks/useInfoModal";
import { LuChevronDown } from "react-icons/lu";

const MovieCard = ({ data, movies, deleteFavorite, updateFavorite }) => {
  const navigate = useNavigate();

  const { openModal } = useInfoModal();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] w-full">
      <img
        src={data.thumbnailUrl}
        className="h-full w-full object-cover cursor-pointer transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300"
      />
      <div
        className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 
      group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100"
      >
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          src={data.thumbnailUrl}
          alt=""
        />
        <div className="z-10 bg-white/10 backdrop-blur-md p-2 lg:p-3 absolute w-full transition duration-200 shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-4">
            <div
              className="cursor-pointer w-10 h-10 lg:w-10 lg:h-10 bg-white/20 backdrop-blur-sm rounded-full flex justify-center items-center transition hover:bg-white/30 text-white shadow-lg"
              onClick={() => navigate(`/watch/${data?.id}`)}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton
              movieId={data?.id}
              data={movies}
              deleteFavorite={deleteFavorite}
              updateFavorite={updateFavorite}
            />
            <div
              onClick={() => openModal(data?.id)}
              className="cursor-pointer ml-auto group/item 
             w-6 h-6 lg:w-8 lg:h-8 
             border-2 border-white 
             rounded-full 
             flex justify-center items-center 
             transition hover:border-neutral-300"
            >
              <LuChevronDown
                className="text-white group-hover/item:text-neutral-300"
                size={14}
              />
            </div>
          </div>
          <p className="text-green-400 text-xs lg:text-sm">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
