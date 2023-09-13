import React from "react";
import "./App.css";
import Layout from "./layouts/Layouts";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/details", element: <Details /> },
      { path: "/login", element: <Login /> },
    ],
  },
  // {
  //   path: "*",
  //   element: <Error404 />,
  // },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
