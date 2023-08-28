import React from "react";
import "./style.css";
import More from "../More";

export default function Cards({ cardLink, cardTitle, cardDescription }) {
  return (
    <>
      <div className="col-3 ms-1 mt-5 cardContainer">
        <div className="card-container">
          <img src={cardLink} alt="" className="card-img" />
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardDescription}</p>
            <More />
          </div>
        </div>
      </div>
    </>
  );
}
