import { createSlice } from "@reduxjs/toolkit";
import { navbar } from "@/interfaces/navbar";

export const uiConfigsSlice = createSlice({
  name: "navbar",
  initialState: {
    companyName: "",
    logo: "",
    navbarItems: [],
  },
  reducers: {
    setNavbarItems: (state: navbar, action: any) => {
      state.companyName = action.payload.data.allNavbars[0].companyName;
      state.logo = action.payload.data.allNavbars[0].logo.url;
      state.navbarItems = action.payload.data.allNavbars[0].navbarItems;
    },
  },
});

export const { setNavbarItems } = uiConfigsSlice.actions;

export default uiConfigsSlice.reducer;
