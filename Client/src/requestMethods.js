import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
let TOKEN;

if (
  JSON.parse(JSON.stringify(localStorage.getItem("persist:root"))) === null ||
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
) {
  TOKEN = null;
} else {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser.accessToken;
}

export const publicRequest = axios.create({ baseURL: BASE_URL });
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
