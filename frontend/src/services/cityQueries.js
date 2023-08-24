import axios from "axios";

const city = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllCity = async (queryParams = "") => {
  try {
    let { data } = await city("/api/city" + queryParams);
    return data.city;
  } catch (error) {
    return [];
  }
};
