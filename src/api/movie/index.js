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
};
export default movie;
