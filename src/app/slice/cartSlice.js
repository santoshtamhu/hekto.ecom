import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    cartIncrement: (state) => {
      state.value++;
      console.log(state.value);
    },
    cartDecrement: (state) => {
      state.value--;
    },
  },
});

export const { cartIncrement } = cartSlice.actions;

export default cartSlice.reducer;
