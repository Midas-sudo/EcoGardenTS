import React from "react";
import ReactDOM from "react-dom/client";
import PageLayout from "./PageLayout";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ProfileFinishPage from "./pages/ProfileFinishPage";

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

    ],
  },
  {
    path: "/login/",
    element: <LoginPage />,
  }, 
  {
    path: "finish_up/",
    element: <ProfileFinishPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);