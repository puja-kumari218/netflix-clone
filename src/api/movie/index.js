import api, { handleResponse } from "../baseController";

const movie = {
  random: async () => {
    return handleResponse(
      api.get("/movie/random").then((res) => {
        return res;
      })
    );
  },
  movies: async () => {
    return handleResponse(
      api.get("/movie/movies").then((res) => {
        return res;
      })
    );
  },
  insertFavorite: async (email, movieId) => {
    return handleResponse(
      api
        .post("/movie/favorite", {
          email: email,
          movieId: movieId,
        })
        .then((res) => {
          return res;
        })
    );
  },
  deleteFavorite: async (email, movieId) => {
    return handleResponse(
      api
        .delete(`/movie/favorite?email=${email}&movieId=${movieId}`)
        .then((res) => {
          return res;
        })
    );
  },
  getFavorite: async (email) => {
    return handleResponse(
      api.get(`/movie/favorite/${email}`).then((res) => {
        return res;
      })
    );
  },
  getMovieDetails: async (movieId) => {
    return handleResponse(
      api.get(`/movie/${movieId}`).then((res) => {
        return res;
      })
    );
  },
};
export default movie;
