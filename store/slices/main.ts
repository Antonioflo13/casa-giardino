import { createSlice } from "@reduxjs/toolkit";
import { main } from "@/interfaces/main";
export const mainSlice = createSlice({
  name: "main",
  initialState: {
    title: "",
    description: "",
    url: "",
    alt: "",
  },
  reducers: {
    setMain: (state: main, action: any) => {
      state.title = action.payload.data.allMains[0].title;
      state.description = action.payload.data.allMains[0].description;
      state.url = action.payload.data.allMains[0].backgroundImage.url;
      state.alt = action.payload.data.allMains[0].backgroundImage.alt;
    },
  },
});

export const { setMain } = mainSlice.actions;

export default mainSlice.reducer;
