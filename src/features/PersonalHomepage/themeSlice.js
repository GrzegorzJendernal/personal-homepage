import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: getThemeFromLocalStorage(),
  },
  reducers: {
    switchTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

const selectHomepageState = (state) => state.theme;

export const selectTheme = (state) => selectHomepageState(state).darkTheme;

export default themeSlice.reducer;
