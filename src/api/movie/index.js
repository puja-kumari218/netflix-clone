import api, { handleResponse } from "../baseController";

const movie = {
  random: async () => {
    return handleResponse(
      api.get("/movie/random").then((res) => {
        return res;
      })
    );
  },
};
export default movie;
