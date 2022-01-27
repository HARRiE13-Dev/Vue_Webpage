import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";


import VCalendar from 'v-calendar';


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// styles--------------------------------------------------

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";


// Routing -------------------------------------------------
// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
import Service from "@/layouts/Service.vue";
import Service_forPersonnel from "@/layouts/Service_forPersonnel.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";


import EquipmentShow from "@/views/admin/EquipmentShow.vue";

import Feed from "@/views/admin/FeedShow.vue";
import AddFeed from "@/views/admin/FeedAdd.vue";
import EditFeed from "@/views/admin/FeedEdit.vue";

import Complaining from "@/views/admin/ComplainShow.vue";

import AlumnusShow from "@/views/admin/AlumnusShow.vue";
import AlumnusAdd from "@/views/admin/AlumnusAdd.vue";
import AlumnusEdit from "@/views/admin/AlumnusEdit.vue";


// views for Auth layout
import Login_User from "@/views/auth/Login_User.vue";
import Service_Student from "@/views/auth/Service_Student.vue";
import Service_Teacher from "@/views/auth/Service_Teacher.vue";

//Service For Student
import Maintenance from "@/views/auth/forStudent/Maintenance_System.vue";
import ProfileStudent from "@/views/auth/forStudent/ProfileStudent.vue";


//Service For Personnel
import Maintenance_Personnel from "@/views/auth/forPersonnel/Maintenance_System_forPersonnel.vue";
import CV from "@/views/auth/forPersonnel/CV.vue";
import CVPrint from "@/views/auth/forPersonnel/CVPrint.vue";
import RoomReserve from "@/views/auth/forPersonnel/RoomReserve.vue";
import Profile from "@/views/auth/forPersonnel/Profile.vue";

// views without layouts

import Home from "@/views/Home.vue";
import Page404 from "@/views/Page404.vue";
import About from "@/views/About.vue";
import Program from "@/views/Program.vue";
import News from "@/views/News.vue";
import NewsExplain from "@/views/NewsExplain.vue";
import Staff from "@/views/Staff.vue";
import Teacher from "@/views/Teacher.vue";
import Contact from "@/views/Contact.vue";
import Classroom from "@/views/Classroom.vue";
import Schedule from "@/views/Schedule.vue";
import Alumnus from "@/views/Alumnus.vue";

import TestApi from "@/views/TestApi.vue";

import store from './store';

// Authentication Route Guards Function
function authGuard(to, from, next){
  
  let isAuthenticated = false

  if(localStorage.getItem('user')){
    isAuthenticated = true 
  }else{
    isAuthenticated = false 
  }

  if(isAuthenticated){
    next() 
  }else{
    localStorage.removeItem("user");
    
    next({name: 'Login'})
  }

}

// Authentication Route Guards Function
function authGuard_Personnel(to, from, next){
  
  let isAuthenticated = false
  let local_user = JSON.parse(window.localStorage.getItem("user"));
  let user_role = local_user.user.role;

  if(user_role == 1){
    isAuthenticated = true 
  }else{
    isAuthenticated = false 
  }

  if(isAuthenticated){
    next() 
  }else{
    localStorage.removeItem("user");
    alert("Warning : You are not authorized to access this page! \n\n คำเตือน : ผู้ใช้งานไม่มีสิทธิ์เข้าถึงหน้านี้...โปรดตรวจสอบข้อมูล!")
    next({name: 'Login'})
  }

}

// Authentication Route Guards Function
function authGuard_Admin(to, from, next){

  let isAuthenticated = false
  let local_user = JSON.parse(window.localStorage.getItem("user"));
  let user_role = local_user.user.role;

  if(user_role == 0){
    isAuthenticated = true 
  }else{
    isAuthenticated = false 
  }

  if(isAuthenticated){
    next() 
  }else{
    localStorage.removeItem("user");
    alert("Warning : You are not authorized to access this page! \n\n คำเตือน : ผู้ใช้งานไม่มีสิทธิ์เข้าถึงหน้านี้...โปรดตรวจสอบข้อมูล!")
    next({name: 'Login'})
  }

}


