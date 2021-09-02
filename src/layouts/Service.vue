<template>
  <div>
    <service-navbar/>

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
import ServiceNavbar from "@/components/Navbars/ServiceNavbar.vue";
import Foot from "@/components/Footers/Foot.vue";

//import backgroundLogin from "@/assets/img/bg-1.png";

export default {
  data() {
    return {
     // backgroundLogin,
    };
  },
  components: {
    ServiceNavbar,
    Foot,
  },
};
</script>
