import {
  IS_CREATING_WORKOUT_POST,
  WORKOUT_CREATED_SUCCESS_POST,
  WORKOUT_CREATED_FAILURE_POST
} from "../actions";

const initialState = {
  isLoading: false,
  isMade: false,
  error: "",
  journalId: ""
};

export const nameWoReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_CREATING_WORKOUT_POST:
      return {
        ...state,
        isLoading: true
      };
    case WORKOUT_CREATED_SUCCESS_POST:
      return {
        ...state,
        isLoading: false,
        isMade: true,
        journalId: action.payload
      };
    case WORKOUT_CREATED_FAILURE_POST:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
