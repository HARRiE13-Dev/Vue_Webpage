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
            <section class="px-6 py-6">
              <div class="mt-0 text-center">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  ปฏิทินกิจกรรม
                </h3>
                <p
                  class="font-semibold leading-normal text-md text-blueGray-500"
                >
                  Calendar of Activities
                </p>
              </div>

               <div class="py-6 mt-10 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12">
                    
                  </div>
                </div>
              </div>
              <v-calendar
                class="max-w-full px-6 custom-calendar "
                :masks="masks"
                :attributes="attributes"
                disable-page-swipe
                is-expanded
              >
                <template v-slot:day-content="{ day, attributes }">
                  <div class="z-10 flex flex-col h-full overflow-hidden ">
                    <span class="py-6 font-semibold text-gray-900 text-md day-label ">{{
                      day.day
                    }}</span>
                    <div class="flex-grow overflow-x-auto overflow-y-auto ">
                      <p
                        v-for="attr in attributes"
                        :key="attr.key"
                        class="p-1 mt-0 mb-1 text-xs leading-tight rounded-sm"
                        :class="attr.customData.class"
                      >
                        {{ attr.customData.title }}
                      </p>
                    </div>
                  </div>
                </template>
              </v-calendar>
            </section>
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
//import axios from "axios"

export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const m = 10;
    const y = 2021;
   
    return {
      masks: {
        weekdays: "WWW",
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: "Lunch with mom.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 12),
        },
          {
          key: 2,
          customData: {
            title: "Lunch with mom.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(y, m-1, 12),
        },
      ],
    };
  },
  components: {
    Navbar,
    MainFooter,
  },
};
</script>
