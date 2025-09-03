import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../thunks";

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

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchDogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dogsSlice.reducer;
