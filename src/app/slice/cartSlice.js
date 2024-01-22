import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    cartIncrement: (state) => {
      state.value++;
      localStorage.setItem("cartItem", state.value);
    },
    cartDecrement: (state) => {
      state.value--;
    },
  },
});

export const { cartIncrement, cartDecrement } = cartSlice.actions;

export default cartSlice.reducer;
