<template>
  <div>
    
    <admin-navbar/>

    <main>
      <section class="relative w-full h-full min-h-screen py-16">         
        <div
          class="absolute top-0 w-full h-full bg-no-repeat bg-blueGray-800 bg-full"
          :style="`background-image: url('${backgroundLogin}');`"
        ></div>
        <router-view />
        <foot absolute />
      </section>
    </main>
  </div>
</template>
<script>

import Foot from "@/components/Footers/Foot.vue";
import AdminNavbar from "@/components/Navbars/ServiceNavbar.vue";


export default {
  data() {
    return {
     
     
    };
  },
  components: {
   
    Foot,
    AdminNavbar
  },
};
</script>
