import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const MovieCard = ({ data }) => {
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
            <div className="flex flex-col items-center gap-2">
              <div
                className="cursor-pointer w-10 h-10 lg:w-10 lg:h-10 bg-white/20 backdrop-blur-sm rounded-full flex justify-center items-center transition hover:bg-white/30 text-white shadow-lg"
                onClick={() => {}}
              >
                <BsFillPlayFill size={30} />
              </div>
              <p className="text-green-400 text-xs lg:text-sm">New <span className="text-white">2023</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
