import { createSlice } from "@reduxjs/toolkit";

const initialState = { product: [] };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    product(state, action) {
      state.product = action.payload;
    },
  },
});

export const { product } = menuSlice.actions;

export default menuSlice.reducer;
