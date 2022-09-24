import { REGISTRATION_HOME_LOAD } from "./Types/Registration";

export const registrationHomeLoad = (payload) => {
  return {
    type: REGISTRATION_HOME_LOAD,
    payload,
  };
};
