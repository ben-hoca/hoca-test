import axios from "axios";
import { API_URL } from "../consts";

export let axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});
