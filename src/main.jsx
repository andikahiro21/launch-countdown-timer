import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/countdown",
    element: <App />,
  },
  {
    path: "/",
    element: <Navigate to="/countdown" />, // Redirect from "/" to "/countdown"
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
