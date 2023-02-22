import { all } from "redux-saga/effects";
import { themeSaga } from "../features/PersonalHomepage/themeSaga";

export default function* rootSaga() {
  yield all([themeSaga()]);
}
