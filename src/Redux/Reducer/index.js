import { combineReducers } from "redux";

import RegistrationHome from "./RegistrationHome";

const appReducer = combineReducers({
  RegistrationHome,
});

const reducers = (state, action) => {
  return appReducer(state, action);
};

export default reducers;
