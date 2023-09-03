import React from "react";
import Details from "../Details";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Accordion from "../Accordion";

export default function Filter() {
  let cityInStores = useSelector((store) => store.cityReducer.city);
  return (
    <>
      <section className="sectionContainer">
        <div className="row justify-content-center d-flex ">
          <h2 className="col-8 mb-5">Details</h2>
        </div>
        <div className="row justify-content-center d-flex">
          {cityInStores.map((array) => (
            <Details
              cardImage={cityInStores[0].itineraries[0].images}
              cardCity={array.city}
              cardCountry={array.country}
              cardRegion={array.region}
              cardPopulation={array.population}
              cardBadge={array.badge}
              cardMonument={array.monument}
              cardDescription={array.description}
              cardName={cityInStores[0].itineraries[0].name}
            />
          ))}
        </div>
        <div className="row justify-content-center d-flex">
          <Accordion />
        </div>
      </section>
    </>
  );
}
