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
        return response.data;
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
        return response.data;
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
    axios("http://localhost:3000/api/user/logout").then((response) => {
      localStorage.removeItem("token");
    });
  } catch (error) {
    console.log(error.message);
  }
});
const register = createAsyncThunk("register", async (payload) => {
  try {
    let { name, lastName, email, password, images, country } = payload;
    const user = await axios
      .post("http://localhost:3000/api/user/register", {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        images: images,
        country: country,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("¡Successfully created account!");
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
const userActions = { sign_in, authenticate, log_out, register };
export default userActions;
