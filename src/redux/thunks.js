import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "https://api.thedogapi.com/v1";

export const fetchDogs = createAsyncThunk("dogs/fetchDogs", async () => {
  const response = await axios.get(`${BASE_URL}/breeds`);
  return response.data;
});
