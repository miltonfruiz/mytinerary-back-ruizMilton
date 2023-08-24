import React from "react";
import "./style.css";
import Carousel from "../Carousel";
import Welcome from "../Welcome";
import Call from "../Call";

function Main() {
  return (
    <main>
      <Welcome />
      <Call />
      <Carousel />
    </main>
  );
}

export default Main;
