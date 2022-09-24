import { all, takeEvery, put } from "redux-saga/effects";

import { REGISTRATION_HOME_LOAD } from "../Actions/Types/Registration";
import { registrationHomeLoad } from "../Actions/RegistrationHome";

function* registrationHomePage() {
  try {
    yield put(registrationHomeLoad());
  } catch (e) {
    yield put(registrationHomeLoad());
  }
}

export function* watchHomeLoad() {
  yield takeEvery(REGISTRATION_HOME_LOAD, registrationHomePage);
}

export default function* rootSaga() {
  yield all([watchHomeLoad()]);
}
