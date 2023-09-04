import React from "react";
import Details from "../Details";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Accordion from "../Accordion";
import { Link as Anchors } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./style.css";

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
          {cityInStores.map((array) => (
            <Accordion
              itineraryDuration1={cityInStores[0].itineraries[0].duration}
              itineraryPrice1={cityInStores[0].itineraries[0].price}
              itineraryLikes1={cityInStores[0].itineraries[0].likes}
              itineraryTags1={cityInStores[0].itineraries[0].tags}
              itineraryDuration2={cityInStores[0].itineraries[1].duration}
              itineraryPrice2={cityInStores[0].itineraries[1].price}
              itineraryLikes2={cityInStores[0].itineraries[1].likes}
              itineraryTags2={cityInStores[0].itineraries[1].tags}
              itineraryDuration3={cityInStores[0].itineraries[2].duration}
              itineraryPrice3={cityInStores[0].itineraries[2].price}
              itineraryLikes3={cityInStores[0].itineraries[2].likes}
              itineraryTags3={cityInStores[0].itineraries[2].tags}
            />
          ))}
        </div>
        <div className="mt-5">
          <Anchors
            to="/cities"
            className="btn btn-outline-danger bton-title GoBack"
          >
            <p className="GoBack">
              {" "}
              Go Back! <FaAngleDoubleRight size={20} />
            </p>{" "}
          </Anchors>
        </div>
      </section>
    </>
  );
}
