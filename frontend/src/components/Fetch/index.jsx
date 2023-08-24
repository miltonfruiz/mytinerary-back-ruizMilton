import React, { useEffect, useState, useRef } from "react";
import Cards from "../Cards";
import "./style.css";
import axios from "axios";
import { getAllCity } from "../../services/cityQueries";

export default function Fetch() {
  let [city, setCity] = useState([]);
  let [allCity, setAllCity] = useState([]);
  let input = useRef(null);
  useEffect(() => {
    axios("http://localhost:3000/api/city")
      .then((response) => {
        setCity(response.data);
        setAllCity(response.data);
        console.log(city);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className="sectionContainer">
        <div className="row justify-content-center d-flex ">
          <h5 className="col-8 mt-5">CITIES</h5>
        </div>
        <form>
          <label>
            <input type="text" ref={input} />
            <button className="btn btn-secondary">👁️</button>
          </label>
        </form>
        <div className="row justify-content-center d-flex ">
          {city.length > 0 ? (
            city.map((array) => (
              <Cards
                cardLink={array.images}
                cardTitle={array.city}
                cardDescription={array.country}
              />
            ))
          ) : (
            <h2>No hay resultados</h2>
          )}
        </div>
      </section>
    </>
  );
}
