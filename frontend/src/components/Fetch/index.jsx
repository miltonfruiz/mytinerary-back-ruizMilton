import React, { useEffect, useRef } from "react";
import Cards from "../Cards";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import cityActions from "../../store/actions/city";
import { FaSearch } from "react-icons/fa";

export default function Fetch() {
  let input = useRef();
  let cityInStore = useSelector((store) => store.cityReducer.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cityActions.get_city());
  }, []);

  let handleSubmit = (event) => {
    event.preventDefault();
    if (input.current.value) {
      dispatch(cityActions.filter_city(input.current.value));
    } else {
      dispatch(cityActions.get_city());
    }
  };

  return (
    <>
      <section className="sectionContainer">
        <div className="row justify-content-center d-flex ">
          <h5 className="col-8 mt-5">CITIES</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="labelClass">
            <input
              type=" text"
              className="textSerach form-control me-1 "
              ref={input}
              placeholder="  Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary">
              <FaSearch size={12} />
            </button>
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
