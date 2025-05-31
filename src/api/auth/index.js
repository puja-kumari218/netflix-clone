import api from "../baseController";

const auth = {
  login: async (email, password) => {
    try {
      const reponse = api.post("/auth/login", {
        email: email,
        password: password,
      });

      return reponse;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};
export default auth;
