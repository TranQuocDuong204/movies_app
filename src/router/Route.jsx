import React from "react";
import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
// Page
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import MoviesPage from "../pages/MoviesPage.jsx";
import WishListPage from "../pages/WishListPage.jsx";
import TvShowPage from "../pages/TvShowPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: ":explore/:id",
        element: <DetailPage />,
      },
      {
        path: "wishlist",
        element: <WishListPage />,
      },
      {
        path: "tv",
        element: <TvShowPage />,
      },
      {
        path: "tv/:id",
        element: <DetailPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
