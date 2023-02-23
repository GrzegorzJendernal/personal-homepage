import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";
import { RootState } from "../../core/store";

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

const selectHomepageState = (state: RootState) => state.theme;

export const selectTheme = (state: RootState) =>
  selectHomepageState(state).darkTheme;

export default themeSlice.reducer;
