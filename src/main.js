import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";


import VCalendar from 'v-calendar';


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import  VueHtmlToPaper from '@/services/VueHtmlToPaper'

// import { VueReCaptcha } from 'vue-recaptcha-v3'

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

import Login_Admin from "@/views/auth/Login_Admin.vue";

import Login_User from "@/views/auth/Login_User.vue";
import Service_Student from "@/views/auth/Service_Student.vue";
import Service_Teacher from "@/views/auth/Service_Teacher.vue";

//Service For Student
import Maintenance from "@/views/auth/forStudent/Maintenance_System.vue";


//Service For Personnel
import Maintenance_Personnel from "@/views/auth/forPersonnel/Maintenance_System_forPersonnel.vue";
import CV from "@/views/auth/forPersonnel/CV.vue";
import CVPrint from "@/views/auth/forPersonnel/CVPrint.vue";

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

import store from './store'

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
        beforeEnter: authGuard
      },
      {
        path: "/admin/feed",
        name: 'Feed',
        component: Feed,
        beforeEnter: authGuard
      },
      {
        path: "/admin/addfeed",
        component: AddFeed,
        beforeEnter: authGuard
      },
      {
        path: "/admin/editfeed",
        name: 'EditFeed',
        component: EditFeed,
        beforeEnter: authGuard
      },
      {
        path: "/admin/alumnusshow",
        name: 'AlumnusShow',
        component: AlumnusShow,
        beforeEnter: authGuard
      },
      {
        path: "/admin/alumnusadd",
        name: 'AlumnusAdd',
        component: AlumnusAdd,
        beforeEnter: authGuard
      },
      {
        path: "/admin/alumnusedit",
        name: 'AlumnusEdit',
        component: AlumnusEdit,
        beforeEnter: authGuard
      },
      {
        path: "/admin/equipmentshow",
        component: EquipmentShow,
        beforeEnter: authGuard
      },
      {
        path: "/admin/complaining",
        component: Complaining,
        beforeEnter: authGuard
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
      {
        path: "/auth/admin",
        name: 'Login Admin',
        component: Login_Admin,
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
        beforeEnter: authGuard
      },
      {
        path: "/service/service_teacher/maintenance_forpersonnel",
        name: "Maintenance_Personnel",
        component: Maintenance_Personnel,
        beforeEnter: authGuard
      },
      {
        path: "/service/service_teacher/cv",
        name: "CV",
        component: CV,
        beforeEnter: authGuard
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
  }


  //{ path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});




// const component = {
//   setup() {
//     const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

//     const recaptcha = async () => {
//       // (optional) Wait until recaptcha has been loaded.
//       await recaptchaLoaded()

//       // Execute reCAPTCHA with action "login".
//       const token = await executeRecaptcha('login')

//       // Do stuff with the received token.
//     }

//     return {
//       recaptcha
//     }
//   },
//   template: '<button @click="recaptcha">Execute recaptcha</button>'
// }

//Create Constant Var--------------------------------------------------------------------

const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(store)
app.use(VCalendar, {})

app.use(VueSweetalert2);
app.use(VueHtmlToPaper);
//app.use(VueReCaptcha, { siteKey: '<site key>' })
