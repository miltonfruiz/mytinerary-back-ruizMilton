import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_city = createAsyncThunk("get_city", async () => {
  const cities = await axios
    .get("http://localhost:3000/api/city")
    .then((response) => {
      return response.data;
    });
  return {
    city: cities,
  };
});

const cityActions = { get_city };
export default cityActions;
