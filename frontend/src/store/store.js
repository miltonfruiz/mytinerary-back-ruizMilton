import { configureStore } from "@reduxjs/toolkit";
import cityReducers from "./reducers/city";
import userReducer from "./reducers/user";

export const store = configureStore({
  reducer: {
    cityReducer: cityReducers,
    userReducer: userReducer,
  },
});
