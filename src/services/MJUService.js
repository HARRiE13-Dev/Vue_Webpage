import axios from "axios";

const MJUService = axios.create({
  baseURL: "https://www.digital.mju.ac.th/auth/mju/",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default MJUService;