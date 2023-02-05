import { createSlice } from "@reduxjs/toolkit";

export const uiConfigs = createSlice({
  name: "uiConfigs",
  initialState: {
    primary: "",
    secondary: "",
    headerSticky: false,
  },
  reducers: {
    setUiConfigs: (
      state: { primary: string; secondary: string; headerSticky: boolean },
      action: any
    ) => {
      state.primary = action.payload.data.uiConfig.primary.hex;
      state.secondary = action.payload.data.uiConfig.secondary.hex;
      state.headerSticky = action.payload.data.uiConfig.headerSticky;
    },
  },
});

export const { setUiConfigs } = uiConfigs.actions;

export default uiConfigs.reducer;
