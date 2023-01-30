import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homepageReducer from "../features/PersonalHomepage/personalHomepageSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
