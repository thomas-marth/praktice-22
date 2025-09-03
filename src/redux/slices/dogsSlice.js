import { createSlice } from "@reduxjs/toolkit";
import { fetchDogs } from "../thunks";

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
