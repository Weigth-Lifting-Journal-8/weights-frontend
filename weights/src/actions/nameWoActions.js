import { axiosWithAuth } from "../utils/axiosWithAuth";
//POST = CREATE
export const IS_CREATING_WORKOUT_POST = "IS_CREATING_WORKOUT_POST";
export const WORKOUT_CREATED_SUCCESS_POST = "IS_CREATING_WORKOUT_POST";
export const WORKOUT_CREATED_FAILURE_POST = "IS_CREATING_WORKOUT_POST";

export const addWorkout = workout => {
  console.log("this is make workout action. Do I work?", workout);
  return dispatch => {
    dispatch({ type: IS_CREATING_WORKOUT_POST });
    axiosWithAuth()
      .post(
        `https://weight-lifting-8.herokuapp.com/api/user/${workout}/workouts`,
        workout
      )
      .then(res => {
        localStorage.setItem("journalId", res.data.id);

        dispatch({ type: WORKOUT_CREATED_SUCCESS_POST, payload: res.data.id });
        localStorage.setItem("journalId", res.data.id);
        console.log(res);
      })
      .catch(err => {
        dispatch({ type: WORKOUT_CREATED_FAILURE_POST, payload: err.response });
      });
  };
};

export const editWorkoutName = newName => () => {
  axiosWithAuth()
    .put(
      `https://weight-lifting-8.herokuapp.com/api/user/${localStorage.getItem(
        "journalId"
      )}`,
      newName
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log("Error", err);
    });
};
