export const logoutUser = () => {
  localStorage.removeItem("token");
  window.location.href = "/auth"; // Adjust to your routing setup
};
