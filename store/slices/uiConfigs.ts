import { createSlice } from "@reduxjs/toolkit";

export const uiConfigs = createSlice({
  name: "uiConfigs",
  initialState: {
    primary: "",
    secondary: "",
  },
  reducers: {
    setUiConfigs: (
      state: { primary: string; secondary: string },
      action: any
    ) => {
      state.primary = action.payload.data.uiConfig.primary.hex;
      state.secondary = action.payload.data.uiConfig.secondary.hex;
    },
  },
});

export const { setUiConfigs } = uiConfigs.actions;

export default uiConfigs.reducer;
