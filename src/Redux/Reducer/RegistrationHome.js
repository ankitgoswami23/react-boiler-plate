import { REGISTRATION_HOME_LOAD } from "../Actions/Types/Registration";

const INIT_STATE = {
  homePage: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case REGISTRATION_HOME_LOAD:
      return { ...state, homePage: "Home" };
    default:
      return state;
  }
};
