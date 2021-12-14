<template>
  <div>
    <main-navbar />
    <main>
      <div
        class="relative flex items-center content-center justify-center pt-16 pb-32 custom min-h-screen-75"
      >
        <div class="top-0 w-full h-full bg-center bg-cover ">
          <div class="">
            <img
              alt="..."
              :src="bg2"
              class="relative mx-0 shadow-lg cropped "
            />
          </div>
        </div>

        <div class="container absolute">
          <div class="flex flex-wrap -mt-20">
            <div class="w-full px-4 mt-32 text-left lg:w-6/12">
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
              <div class="my-6 rectangle" id="section1"></div>
              <div class="mt-2 text-blueGray-200 item-center">
                <i class="px-2 far fa-play-circle fa-lg"></i>
                <a href="#section2">รับชมวีดีโอแนะนำ</a>
              </div>
            </div>
            <div class="w-full text-left lg:w-6/12">
              <div class="top-0 w-full h-full bg-center bg-cover">
                <Carousel :autoplay="2000">
                  <Slide v-for="image in banner_array" :key="image.Banner_ID">
                    <div
                      class="relative mx-0 shadow-lg carousel__item cropped-bg round-lg"
                    >
                      <img class="cropped-bg" :src="image.Banner_File" />
                    </div>
                  </Slide>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="pb-20 -mt-64 bg-blueGray-200 custom">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div class="w-full px-4 text-center md:w-6/12">
              <router-link to="program" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white "
                >
                  <div class="flex-auto p-1 ">
                    <img
                      alt="..."
                      :src="menu1"
                      class="relative mx-0 shadow-lg cropped-card1"
                    />
                  </div>
                </div>
              </router-link>
            </div>

            <div class="w-full px-4 text-center md:w-6/12">
              <a href="http://www.admissions.mju.ac.th/www/" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white "
                >
                  <div class="flex-auto p-1 ">
                    <img
                      alt="..."
                      :src="menu2"
                      class="relative mx-0 shadow-lg cropped-card1"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full px-4 text-center md:w-4/12">
              <router-link to="about" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white "
                >
                  <div class="flex-auto p-1 ">
                    <img
                      alt="..."
                      :src="menu3"
                      class="relative mx-0 shadow-lg cropped-card2"
                    />
                  </div>
                </div>
              </router-link>
            </div>
            <div class="w-full px-4 text-center md:w-4/12">
              <router-link to="activity" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white"
                >
                  <div class="flex-auto p-1 ">
                    <img
                      alt="..."
                      :src="menu4"
                      class="relative mx-0 shadow-lg cropped-card2"
                    />
                  </div>
                </div>
              </router-link>
            </div>
            <div class="w-full px-4 text-center md:w-4/12">
              <router-link to="contact" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white "
                >
                  <div class="flex-auto p-1 ">
                    <img
                      alt="..."
                      :src="menu5"
                      class="relative mx-0 shadow-lg cropped-card2"
                    />
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <hr />

          <h1 class="px-6 pt-20 mt-4 mb-4 text-3xl">
            <b>News Update</b> | ข่าวสารล่าสุด
          </h1>
          <div class="flex flex-wrap mt-12 mb-12">
            <div
              v-for="news in news_array"
              v-bind:key="news.newsId"
              class="w-full px-4 text-center md:w-4/12"
            >
              <router-link to="program" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom"
                >
                  <div class="flex-auto p-4 ">
                    <img
                      alt="..."
                      :src="news.News_Picture"
                      class="relative row-end-auto mx-0 shadow-lg cropped-card2"
                    />
                  </div>
                  <h3 class="px-4 mb-2 text-lg font-semibold truncate">
                    หัวข้อข่าว : {{ news.News_Title }}
                  </h3>
                  <p class="px-4 pb-4 text-left truncate ">
                    {{ news.News_Detail }}
                  </p>
                </div>
              </router-link>
            </div>
          </div>

          <h1 class="px-6 pt-20 mt-12 mb-4 text-3xl">
            <b>Curriculum </b> | หลักสูตร
          </h1>

          <div class="flex flex-wrap mt-12 mb-12">
            <div class="w-full px-4 text-center md:w-3/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words "
              >
                <div class="flex-auto p-1 ">
                  <h3
                    class="font-bold text-orange-500 duration-150 ease-linear text-55 hover:zoom"
                  >
                    4
                  </h3>
                  <div class="text-2xl">
                    องค์ความรู้แห่งศาสตร์วิทยาการคอมพิวเตอร์
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 text-center md:w-3/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words "
              >
                <div class="flex-auto p-1 ">
                  <h3
                    class="font-bold text-orange-500 duration-150 ease-linear text-55 hover:zoom"
                  >
                    8
                  </h3>
                  <div class="px-4 text-2xl text-left">
                    โมดูลการเรียนรู้เชิงแนวคิดและปฎิบัติ
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 text-center md:w-3/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words "
              >
                <div class="flex-auto p-1 ">
                  <h3
                    class="font-bold text-orange-500 duration-150 ease-linear text-55 hover:zoom "
                  >
                    10+
                  </h3>
                  <div class="text-2xl ">
                    บุคคลากรที่มีความเชี่ยวชาญในศาสตร์ต่าง ๆ
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 text-center md:w-3/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words "
              >
                <div class="flex-auto p-1 ">
                  <h3
                    class="font-bold text-orange-500 duration-150 ease-linear text-55 hover:zoom "
                  >
                    2,000+
                  </h3>
                  <div class="text-2xl ">
                    นักศึกษาที่สำเร็จการศึกษาแล้วทั้งสิ้น
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 class="px-6 pt-20 mt-12 mb-4 text-3xl" id="section2">
            <b>Introduction </b> | วีดีโอแนะนำสาขา
          </h1>

          <div class="flex flex-wrap mt-12 mb-12">
            <div class="w-full px-4 text-center md:w-12/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg "
              >
                <div class="flex-auto px-0">
                  <div class="relative w-full max-w-full overflow-hidden pb-72">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-b"
                      src="https://www.youtube.com/embed/88JeU0ShY60"
                      title="Presentation | Com-Sci MJU 2020"
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
import http from "@/services/APIService";

