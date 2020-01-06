import { axiosWithAuth } from "../utils/axiosWithAuth";
//POST = CREATE
export const IS_CREATING_WORKOUT_POST = "IS_CREATING_WORKOUT_POST";
export const WORKOUT_CREATED_SUCCESS_POST = "IS_CREATING_WORKOUT_POST";
export const WORKOUT_CREATED_FAILURE_POST = "IS_CREATING_WORKOUT_POST";

export const addWorkout = workout => dispatch => {
  console.log("this is make workout action. Do I work?", workout);
  return dispatch => {
    dispatch({ type: IS_CREATING_WORKOUT_POST });
    axiosWithAuth()
      .post(`https://weight-lifting-8.herokuapp.com/api/journals/`, workout)
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
