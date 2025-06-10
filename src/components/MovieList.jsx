import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

const MovieList = ({ data, title, movies, deleteFavorite, updateFavorite }) => {
  if (isEmpty(data)) {
    return null;
  }

  const isLargeCard = title === "Trending Now" || title === "My List";

  return (
    <div className="px-4 md:px-12 mt-8 space-y-8">
      {/* Section Header */}
      <div className="relative">
        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full" />
      </div>

      {/* Movie Grid */}
      <div className={`grid ${isLargeCard ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'} gap-4 md:gap-6`}>
        {data.map((movie) => (
          <MovieCard 
            key={movie.id} 
            data={movie} 
            movies={movies} 
            deleteFavorite={deleteFavorite} 
            updateFavorite={updateFavorite}
            isTrending={isLargeCard}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;