import axios from "axios";

// อ่าน token จาก localStorage
let userStorage = localStorage.getItem('user')
let userStorageJSON = JSON.parse(userStorage)
let token = userStorageJSON['token']

const TeacherService = axios.create({
  baseURL: "https://wwwdev.csmju.com/api/",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
  },
});

export default TeacherService;