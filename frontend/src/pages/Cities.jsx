import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Fetch from "../components/Fetch";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cities() {
  let token = localStorage.getItem("token");
  if (!token) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡Need login to access!",
    });
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Header />
      <Fetch />
      <Footer />
    </>
  );
}
