<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://wwwdev.csmju.com/images/banner/thumbnail/Banner_1638264985.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="absolute w-full h-full bg-black opacity-50"
          ></span>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="fill-current text-blueGray-200"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      <section class="relative py-16 bg-blueGray-200">
        <div class="container px-4 mx-auto">
          <div
            class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6">
              <div class="mt-6 text-center">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  กิจกรรม
                </h3>
                <p
                  class="font-semibold leading-normal text-md text-blueGray-500"
                >
                  Activity
                </p>
              </div>

              <div class="py-6 mt-10 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12"></div>
                </div>
              </div>

              <div class="flex flex-wrap">
                <div
                  v-for="act in activity"
                  :key="act.activityId"
                  class="w-full px-4 lg:w-4/12 "
                >
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg hover:zoom bg-emerald-500"
                  >
                    <img
                      alt="..."
                      :src="act.Activity_Detail"
                      class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        class="absolute left-0 block w-full h-95-px -top-94-px"
                      ></svg>
                      <h4 class="text-xl font-bold text-white">
                        {{ act.Activity_Title }}
                      </h4>
                      <p class="mt-2 font-light text-white text-md">
                        {{ act.Activity_Location }}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <main-footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import MainFooter from "@/components/Footers/MainFooter.vue";
import http from "@/services/APIService";

export default {
  data() {
    return {
      activity: [],
    };
  },
  components: {
    Navbar,
    MainFooter,
  },
  methods: {
    async getActivity() {
      const response = await http.get("activity");
      this.activity = response.data;
    },
  },
  mounted() {
    this.getActivity();
  },
};
</script>
