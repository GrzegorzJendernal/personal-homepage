import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    repos: null,
    status: "initial",
    theme: getThemeFromLocalStorage(),
  },
  reducers: {
    fetchRepos: (state) => {
      state.status = "loading";
    },
    fetchReposSuccess: (state, { payload: repos }) => {
      state.status = "success";
      state.repos = repos;
    },
    fetchReposError: (state) => {
      state.status = "error";
    },
    switchThemeToDark: (state) => {
      state.theme = "dark";
    },
    switchThemeToLight: (state) => {
      state.theme = "light";
    },
  },
});

export const {
  fetchRepos,
  fetchReposSuccess,
  fetchReposError,
  switchThemeToDark,
  switchThemeToLight,
} = homepageSlice.actions;

const selectHomepageState = (state) => state.homepage;

export const selectStatus = (state) => selectHomepageState(state).status;
export const selectRepos = (state) => selectHomepageState(state).repos;
export const selectTheme = (state) => selectHomepageState(state).theme;

export default homepageSlice.reducer;
