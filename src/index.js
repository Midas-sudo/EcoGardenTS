import React from "react";
import ReactDOM from "react-dom/client";
import PageLayout from "./PageLayout";
import ErrorPage from "./pages/ErrorPage";

import MainPage from "./pages/MainPage";



import LoginPage from "./pages/LoginPage";
import RedirectingPage from "./pages/RedirectingPage";
import FinishPage from "./pages/FinishPage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />, children: [
      {
        path: "/",
        element: <MainPage />,
      }
    ],
  },
  {
    path: "/login/",
    element: <LoginPage />,
  }, 
  {
    path: "redirecting/",
    element: <RedirectingPage />,
  },
  {
    path: "finish_profile/",
    element: <FinishPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);