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
                <h1
                  class="text-5xl font-semibold text-white duration-150 ease-linear hover:text-emerald-600 hover:zoom"
                >
                  Computer Science
                </h1>
                <h2
                  class="mt-4 text-2xl duration-150 ease-linear text-blueGray-200 hover:text-emerald-600 hover:zoom"
                >
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
              <router-link to="program" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white rounded-lg shadow-lg hover:zoom hover:bg-teal-500"
                >
                  <div class="flex-auto px-4 py-5 ">
                    <div
                      class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg ustify bg-emerald-400"
                    >
                      <i class="fas fa-laptop-code"></i>
                    </div>
                    <h6 class="text-xl font-semibold ">เรียนเกี่ยวกับ ?</h6>
                    <p class="mt-2 mb-4 text-blueGray-500 ">
                      สาขาวิชาของเราสอนพื้นฐานการเขียนโปรแกรมคอมพิวเตอร์
                      ,การวิเคราะห์ และออกแบบระบบสารสนเทศ ,การสร้างเว็บไซต์
                      และแอปพลิเคชัน<br />
                      รวมถึงการสร้าง AI (Artificial Intelligence)
                    </p>
                    <router-link to="/auth/login"> </router-link>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="w-full px-4 text-center md:w-4/12">
              <a
                href="http://www.admissions.mju.ac.th/main.aspx"
                target="_blank"
              >
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white rounded-lg shadow-lg hover:zoom"
                >
                  <div class="flex-auto px-4 py-5">
                    <div
                      class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-lightBlue-400"
                    >
                      <i class="fas fa-user-graduate"></i>
                    </div>
                    <h6 class="text-xl font-semibold">รับสมัคร</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      เปิดรับสมัครนักศึกษาใหม่ ผ่านทางระบบ TCAS <br />
                      ทางมหาลัยวิทยาลัยแม่โจ้ โดยสามารถอ่านรายละเอียดได้ที่
                      www.admission.mju.ac.th
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-full px-4 text-center md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white rounded-lg shadow-lg hover:zoom"
              >
                <div class="flex-auto px-4 py-5">
                  <div
                    class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-emerald-400"
                  >
                    <i class="fas fa-comment-dots"></i>
                  </div>
                  <h6 class="text-xl font-semibold">ติดต่อเรา</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    ท่านสามารถติดต่อกับทางสาขาวิชาของเราโดยตรงได้ที่ Facebook
                    Fanpage หรือผ่านช่องทาง <br />
                    Line Official ของเราได้เลย
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 1 -->

          <div class="flex flex-wrap ">
            <div class="w-full px-4 text-center md:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white rounded-lg shadow-lg hover:zoom"
              >
                <div class="flex-auto px-1 ">
                  <div
                    class="block overflow-hidden text-center bg-white rounded-t"
                  >
                    <div class="container px-4 pt-6 mx-auto">
                      <div class="flex flex-wrap justify-center">
                        <div class="w-1/3 px-2">
                          <div
                            class="inline-flex items-center justify-center w-20 h-20 p-3 text-center text-white rounded-lg shadow-lg bg-emerald-400"
                          >
                            <h3 class="text-4xl">
                              {{ day }}
                            </h3>
                          </div>
                          <h3 class="mb-5 text-lg">Day</h3>
                        </div>
                        <div class="w-1/3 px-2">
                          <div
                            class="inline-flex items-center justify-center w-20 h-20 p-3 text-center text-white rounded-lg shadow-lg bg-emerald-400"
                          >
                            <h3 class="text-4xl">
                              {{ month }}
                            </h3>
                          </div>
                          <h3 class="mb-5 text-lg">Month</h3>
                        </div>
                        <div class="w-1/3 px-2">
                          <div
                            class="inline-flex items-center justify-center w-24 h-20 p-3 text-center text-white rounded-lg shadow-lg bg-emerald-400"
                          >
                            <h3 class="text-4xl">
                              {{ year }}
                            </h3>
                          </div>
                          <h3 class="mb-5 text-lg">Year</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full px-4 text-center md:w-2/12">
              <a href="https://g.page/CSMJU?share">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white rounded-lg shadow-lg hover:zoom"
                >
                  <div class="flex-auto px-4 py-5">
                    <div
                      class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-lightBlue-400"
                    >
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Location</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Maejo University
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Column 2 -->

          <div class="flex flex-wrap ">
            <div class="w-full px-4 text-center md:w-6/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white rounded-lg shadow-lg hover:zoom"
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

            <div class="w-full px-4 text-center md:w-6/12 md:-mt-48">
              <div
                class="relative flex flex-col w-full min-w-0 py-12 mb-8 break-words duration-150 ease-linear bg-white rounded-lg shadow-lg hover:zoom"
              >
                <h6 class="mt-4 text-xl font-semibold">ข่าวสาร</h6>
                <div class="py-6">
                  <Carousel
                    :autoplay="2000"
                    :items-to-show="1.2"
                    :wrap-around="true"
                  >
                    <Slide v-for="slide in 2" :key="slide">
                      <div class="carousel__item">
                        <img
                          alt="..."
                          src="@/assets/img/landing.jpg"
                          class="relative w-full mx-auto rounded-lg shadow-lg "
                        />
                      </div>
                      c
                    </Slide>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 4 -->
          <div class="flex flex-wrap ">
            <div class="w-full px-4 text-center md:w-12/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white rounded-lg shadow-lg hover:zoom"
              >
                <div class="flex-auto px-0">
                  <h6 class="py-5 text-xl font-semibold">
                    <i class="text-red-500 fab fa-youtube"></i>
                    วีดีโอแนะนำหลักสูตร
                  </h6>
                  <div class="relative w-full max-w-full overflow-hidden pb-72">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-b"
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
//Program Filesimport axios from "axios";

import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    MainNavbar,
    MainFooter,

    Carousel,
    Slide,
  },
  data() {
    return {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };
  },

  methods: {},
});
</script>
