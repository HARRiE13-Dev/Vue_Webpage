<template>
  <nav
    class="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow custom navbar-expand-lg"
  >
    <div
      class="container flex flex-wrap items-center justify-between px-4 mx-auto"
    >
      <div
        class="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="" class="h-12 reletive" />
        </router-link>
        <button
          class="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div
        class="items-center flex-grow lg:flex"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col list-none lg:flex-row lg:ml-auto">
          <!-- <li class="flex items-center">
            <index-dropdown />
          </li> -->

          <li class="flex items-center">
            <router-link
              to="/"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
            >
              หน้าแรก
            </router-link>
          </li>

          <li class="flex items-center">
            <about-dropdown />
          </li>

          <li class="flex items-center">
            <router-link
              to="/news"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700 hover:text-emerald-600"
            >
              ข่าวสาร
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/program"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
            >
              หลักสูตร
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/alumnus"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700 hover:text-emerald-600"
            >
              ศิษย์เก่า
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/contact"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700 hover:text-emerald-600"
            >
              ติดต่อเรา
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link to="/auth/login">
              <button
                @click="checkLogin()"
                class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-teal-500 rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
                type="button"
              >
                เข้าสู่ระบบ
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
//import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";
import AboutDropdown from "@/components/Dropdowns/AboutMain.vue";
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      navbarOpen: false,
      dropdownPopoverShow: false,
    };
  },
  methods: {
    checkLogin() {
      this.local_user = JSON.parse(window.localStorage.getItem("user"));
      this.local_token = this.local_user.access_token;

      this.local_teacher = JSON.parse(window.localStorage.getItem("user"));
      this.token = this.local_teacher.token;

      if (this.token == null) {
        //history.go(-1)
        //this.$router.push({ name: "ServiceStudent" });
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "กำลังเข้าสู่ระบบ",
        }).then(() => {
          // Login  Success => Dashboard
          window.location.href = "/service/service_student";
        });
      } else if (this.local_token == null) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "กำลังเข้าสู่ระบบ",
        }).then(() => {
          // Login  Success => Dashboard
          window.location.href = "/service/service_teacher";
        });
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    setNavbarOpen: function() {
      this.navbarOpen = !this.navbarOpen;
    },
    toggleDropdown: function() {
    
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
  components: {
    //IndexDropdown,
    AboutDropdown,
  },
};
</script>
