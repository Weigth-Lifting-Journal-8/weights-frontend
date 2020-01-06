import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
//POST = CREATE

export const postLoginData = (credentials, history) => dispatch => {
  dispatch({ type: LOGIN_START });

  axiosWithAuth()
    .post(`https://weight-lifting-8.herokuapp.com/auth/login`, credentials)

    .then(response => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.id);

      dispatch({ type: LOGIN_SUCCESS, payload: response.data.id });

      history.push("/dashboard");
    })

    .catch(error => {
      console.log("The api request failed", error.response);

      dispatch({ type: LOGIN_FAILURE, payload: error.response });
    });
};
