import { createAction } from "@reduxjs/toolkit";

const add_city = createAction("add_city", (object) => {
  return {
    payload,
  };
});

export default {
  add_city,
};
