import { configureStore } from "@reduxjs/toolkit";
import businessReducer from "./Question-slice";

const store = configureStore({
  reducer: {
    business: businessReducer,
  },
});

export default store;
