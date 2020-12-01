import axios from "axios";

export function axiosWithAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://rventure.herokuapp.com/",
    headers: {
      Authorization: token,
      "content-type": "application/json"
    }
  });
}
