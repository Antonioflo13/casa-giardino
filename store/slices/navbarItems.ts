import { createSlice } from "@reduxjs/toolkit";

export const uiConfigsSlice = createSlice({
  name: "navbarItems",
  initialState: {
    navbarItems: {},
  },
  reducers: {
    setNavbarItems: (state: { navbarItems: {} }, action: any) => {
      state.navbarItems = action.payload.data.allNavbars[0];
    },
  },
});

export const { setNavbarItems } = uiConfigsSlice.actions;

export default uiConfigsSlice.reducer;
