import axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL;
export const token = process.env.REACT_APP_API_KEY;

const authInstance = axios.create();

authInstance.interceptors.request.use((config) => {
  config.headers = (config.headers ?? {}) as { "x-functions-key": string };
  config.headers["Content-Type"] = "application/json";
  config.headers["x-functions-key"] = token;
  return config;
});

export default authInstance;
