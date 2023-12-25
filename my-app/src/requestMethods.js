import axios from "axios";

const BASE_URL = "http://localhost:8888/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU2NDM4NGMyZTgyZTU0NmE3YTdmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjQ0NjQ3OCwiZXhwIjoxNjgyNzA1Njc4fQ.OG2hJ88RuLzWFsbeEeN4UNvyTicjLiaxQmus5mpLVXk";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
