import { configureStore } from "@reduxjs/toolkit";
import cityReducers from "./reducers/city";

export const store = configureStore({
  reducer: {
    cityReducer: cityReducers,
  },
});
