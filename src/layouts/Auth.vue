<template>
  <div>
    <navbar />
    <main>
      <section class="relative w-full h-full min-h-screen py-40">
        <div
          class="absolute top-0 w-full h-full bg-no-repeat bg-blueGray-800 bg-full"
          :style="`background-image: url('${registerBg2}');`"
        ></div>
        <router-view />
        <foot absolute />
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import Foot from "@/components/Footers/Foot.vue";

import registerBg2 from "@/assets/img/register_bg_2.png";

export default {
  data() {
    return {
      registerBg2,
    };
  },
  components: {
    Navbar,
    Foot,
  },
};
</script>
