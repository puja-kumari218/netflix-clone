import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/authSlice";
import { publicRoutes, protectedRoutes } from "./route/routes";
import ProtectedRoute from "./route/ProtectedRoute";
import PublicRoute from "./route/PublicRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (user && token) {
      dispatch(setUser({ user, token }));
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Public Routes (restricted for logged-in users) */}
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ))}

        {/* Protected Routes */}
        {protectedRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;