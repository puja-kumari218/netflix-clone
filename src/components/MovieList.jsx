import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

const MovieList = ({ data, title, movies, deleteFavorite, updateFavorite  }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
          {title}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((movie) => (
          <MovieCard key={movie.id} data={movie} movies={movies} deleteFavorite={deleteFavorite} updateFavorite={updateFavorite}/>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
