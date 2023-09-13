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
