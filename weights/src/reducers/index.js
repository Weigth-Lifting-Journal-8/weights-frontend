import { combineReducers } from "redux";

import { registrationReducer } from "./registrationReducer";
import { loginReducer } from "./loginReducer";
import { exerciseReducer } from "./exerciseReducer";
import { nameWoReducer } from "./nameWoReducer";
import { WoReducer } from "./WoReducer";

export const reducer = combineReducers({
  workouts: WoReducer,
  register: registrationReducer,
  login: loginReducer,
  exercise: exerciseReducer,
  nameWorkout: nameWoReducer
});
