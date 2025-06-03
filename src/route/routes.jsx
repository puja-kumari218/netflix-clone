import React from "react";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Profiles from "../pages/Profiles";
import WatchMovie from "../pages/WatchMovie";

export const publicRoutes = [
  { path: "/auth", element: <Auth /> },
];

export const protectedRoutes = [
  { path: "/", element: <Home /> },
  { path: "/profiles", element: <Profiles /> },
  { path: "/watch/:movieId", element: <WatchMovie /> },
];
