import axios from "axios";

const MJUService = axios.create({
  baseURL: "https://www.digital.mju.ac.th/api/",
  
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default MJUService;