import { axiosWithAuth } from "../utils/axiosWithAuth.js";
//GET = READ
export const GET_EXERCISE_TYPE_START = "GET_EXERCISE_TYPE_START";
export const GET_EXERCISE_TYPE_SUCCESS = "GET_EXERCISE_TYPE_START";
export const GET_EXERCISE_TYPE_FAILURE = "GET_EXERCISE_TYPE_FAILURE";
//POST = CREATE
export const POST_EXERCISE_START = "POST_EXERCISE_START";
export const POST_EXERCISE_SUCCESS = "POST_EXERCISE_SUCCESS";
export const POST_EXERCISE_FAILURE = "POST_EXERCISE_FAILURE";
//PUT = UPDATE
export const PUT_UPDATE_WORKOUT_START = "PUT_UPDATE_WORKOUT_START";
export const PUT_UPDATE_WORKOUT_SUCCESS = "PUT_UPDATE_WORKOUT_SUCCESS";
export const PUT_UPDATE_WORKOUT_FAILURE = "PUT_UPDATE_WORKOUT_FAILURE";

export const gettingExerciseData = () => dispatch => {
  dispatch({ type: GET_EXERCISE_TYPE_START });

  axiosWithAuth()
    .get("https://backend-buildweek-wlj-mack.herokuapp.com/api/exercises")
    .then(response => {
      console.log("getExercise data", response);

      dispatch({
        type: GET_EXERCISE_TYPE_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_EXERCISE_TYPE_FAILURE,
        payload: error.response
      });
    });
};

export const postExercise = exercise => dispatch => {
  dispatch({ type: POST_EXERCISE_START });

  axiosWithAuth()
    .post(
      "https://backend-buildweek-wlj-mack.herokuapp.com/api/journalexercise/",
      exercise
    )
    .then(response => {
      console.log("post exercise response", response.data.id);
      localStorage.setItem("journalexerciseId", response.data.id);
      dispatch({ type: POST_EXERCISE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("post exercise error", error);

      dispatch({ type: POST_EXERCISE_FAILURE, payload: error });
    });
};

export const updateWorkoutData = workout => dispatch => {
  dispatch({ type: PUT_UPDATE_WORKOUT_START });
  axiosWithAuth()
    .put(
      `https://weight-lifting-8.herokuapp.com/api/journalexercise/${localStorage.getItem(
        "journalexerciseId"
      )}`,
      workout
    )
    .then(response => {
      dispatch({ type: PUT_UPDATE_WORKOUT_SUCCESS, payload: workout });
      localStorage.removeItem("exerciseId");
      localStorage.removeItem("journalId");
      localStorage.removeItem("journalexerciseId");
      console.log("workout updated", response);
    })
    .catch(error => {
      dispatch({ type: PUT_UPDATE_WORKOUT_FAILURE, payload: error.response });
    });
};

export const deleteWorkout = workoutId => () => {
  axiosWithAuth()
    .delete(
      `https://weight-lifting-8.herokuapp.com/api/journalexercise/${workoutId}`
    )
    .then(response => {
      localStorage.removeItem("exerciseId");
      console.log("workout deleted", response);
    })
    .catch(error => {
      console.log(error);
    });
};
