import { axiosWithAuth } from "../utils/axiosWithAuth";
//POST = CREATE
export const IS_CREATING_WORKOUT_POST = "IS_CREATING_WORKOUT_POST";
export const WORKOUT_CREATED_SUCCESS_POST = "IS_CREATING_WORKOUT_POST";
export const WORKOUT_CREATED_FAILURE_POST = "IS_CREATING_WORKOUT_POST";

export const addWorkout = workout => {
  console.log("this is make workout action. Do I work?", workout);
  const userId = localStorage.getItem("id");
  console.log(userId);
  return dispatch => {
    dispatch({ type: IS_CREATING_WORKOUT_POST });
    axiosWithAuth()
      .post(
        `https://weight-lifting-8.herokuapp.com/api/workouts/${userId}`,
        workout
      )
      .then(res => {
        localStorage.setItem("journalId", res.data.name);

        dispatch({ type: WORKOUT_CREATED_SUCCESS_POST, payload: res.data.id });
        localStorage.setItem("journalId", res.data.id);
        console.log(res);
      })
      .catch(err => {
        dispatch({ type: WORKOUT_CREATED_FAILURE_POST, payload: err.response });
      });
  };
};

// export const deleteWorkout = workout => {
//   axiosWithAuth()
//     .delete(
//       `https://weight-lifting-8.herokuapp.com/api/workouts/${localStorage.getItem(
//         "journalId"
//       )}`

//     )
//     .then(res => {
//       localStorage.removeItem("journalId");
//       console.log(res);
//     })
//     .catch(err => {
//       console.log("Error", err);
//     });
// };

export const editWorkoutName = newName => () => {
  // const userId = localStorage.getItem("id");
  axiosWithAuth()
    .put(
      `https://weight-lifting-8.herokuapp.com/api/workouts/${localStorage.getItem(
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

// `https://weight-lifting-8.herokuapp.com/api/workouts/${localStorage.getItem(
//   "journalId"
// )}`;
