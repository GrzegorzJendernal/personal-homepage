import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepos } from "../../core/getRepos";
import { fetchRepos, fetchReposError, fetchReposSucces } from "./homepageSlice";

function* fetchReposHandler() {
    try {
        yield delay(1000);
        const repos = yield call(getRepos);
        yield put(fetchReposSucces(repos));
    } catch (error) {
        yield put(fetchReposError());
    }
};

export function* homepageSaga() {
    yield takeLatest(fetchRepos.type, fetchReposHandler);
};