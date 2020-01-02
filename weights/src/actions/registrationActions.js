import { axiosWithAuth } from "../utils/axiosWithAuth";

export const IS_REGISTERING = "IS_REGISTERING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const register = (user, history) => {
  return dispatch => {
    dispatch({ type: IS_REGISTERING });
    axiosWithAuth()
      .post("https://reqres.in/api/register", user)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS });
        history.push("/");
      })
      .catch(err => {
        dispatch({ type: REGISTER_ERROR, payload: err.response });
      });
  };
};

// https://reqres.in/
