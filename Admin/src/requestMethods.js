import axios from "axios";
// Config
const BASE_URL = "https://fashionfirst.herokuapp.com/api/";
let TOKEN;

if (
  JSON.parse(JSON.stringify(localStorage.getItem("persist:root"))) === null ||
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
) {
  TOKEN = null;
} else {
  
}

export const publicRequest = axios.create({ baseURL: BASE_URL });
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
