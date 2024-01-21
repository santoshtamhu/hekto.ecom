import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    setCart: (state) => {
      state.value++;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
