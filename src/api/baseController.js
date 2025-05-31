import axios from "axios";
import { toast } from "sonner"; // or any toast library you use

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // your API base URL
  timeout: 10000, // request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export const handleResponse = (promise) =>
  promise
    .then((response) => {
      return response;
    })
    .catch((error) => {
      const message =
        error?.response?.data || error.message || "An error occurred";

      toast.error(message);
      return Promise.reject(message);
    });

export default api;
