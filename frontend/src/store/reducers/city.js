import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/city";

const initialState = {
  city: [
    {
      city: "",
      country: "",
      images: "",
      region: "",
      population: 0,
      badge: "",
      monument: "",
      description: "",
    },
  ],
};

const cityReducers = createReducer(initialState, (builder) => {
  return builder.addCase(cityActions.add_city, (state, action) => {
    const newState = { ...state, city: action.payload.city };
    return newState;
  });
});
export default cityReducers;
