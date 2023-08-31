import React, { useEffect, useState, useRef } from "react";
import Cards from "../Cards";
import "./style.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import cityActions from "../../store/actions/city";

export default function Fetch() {
  let input = useRef(null);
  let cityInStore = useSelector((store) => store.cityReducer.city);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/city")
      .then((response) => {
        dispatch(cityActions.add_city(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  let handleSubmit = (event) => {
    event.preventDefault();
    if (input.current.value) {
      axios
        .get(`http://localhost:3000/api/city/${input.current.value}`)
        .then((response) => dispatch(cityActions.add_city([response.data])))
        .catch((error) => console.log(error));
    } else {
      dispatch(cityActions.add_city(response.data));
    }
  };

  return (
    <>
      <section className="sectionContainer">
        <div className="row justify-content-center d-flex ">
          <h5 className="col-8 mt-5">CITIES</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" ref={input} />
            <button className="btn btn-secondary">👁️</button>
          </label>
        </form>
        <div className="row justify-content-center d-flex ">
          {cityInStore.length > 0 ? (
            cityInStore.map((array) => (
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
