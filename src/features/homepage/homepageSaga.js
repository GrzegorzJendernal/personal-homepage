import {
    call,
    delay,
    put,
    select,
    takeEvery,
    takeLatest
} from "redux-saga/effects";
import { getRepos } from "../../core/getRepos";
import {
    fetchRepos,
    fetchReposError,
    fetchReposSucces,
    selectTheme
} from "./homepageSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* fetchReposHandler() {
    try {
        yield delay(1000);
        const repos = yield call(getRepos);
        yield put(fetchReposSucces(repos));
    } catch (error) {
        yield put(fetchReposError());
    }
};

function* saveThemeInLocalStorageHandler() {
    const theme = yield select(selectTheme);
    yield call(saveThemeInLocalStorage, theme);
};

export function* homepageSaga() {
    yield takeLatest(fetchRepos.type, fetchReposHandler);
    yield takeEvery("*", saveThemeInLocalStorageHandler);
};