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
          <div className="col-4">
            <img src={cardImage} class="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h6>City</h6>
              <p className="h6">{cardCity}</p>
              <h6>Country</h6>
              <p className="h6">{cardCountry}</p>
              <h6>Region</h6>
              <p className="h6">{cardRegion}</p>
              <h6>Population</h6>
              <p className="h6">{cardPopulation}</p>
              <h6>Badge</h6>
              <p className="h6">{cardBadge}</p>
              <h6>Monument</h6>
              <p className="h6">{cardMonument}</p>
              <h6>Description</h6>
              <p className="h6">{cardDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
