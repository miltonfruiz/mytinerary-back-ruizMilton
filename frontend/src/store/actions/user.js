import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sign_in = createAsyncThunk("sign_in", async (payload) => {
  try {
    let { email, password } = payload;
    const user = await axios
      .post("http://localhost:3000/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("Successfully logged in");
        return response.data.user;
      })
      .catch((error) =>
        error.response.data.message.forEach((message) => console.log(message))
      );
    return {
      user: user,
    };
  } catch (error) {
    console.log(error.message);
  }
});
const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    let token = localStorage.getItem("token");
    let user = await axios
      .post("http://localhost:3000/api/user/authenticated", null, {
        headers: {
          Authorization: "Bearer" + token,
        },
      })
      .then((response) => {
        console.log("¡Authenticated successfully!");
        localStorage.setItem("token", response.data.token);
        return response.data.user;
      });
    return {
      user: user,
    };
  } catch (error) {
    console.log(error.message);
  }
});
const log_out = createAsyncThunk("log_out", async () => {
  try {
    axios("http://localhost:3000/api/user/logout").then((response) =>
      console.log(response)
    );
  } catch (error) {
    console.log(error.message);
  }
});
const userActions = { sign_in, authenticate, log_out };
export default userActions;
