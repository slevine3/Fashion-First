import axios from "axios";

const isProduction = process.env.NODE_ENV === 'production';
const BASE_URL = isProduction ? process.env.REACT_APP_PROD_BASE_URL : process.env.REACT_APP_LOCAL_BASE_URL;

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
