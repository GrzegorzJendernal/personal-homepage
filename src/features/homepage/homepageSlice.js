import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: "homepage",
    initialState: {
        repos: [],
        status: "loading",
    },
    reducers: {
        fetchRepos: (state) => {
            state.status = "loading";
        },
        fetchReposSucces: (state, { payload: repos }) => {
            state.status = "succes";
            state.repos = repos;
        },
        fetchReposError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchRepos,
    fetchReposSucces,
    fetchReposError,
} = homepageSlice.actions;

const selectHomepageState = (state) => state.homepage;

export const selectStatus = (state) => selectHomepageState(state).status;
export const selectRepos = (state) => selectHomepageState(state).repos;

export default homepageSlice.reducer;