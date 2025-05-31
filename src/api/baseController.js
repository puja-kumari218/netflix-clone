import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // replace with your API base URL
  timeout: 10000, // request timeout in ms
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for request and response
api.interceptors.request.use(
  (config) => {
    // If you have authentication tokens (like JWT), add them here:
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data, // Directly return response data
  (error) => {
    // Handle common errors here
    console.error("API error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
