import { call, select, takeEvery } from "redux-saga/effects";
import { selectTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}
