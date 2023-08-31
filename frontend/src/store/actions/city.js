import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_city = createAsyncThunk("get_city", async () => {
  try {
    const cities = await axios
      .get("http://localhost:3000/api/city")
      .then((response) => {
        return response.data;
      });
    return {
      city: cities,
    };
  } catch (error) {
    console.log(error);
  }
});

const cityActions = { get_city };
export default cityActions;
