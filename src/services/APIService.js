import axios from "axios";


const APIService = axios.create({
  baseURL: "https://wwwdev.csmju.com/api/",
  withCredentials: true,
  headers: {
    "Content-type": "multipart/form-data",
    "Accept": "application/json",
    // "Authorization": `Bearer ${token}`
  },
});

// การใช้ interceptors เพื่อแทรกตัว token เข้าไปใน header
APIService.interceptors.request.use(config => {

  // อ่าน token จาก localStorage
  let token = ''

  try{
    let userStorage = localStorage.getItem('user')
    let userStorageJSON = JSON.parse(userStorage)
    token = userStorageJSON['token']
  }catch(error){
    console.log(error);
  }

  // เช็คว่าถ้า token ไม่ null
  if(token){
    config.headers.Authorization = "Bearer "+token
  }

  return config

})

export default APIService;