<template>
  <div>
    <a
      class="block text-blueGray-500"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="flex items-center">
        <span
          class="inline-flex items-center justify-center w-12 h-12 text-sm text-white rounded-full bg-blueGray-200"
        >
          <img
            alt="..."
            class="w-full align-middle border-none rounded-full shadow-lg"
            src="@/assets/img/logo.png"
          />
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="z-50 float-left py-2 text-base text-left list-none bg-white rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
        
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        โปรไฟล์
      </a>
      <a
        
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        
      </a>
      <a
        
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        ตั้งค่า
      </a>
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <a
      @click="onClickLogout"
        
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        ออกจากระบบ
      </a>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
import image from "@/assets/img/team-1-800x800.jpg";
import http from '@/services/AuthService';

export default {
  data() {
    return {
      dropdownPopoverShow: false,
      image: image,
    };
  },
  mounted() {
    this.getPersonnelData();
  },
  methods: {
    getPersonnelData() {
     http.get(`personnel/teacher`)
        .then((response) => {
          this.personnel_array = response.data;

        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
              //Call Sweet Alert
              const Toast = this.$swal.mixin({
                position: "center",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
               
              });

              Toast.fire({
                icon: "error",
                title: "Connection Error",
              });
            }
          }
        });
    },
    
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    onClickLogout() {
 
     localStorage.removeItem("user");
      this.$router.push({ name: "Login Admin" });
      
    },
  },
};
</script>
