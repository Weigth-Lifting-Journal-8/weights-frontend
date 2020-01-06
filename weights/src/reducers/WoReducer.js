import {
  GET_WO_DATA_START,
  GET_WO_DATA_SUCCESS,
  GET_WO_DATA_FAILURE,
  GET_SETS_START,
  GET_SETS_SUCCESS,
  GET_SETS_FAILURE
} from "../actions/index.js";

const initialState = {
  workoutArray: [],
  workoutsIsLoading: false,
  workoutsError: "",
  workoutIsUpdated: false,
  setsArray: [],
  setsIsLoading: false,
  setsError: ""
};

export const workoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WO_DATA_START: {
      return {
        ...state,
        workoutsIsLoading: true,
        workoutsError: ""
      };
    }
    case GET_WO_DATA_SUCCESS: {
      return {
        ...state,
        workoutArray: action.payload,
        workoutsIsLoading: false,
        workoutsError: ""
      };
    }
    case GET_WO_DATA_FAILURE: {
      return {
        ...state,
        workoutsIsLoading: false,
        workoutsError: action.payload
      };
    }
    case GET_SETS_START: {
      return {
        ...state,
        setsIsLoading: true,
        setsError: ""
      };
    }
    case GET_SETS_SUCCESS: {
      return {
        ...state,
        setsArray: action.payload,
        setsIsLoading: false,
        setsError: ""
      };
    }
    case GET_SETS_FAILURE: {
      return {
        ...state,
        setsIsLoading: false,
        setsError: action.payload
      };
    }
    default:
      return state;
  }
};
