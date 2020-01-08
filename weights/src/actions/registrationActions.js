import { axiosWithAuth } from "../utils/axiosWithAuth";

export const IS_REGISTERING = "IS_REGISTERING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";
//POST = CREATE

export const register = (user, history) => {
  return dispatch => {
    dispatch({ type: IS_REGISTERING });
    axiosWithAuth()
      .post("https://weight-lifting-8.herokuapp.com/api/auth/register", user)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS });
        console.log("The api success at register", user);
        history.push("/");
      })
      .catch(err => {
        dispatch({ type: REGISTER_ERROR, payload: err.response });
      });
  };
};
