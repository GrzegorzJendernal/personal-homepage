import { all } from "redux-saga/effects";
import { homepageSaga } from "../features/PersonalHomepage/homepageSaga";

export default function* rootSaga() {
  yield all([homepageSaga()]);
}