import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import bg2 from "@/assets/img/bg-1.png";

import menu1 from "@/assets/img/menu1.png";
import menu2 from "@/assets/img/menu2.png";
import menu3 from "@/assets/img/menu3.png";
import menu4 from "@/assets/img/menu4.png";
import menu5 from "@/assets/img/menu5.png";

export default defineComponent({
  name: "Autoplay",
  components: {
    MainNavbar,
    MainFooter,

    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        { id: 1, name: menu3 },
        { id: 2, name: menu4 },
        { id: 3, name: menu5 },
      ],

      bg2,
      menu1,
      menu2,
      menu3,
      menu4,
      menu5,

      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),

      news_array: [],
      banner_array: [],
      news: {
        newsId: 0,
        News_Title: "",
        News_Detail: "",
        News_Picture: "",
      },
    };
  },
  mounted() {
    this.getNewsData();
    this.getBannerData();
  },
  methods: {
    getNewsData() {
      http
        .get(`newsapp`)
        .then((response) => {
          this.news_array = response.data;
          //for (let i = 0; i <= 7; i++) {
          this.news_array.reverse();

          // console.log(this.news_array[0].Banner_File);
          // console.log(this.images[0].name);
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
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

    getBannerData() {
      http
        .get(`banner`)
        .then((response) => {
          this.banner_array = response.data;
          this.banner_array.reverse();

          //console.log(this.banner_array[0].Banner_File);
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
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

    // getPersonnelData() {
    //   axios({
    //     method: "GET",
    //     url: "http://wwwdev.csmju.com/api/personnel/teacher",
    //   }).then((response) => {
    //     this.personnel_array = response.data;
    //     for (let i = 0; i <= 7; i++) {
    //       this.personnel_array.pop();
    //     }
    //   });
    // },
  },
});
</script>
