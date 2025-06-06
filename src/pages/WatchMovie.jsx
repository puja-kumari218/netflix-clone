import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

const WatchMovie = () => {
  const { movieId } = useParams();
  const {data} = useMovie(movieId);
    const navigate = useNavigate();


  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <FaArrowLeft  onClick={() => navigate(`/`)} className="text-white cursor-pointer" size={40} />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video autoPlay controls
      className="h-full w-full"
      src={data?.videoUrl}></video>
    </div>
  );
};

export default WatchMovie;
