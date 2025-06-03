import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const PlayButton = ({movieId}) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/watch/${movieId}`)}
     className="bg-white  rounded-md py-1 md:py-2 px-2 md:px-4 w-auto
             text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral transition cursor-pointer">
      <BsFillPlayFill size={25} className="mr-1"/>Play
    </button>
  );
};

export default PlayButton;
