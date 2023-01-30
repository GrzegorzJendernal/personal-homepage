import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getRepos } from "./getRepos";
import {
  fetchRepos,
  fetchReposError,
  fetchReposSuccess,
  selectTheme,
} from "./personalHomepageSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { delayTime } from "./delayTime";

function* fetchReposHandler() {
  try {
    yield delay(delayTime);
    const repos = yield call(getRepos);
    yield put(fetchReposSuccess(repos));
  } catch (error) {
    yield put(fetchReposError());
  }
}

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme);
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepos.type, fetchReposHandler);
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}
