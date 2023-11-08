import axios from "axios";

const client = axios.create({
  baseURL: "https://talent-hut.vercel.app",
  timeout: 1000,
  withCredentials: true,
});

export default client;
