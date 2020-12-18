import axios from "axios";

export function axiosWithAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:8001/",
    headers: {
      Authorization: token,
      "content-type": "application/json"
    }
  });
}
// export function axiosWithAuth() {
//   const token = localStorage.getItem("token");

//   return axios.create({
//     baseURL: "https://rvadventures.herokuapp.com/",
//     headers: {
//       Authorization: token,
//       "content-type": "application/json"
//     }
//   });
// }
