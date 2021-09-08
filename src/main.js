import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
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
import Feed from "@/views/admin/Feed.vue";


// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Service_Student from "@/views/auth/Service_Student.vue";
import Service_Teacher from "@/views/auth/Service_Teacher.vue";


// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";

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
import TestApi from "@/views/TestApi.vue";


const routes = [

  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
      {
        path: "/admin/feed",
        component: Feed,
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
        component: Login,
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
        component: Service_Student,
      },
      {
        path: "/auth/service_teacher",
        component: Service_Teacher,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/index",
    component: Index,
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
//app.use(VueReCaptcha, { siteKey: '<site key>' })
