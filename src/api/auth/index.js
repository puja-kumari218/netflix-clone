import api, { handleResponse } from "../baseController";

const auth = {
  login: async (email, password) => {
    return handleResponse(
      api.post("/auth/login", { email, password }).then((res) => {
        return res;
      })
    );
  },

  register: async (name, email, password) => {
    return handleResponse(
      api.post("/auth/register", { name, email, password })
    );
  },
};
export default auth;
