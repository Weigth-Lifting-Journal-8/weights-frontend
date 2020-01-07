import {
  GET_EXERCISE_TYPE_START,
  GET_EXERCISE_TYPE_SUCCESS,
  GET_EXERCISE_TYPE_FAILURE,
  POST_EXERCISE_START,
  POST_EXERCISE_SUCCESS,
  POST_EXERCISE_FAILURE,
  PUT_UPDATE_WORKOUT_START,
  PUT_UPDATE_WORKOUT_SUCCESS,
  PUT_UPDATE_WORKOUT_FAILURE
} from "../actions/index.js";

const initialState = {
  exercises: [],
  exerciseIsLoading: false,
  exerciseError: "",
  exerciseObj: {
    weight: "100lbs",
    reps: 5,
    sets: 5,
    journalId: 0,
    exerciseId: 0
  },
  objectIsLoading: false,
  objectError: ""
};

export const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISE_TYPE_START: {
      return {
        ...state,
        exerciseIsLoading: true,
        exerciseError: ""
      };
    }
    case GET_EXERCISE_TYPE_SUCCESS: {
      return {
        ...state,
        exercises: action.payload,
        exerciseIsLoading: false,
        exerciseError: ""
      };
    }
    case GET_EXERCISE_TYPE_FAILURE: {
      return {
        ...state,
        exerciseIsLoading: false,
        exerciseError: action.payload
      };
    }
    case POST_EXERCISE_START: {
      return {
        ...state,
        objectIsLoading: true,
        objectError: ""
      };
    }
    case POST_EXERCISE_SUCCESS: {
      return {
        ...state,
        exerciseObj: { ...state.exerciseObj, ...action.payload },
        objectIsLoading: false,
        objectError: ""
      };
    }
    case POST_EXERCISE_FAILURE: {
      return {
        ...state,
        objectIsLoading: false,
        objectError: action.payload
      };
    }
    case PUT_UPDATE_WORKOUT_START: {
      return {
        ...state,
        objectIsLoading: true
      };
    }
    case PUT_UPDATE_WORKOUT_SUCCESS: {
      return {
        ...state,
        exerciseObj: { ...state.exerciseObj, ...action.payload },
        objectIsLoading: false,
        objectError: ""
      };
    }
    case PUT_UPDATE_WORKOUT_FAILURE: {
      return {
        ...state,
        objectError: action.payload
      };
    }
    default:
      return state;
  }
};
