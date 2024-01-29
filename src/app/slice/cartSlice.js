import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let product = action.payload;
      let temp = [...state.value];

      if (temp.find((el) => el._id == product._id)) {
        temp = temp.map((el) => {
          if (el._id == product._id) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        });
      } else {
        temp.push({ ...product, quantity: 1 });
      }
      state.value = temp;
      console.log(temp);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
