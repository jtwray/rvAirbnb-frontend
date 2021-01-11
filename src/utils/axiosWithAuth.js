import axios from "axios";

export function axiosWithAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://rv-adventure.us-east-1.elasticbeanstalk.com/",
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
