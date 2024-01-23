import { createSlice } from "@reduxjs/toolkit";

export const loginPopupSlice = createSlice({
  name: "popup",
  initialState: {
    value: true,
  },
  reducers: {
    setLoginPopup: (state) => {
      state.value = true;
      console.log(state.value);
    },
  },
});

export const { setLoginPopup } = loginPopupSlice.actions;

export default loginPopupSlice.reducer;
