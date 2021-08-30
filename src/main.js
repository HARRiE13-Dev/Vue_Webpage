import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles--------------------------------------------------

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";


// Routing -------------------------------------------------
// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";

import Home from "@/views/Home.vue";
import Page404 from "@/views/Page404.vue";
import About from "@/views/About.vue";
import Appeal from "@/views/Appeal.vue";
import Service from "@/views/Service.vue";
import Program from "@/views/Program.vue";


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
      {
        path: "/auth/register",
        component: Register,
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
    path: "/service",
    component: Service,
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

//Create Constant Var--------------------------------------------------------------------
const app = createApp(App)
app.use(router)
app.mount('#app')
