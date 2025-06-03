import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import MovieList from "../components/MovieList";
import useMoviesList from "../hooks/useMoviesList";
import useFavorites from "../hooks/useFavorites";
import InfoModal from "../components/InfoModal";
import useInfoModal from "../hooks/useInfoModal";

function Home() {
  const navigate = useNavigate();
  const { data: movies } = useMoviesList();
  const { data: favorites, updateFavorite, deleteFavorite } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList
          title="Trending Now"
          data={movies}
          movies={favorites}
          updateFavorite={updateFavorite}
          deleteFavorite={deleteFavorite}
        />
        <MovieList
          title="My List"
          data={favorites}
          movies={favorites}
          updateFavorite={updateFavorite}
          deleteFavorite={deleteFavorite}
        />
      </div>
    </>
  );
}
export default Home;
