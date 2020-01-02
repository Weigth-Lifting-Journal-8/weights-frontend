import axios from "axios";

export const axiosWithAuth = () => {
  // authorization token
  const token = localStorage.getItem("token");

  return axios.create({
    // baseURL: `https://reqres.in/api`,
    headers: {
      Authorization: token
    }
  });
};

// NOTES ****
// https://reqres.in/
