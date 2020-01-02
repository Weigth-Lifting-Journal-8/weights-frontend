import { combineReducers } from "redux";

import { registrationReducer } from "./registrationReducer";
import { loginReducer } from "./loginReducer";

export const reducer = combineReducers({
  register: registrationReducer,
  login: loginReducer
});
