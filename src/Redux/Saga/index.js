import { all } from "redux-saga/effects";

import RegistrationHome from "./RegistrationHome";

export default function* rootSaga() {
  yield all([RegistrationHome()]);
}
