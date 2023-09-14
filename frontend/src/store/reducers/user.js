import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/user";

const initialState = {
  user: {
    name: "",
    lastName: "",
    email: "",
    _id: "",
    images: "",
    country: "",
  },
};
const userReducers = createReducer(initialState, (builder) => {
  return builder
    .addCase(userActions.sign_in.fulfilled, (state, action) => {
      return { user: action.payload.user };
    })
    .addCase(userActions.authenticate.fulfilled, (state, action) => {
      return { user: action.payload };
    })
    .addCase(userActions.log_out.fulfilled, (state, action) => {
      return initialState;
    })
    .addCase(userActions.register.fulfilled, (state, action) => {
      return { user: action.payload.user };
    });
});
export default userReducers;
