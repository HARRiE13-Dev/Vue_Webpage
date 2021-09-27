import axios from "axios";

const authService = axios.create({
  baseURL: "https://wwwdev.csmju.com/api/",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default authService;