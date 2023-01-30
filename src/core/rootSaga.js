import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../features/PersonalHomepage/personalHomepageSaga";

export default function* rootSaga() {
  yield all([personalHomepageSaga()]);
}
