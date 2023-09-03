import React from "react";
import "./style.css";

export default function Details({
  cardImage,
  cardCity,
  cardCountry,
  cardRegion,
  cardPopulation,
  cardBadge,
  cardMonument,
  cardDescription,
}) {
  return (
    <>
      <div className="containerDetails">
        <div className="row">
          <div className="col-8">
            <img src={cardImage} className="imgDetails" alt="logo-img" />
          </div>
          <div className="col-4">
            <div className="campsContainer">
              <h6 className="h6">City:</h6>
              <p className="p">{cardCity}</p>
              <h6 className="h6">Country:</h6>
              <p className="p">{cardCountry}</p>
              <h6 className="h6">Region:</h6>
              <p className="p">{cardRegion}</p>
              <h6 className="h6">Population:</h6>
              <p className="p">{cardPopulation}</p>
              <h6 className="h6">Badge:</h6>
              <p className="h6">{cardBadge}</p>
              <h6 className="h6 monumentClass">Monument:</h6>
              <p className="p">{cardMonument}</p>
              <h6 className="h6">Description:</h6>
              <p className="p">{cardDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
