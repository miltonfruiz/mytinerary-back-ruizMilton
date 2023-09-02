import React from "react";
import Details from "../Details";
import { useSelector } from "react-redux";

export default function Filter() {
  let cityInStores = useSelector((store) => store.cityReducer.city);
  return (
    <>
      <section className="sectionContainer">
        <div className="row justify-content-center d-flex ">
          <h2 className="col-8 mt-5 mb-5">Details</h2>
        </div>
        <div className="row justify-content-center d-flex ">
          {cityInStores.map((array) => (
            <Details
              cardImage={array.images}
              cardCity={array.city}
              cardRegion={array.region}
              cardPopulation={array.population}
              cardBadge={array.badge}
              cardMonument={array.monument}
              cardDescription={array.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
