import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "https://api.thedogapi.com/v1";

export const fetchDogs = createAsyncThunk("dogs/fetchDogs", async () => {
  const { data } = await axios.get(`${BASE_URL}/breeds`);

  const breeds = data
    .map(({ name, temperament }) => ({
      name,
      temperament: temperament || "No data",
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return breeds;
});
