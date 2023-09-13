import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/user";

const initialState = {
  user: {
    email: "",
    _id: "",
  },
};
const userReducers = createReducer(initialState, (builder) => {
  return builder.addCase(userActions.sign_in.fulfilled, (state, action) => {
    console.log({ user: action.payload.user });
  });
});
export default userReducers;
