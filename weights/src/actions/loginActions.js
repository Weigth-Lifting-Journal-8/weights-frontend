import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const postLoginData = (credentials, history) => dispatch => {
  // loading data
  dispatch({ type: LOGIN_START });

  axiosWithAuth()
    .post(`https://weight-lifting-8.herokuapp.com/auth/login`, credentials)

    .then(response => {
      // successful
      // console.log("post login api response object", response);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.id);

      dispatch({ type: LOGIN_SUCCESS, payload: response.data.id });

      history.push("/dashboard");
    })

    .catch(error => {
      // unsuccessful
      console.log("The api request failed", error.response);

      dispatch({ type: LOGIN_FAILURE, payload: error.response });
    });
};
