<template>
  <div>
    <main-navbar />
    <main>
      <div
        class="relative flex items-center content-center justify-center pt-16 pb-32 custom min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://www.wallpapertip.com/wmimgs/237-2373103_web-url.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="absolute w-full h-full bg-black opacity-75"
          ></span>
        </div>

        <div class="container relative mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
              <div class="pr-12">
                <h1 class="text-5xl font-semibold text-white">
                  Computer Science
                </h1>
                <h2 class="mt-4 text-2xl text-blueGray-200">
                  Maejo University
                </h2>
              </div>
            </div>
          </div>
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
      </div>

      <section class="pb-20 -mt-24 bg-blueGray-200 custom">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap">
            <div class="w-full px-4 text-center md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
              >
                <div class="flex-auto px-4 py-5">
                  <div
                    class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-emerald-400"
                  >
                    <i class="fas fa-laptop-code"></i>
                  </div>
                  <h6 class="text-xl font-semibold">เกี่ยวกับเรา</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full px-4 text-center md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
              >
                <div class="flex-auto px-4 py-5">
                  <div
                    class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-lightBlue-400"
                  >
                    <i class="fas fa-user-graduate"></i>
                  </div>
                  <h6 class="text-xl font-semibold">รับสมัคร</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full px-4 text-center md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
              >
                <div class="flex-auto px-4 py-5">
                  <div
                    class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-emerald-400"
                  >
                    <i class="fas fa-comment-dots"></i>
                  </div>
                  <h6 class="text-xl font-semibold">ติดต่อเรา</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 1 -->

          <div class="flex flex-wrap ">
            <div class="w-full px-4 text-center md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
              >
                <div class="flex-auto px-1 py-1">
                  <div
                    class="block w-24 overflow-hidden text-center bg-white rounded-t"
                  >
                    <div
                      class="py-3 text-xl font-bold text-white bg-teal-500"
                    ></div>
                    <div class="pt-2 text-xl font-bold text-blueGray-400 ">
                      {{ nameDate }}
                    </div>

                    <div class="pt-0 border-l border-r">
                      <span class="font-bold text-55">{{ date }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full px-4 text-center md:w-2/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
              >
                <div class="flex-auto px-4 py-5">
                  <div
                    class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-lightBlue-400"
                  >
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <h6 class="text-xl font-semibold">MAP</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Keep
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 2 -->

          <div class="flex flex-wrap ">
            <div class="w-full px-4 text-center md:w-6/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
              >
                <div class="flex-auto px-4 py-5">
                  <div
                    class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-emerald-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">ห้องเรียน</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full px-4 -mt-48 text-center md:w-6/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg "
              >
                <div class="flex-auto px-4 py-5">
                  <h6 class="text-xl font-semibold">News feeds</h6>
                </div>
                <p class="mx-4 mt-2 mb-4 text-blueGray-500">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged! Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Nostrum nam
                  ullam expedita unde odio animi aut adipisci saepe molestiae,
                  nobis distinctio libero? Ullam dolorem repellat molestiae
                  deserunt quae aliquid saepe! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Qui eum porro ab perspiciatis
                  est, aliquid laudantium id quidem repellat deleniti expedita
                  tenetur sit incidunt voluptates fugiat totam nesciunt
                  obcaecati nostrum? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Alias quidem deserunt, soluta atque quod
                  iure harum et vero dolorum, doloribus labore animi earum
                  omnis, adipisci nemo sed sint! Provident, rem.
                </p>
              </div>
            </div>
          </div>

          <!-- Column 4 -->
          <div class="flex flex-wrap ">
            <div class="w-full px-4 text-center md:w-12/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg"
              >
                <div class="flex-auto px-0 py-1">
                  <h6 class="py-5 text-xl font-semibold">
                    <i class="text-red-500 fab fa-youtube"></i>
                    วีดีโอแนะนำหลักสูตร
                  </h6>
                  <div class="relative w-full max-w-full overflow-hidden pb-72">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/88JeU0ShY60"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
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
import MainNavbar from "@/components/Navbars/MainNavbar.vue";
import MainFooter from "@/components/Footers/MainFooter.vue";
import axios from "axios";

export default {
  components: {
    MainNavbar,
    MainFooter,
  },
  data() {
    return {
      date: new Date().getDate(),
     
      
      

      personnel_array: [],
      personnel: {
        personnelId: 0,
        personnelPhoto: "",
      },
    };
  },
  mounted() {
    this.getPersonnelData();
  },
  methods: {
    getPersonnelData() {

  
      axios({
        method: "GET",
        url: "http://wwwdev.csmju.com/api/personnel",
      }).then((Response) => {
        this.personnel_array = Response.data;
      });
    },
  },
};
</script>
