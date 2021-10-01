import axios from "axios";

const NewsService = axios.create({
  baseURL:"https://wwwdev.csmju.com/api/",
  withCredentials: true,
  headers: {
    "Content-type": "multipart/form-data",
    "Accept": "application/json",
  },
});

NewsService.interceptors.request.use(config => {

  let token = ''

  try{
    let userStorage = localStorage.getItem('user')
    let userStorageJSON = JSON.parse(userStorage)
    token = userStorageJSON['token']
  }catch(error){
    console.log(error);
  }


  if(token){
    config.headers.Authorization = "Bearer "+token
  }

  return config

})

export default NewsService;