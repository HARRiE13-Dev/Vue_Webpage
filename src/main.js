import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";


import VCalendar from 'v-calendar';


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

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

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

import EducationalObjects from "@/views/admin/EducationalObjects.vue";

import Feed from "@/views/admin/Feed.vue";
import AddFeed from "@/views/admin/AddFeed.vue";
import EditFeed from "@/views/admin/EditFeed.vue";

import Complaining from "@/views/admin/Complaining.vue";


// views for Auth layout

import Login_Admin from "@/views/auth/Login_Admin.vue";
import Login from "@/views/auth/Login.vue";
import Login_Student from "@/views/auth/Login_Student.vue";
import Service_Student from "@/views/auth/Service_Student.vue";
import Service_Teacher from "@/views/auth/Service_Teacher.vue";


// views without layouts

import Home from "@/views/Home.vue";
import Page404 from "@/views/Page404.vue";
import About from "@/views/About.vue";
import Appeal from "@/views/Appeal.vue";
import Program from "@/views/Program.vue";
import News from "@/views/News.vue";
import Staff from "@/views/Staff.vue";
import Teacher from "@/views/Teacher.vue";
import Contact from "@/views/Contact.vue";
import Classroom from "@/views/Classroom.vue";
import Activity from "@/views/Activity.vue";
import Document from "@/views/Document.vue";
import Schedule from "@/views/Schedule.vue";

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
        path: "/admin/settings",
        component: Settings,
        beforeEnter: authGuard
      },
      {
        path: "/admin/tables",
        component: Tables,
        beforeEnter: authGuard
      },
      {
        path: "/admin/maps",
        component: Maps,
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
        path: "/admin/educational_objects",
        component: EducationalObjects,
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
        component: Login,
      },
      {
        path: "/auth/login_student",
        name: 'Login for Student',
        component: Login_Student,
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
    redirect: "/auth/service_student",
    component: Service,
    children: [
      
      {
        path: "/auth/service_student",
        name: "ServiceStudent",
        component: Service_Student,
        beforeEnter: authGuard
      },
      {
        path: "/auth/service_teacher",
        name: "ServiceTeacher",
        component: Service_Teacher,
        beforeEnter: authGuard
      },
    ],
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
    path: "/appeal",
    component: Appeal,
  }, 
  {
    path: "/program",
    component: Program,
  },
  
  {
    path: "/news",
    component: News,
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
    path: "/activity",
    component: Activity,
  },
  {
    path: "/document",
    component: Document,
  },
  {
    path: "/schedule",
    component: Schedule,
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
//app.use(VueReCaptcha, { siteKey: '<site key>' })
