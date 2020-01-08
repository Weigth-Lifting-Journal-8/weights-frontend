import { axiosWithAuth } from "../utils/axiosWithAuth.js";

export const GET_WO_DATA_START = "Get_WO_DATA_START";
export const GET_WO_DATA_SUCCESS = "GET_WO_DATA_SUCCESS";
export const GET_WO_DATA_FAILURE = "GET_WO_DATA_FAILURE";

export const GET_SETS_START = "GET_SETS_START";
export const GET_SETS_SUCCESS = "GET_SETS_SUCCESS";
export const GET_SETS_FAILURE = "GET_SETS_FAILURE";

export const getWorkoutsData = () => dispatch => {
  dispatch({ type: GET_WO_DATA_START });
  const userId = localStorage.getItem("id");
  axiosWithAuth()
    .get(`https://weight-lifting-8.herokuapp.com/api/workouts/${userId}/all`)
    .then(response => {
      console.log(response);
      dispatch({ type: GET_WO_DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: GET_WO_DATA_FAILURE, payload: error.response });
    });
};

export const getSets = workout => dispatch => {
  dispatch({ type: GET_SETS_START });

  axiosWithAuth()
    .get(
      `https://weight-lifting-8.herokuapp.com/api/workouts/exercises/${workout.userId}/${workout.id}`
    )

    .then(response => {
      // console.log("response data", response.data.item)
      dispatch({ type: GET_SETS_SUCCESS, payload: response.data.item });
    })

    .catch(error => {
      // console.log(error)
      dispatch({ type: GET_SETS_FAILURE, error });
    });
};

export const deleteSetsAndWorkout = journalId => () => {
  axiosWithAuth()
    .delete(`https://weight-lifting-8.herokuapp.com/api/workouts/${journalId}`)
    .then(response => {
      localStorage.removeItem("journalId");
      console.log("journal deleted", response);
    })
    .catch(error => {
      console.log("Error in Delete", error);
    });
};
