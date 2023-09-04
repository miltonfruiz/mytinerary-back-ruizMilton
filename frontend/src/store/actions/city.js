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
    console.log(error.message);
  }
});
const filter_city = createAsyncThunk("filter_city", async (id) => {
  try {
    const city = await axios
      .get("http://localhost:3000/api/city/" + id)
      .then((response) => response.data);
    return {
      city: city,
    };
  } catch (error) {
    console.log(error.message);
  }
});
const filter_city_name = createAsyncThunk("filter_city_name", async (city) => {
  try {
    const cityName = await axios
      .get("http://localhost:3000/api/itinerary/" + city)
      .then((response) => response.data);
    return {
      city: cityName,
    };
  } catch (error) {
    console.log(error.message);
  }
});
const cityActions = { get_city, filter_city, filter_city_name };
export default cityActions;
