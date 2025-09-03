import { configureStore } from "@reduxjs/toolkit";
import dogsReducer from "./slices/dogsSlice";

const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});

export default store;
