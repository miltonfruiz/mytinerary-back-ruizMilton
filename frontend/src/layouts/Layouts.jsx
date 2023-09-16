import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Layouts() {
  let token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}