const routes = [

  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: authGuard_Admin
      },
      {
        path: "/admin/feed",
        name: 'Feed',
        component: Feed,
        beforeEnter: authGuard_Admin
      },
      {
        path: "/admin/addfeed",
        component: AddFeed,
        beforeEnter: authGuard_Admin
      },
      {
        path: "/admin/editfeed",
        name: 'EditFeed',
        component: EditFeed,
        beforeEnter: authGuard_Admin
      },
      {
        path: "/admin/alumnusshow",
        name: 'AlumnusShow',
        component: AlumnusShow,
        beforeEnter: authGuard_Admin
      },
      {
        path: "/admin/alumnusadd",
        name: 'AlumnusAdd',
        component: AlumnusAdd,
        beforeEnter: authGuard_Admin
      },
      {
        path: "/admin/alumnusedit",
        name: 'AlumnusEdit',
        component: AlumnusEdit,
        beforeEnter: authGuard_Admin
      },
      {
        path: "/admin/equipmentshow",
        component: EquipmentShow,
        beforeEnter: authGuard_Admin
      },
      {
        path: "/admin/complaining",
        component: Complaining,
        beforeEnter: authGuard_Admin
      },
    ],
  },

  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        name: 'Login',
        component: Login_User,
      },
    ],
  },
  {
    path: "/service",
    redirect: "/service/service_student",
    component: Service,
    children: [
      
      {
        path: "/service/service_student",
        name: "ServiceStudent",
        component: Service_Student,
        beforeEnter: authGuard
      },
      {
        path: "/service/service_student/maintenance",
        name: "Maintenance",
        component: Maintenance,
        beforeEnter: authGuard
      },
      {
        path: "/service/service_student/profilestudent",
        name: "ProfileStudent",
        component: ProfileStudent,
        beforeEnter: authGuard
      },
    ],
  },
  {
    path: "/service_forpersonnel",
    redirect: "/service/service_personnel",
    component: Service_forPersonnel,
    children: [
      
      {
        path: "/service/service_teacher",
        name: "ServiceTeacher",
        component: Service_Teacher,
        beforeEnter: authGuard_Personnel
      },
      {
        path: "/service/service_teacher/maintenance_forpersonnel",
        name: "Maintenance_Personnel",
        component: Maintenance_Personnel,
        beforeEnter: authGuard_Personnel
      },
      {
        path: "/service/service_teacher/cv",
        name: "CV",
        component: CV,
        beforeEnter: authGuard_Personnel
      },
      {
        path: "/service/service_teacher/roomreserve",
        name: "RoomReserve",
        component: RoomReserve,
        beforeEnter: authGuard_Personnel
      },
      {
        path: "/service/service_teacher/profile",
        name: "Profile",
        component: Profile,
        beforeEnter: authGuard_Personnel
      },
     
      
    ],
  },
  {
    path: "/service/service_teacher/cvprint",
    name: "CVPrint",
    component: CVPrint,
    beforeEnter: authGuard
  },
 
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/program",
    component: Program,
  },
  
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/newsexplain",
    name : "NewsExplain",
    component: NewsExplain,
  },
  {
    path: "/staff",
    component: Staff,
  },
  {
    path: "/teacher",
    component: Teacher,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/classroom",
    component: Classroom,
  },
  {
    path: "/schedule",
    component: Schedule,
  },
  {
    path: "/alumnus",
    component: Alumnus,
  },
 
  {
    path: "/testapi",
    component: TestApi,
  },
 
  

  
  //Error 404
  {
    path: "/:catchAll(.*)",
    component: Page404,
    meta :{
      title: 'Not Found This Page',
      description: 'ไม่พบหน้า'
    }
  },


  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Create Constant Var--------------------------------------------------------------------

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VCalendar, {})
app.use(VueSweetalert2);
app.mount('#app') 