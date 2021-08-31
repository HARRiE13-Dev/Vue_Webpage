<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');
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
                  เกี่ยวกับเรา
                </h3>
              </div>

              <div class="py-6 mt-2 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-12/12">
                    <ul
                      class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
                    >
                      <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                        <a
                          class="block px-5 py-3 font-bold leading-normal uppercase rounded shadow-lg"
                          v-on:click="toggleTabs(1)"
                          v-bind:class="{
                            'text-teal-500 bg-white': openTab !== 1,
                            'text-white bg-teal-500': openTab === 1,
                          }"
                        >
                          <i class="mr-1 text-base fas fa-space-shuttle"></i>
                         ประวัติคามเป็นมา
                        </a>
                      </li>
                      <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                        <a
                          class="block px-5 py-3 font-bold leading-normal uppercase rounded shadow-lg"
                          v-on:click="toggleTabs(2)"
                          v-bind:class="{
                            'text-teal-500 bg-white': openTab !== 2,
                            'text-white bg-teal-500': openTab === 2,
                          }"
                        >
                          <i class="mr-1 text-base fas fa-cog"></i> พันธกิจ
                        </a>
                      </li>
                      <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                        <a
                          class="block px-5 py-3 font-bold leading-normal uppercase rounded shadow-lg"
                          v-on:click="toggleTabs(3)"
                          v-bind:class="{
                            'text-teal-500 bg-white': openTab !== 3,
                            'text-white bg-teal-500': openTab === 3,
                          }"
                        >
                          <i class="mr-1 text-base fas fa-briefcase"></i>
                         วิสัยทัศน์
                        </a>
                      </li>
                    </ul>
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
                    >
                      <div class="flex-auto px-4 py-5">
                        <div class="tab-content tab-space">
                          <div
                            v-bind:class="{
                              hidden: openTab !== 1,
                              block: openTab === 1,
                            }"
                          >
                            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                            ประวัติ
                            </p>
                          </div>
                          <div
                            v-bind:class="{
                              hidden: openTab !== 2,
                              block: openTab === 2,
                            }"
                          >
                             <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                            พันธ
                            </p>
                          </div>
                          <div
                            v-bind:class="{
                              hidden: openTab !== 3,
                              block: openTab === 3,
                            }"
                          >
                           <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                            วิสัยทัศน์
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                   
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

import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team2,
      openTab: 1,
    };
  },
  components: {
    Navbar,
    MainFooter,
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
