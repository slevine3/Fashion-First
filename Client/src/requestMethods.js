import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzdjMWY4ZDBmNTRlOGJkYmVkOWIwZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjA5OTc0MywiZXhwIjoxNjUyMzU4OTQzfQ.NqmTW6T5k1AJeap1DIPMqmHqG1f6-wMQZbYeg3bAuwA";

export const publicRequest = axios.create({ baseURL: BASE_URL });
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
