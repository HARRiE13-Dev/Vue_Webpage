<template>
  <div>
    <main-navbar />
    <main>
      <div
        class="relative flex items-center content-center justify-center pt-16 pb-32 custom min-h-screen-75"
      >
        <div class="absolute top-0 w-full h-full bg-center bg-cover">
          <Carousel :autoplay="10000" :wrap-around="true">
            <Slide
              v-for="news = 1 in (news_array = 10)"
              v-bind:key="news.newsId"
            >
              <div class="carousel__item">
                <img
                  alt="..."
                  :src="bg2"
                  class="relative mx-0 shadow-lg cropped "
                />
              </div>
            </Slide>
          </Carousel>
        </div>

        <div class="container relative mx-auto">
          <div class="flex flex-wrap">
            <div class="w-full px-4 mt-32 ml-1 text-left lg:w-6/12">
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
      </div>

      <section class="pb-20 mt-32 bg-blueGray-200 custom">
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
              <router-link to="program" target="_blank">
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
              </router-link>
            </div>

          
          </div>
          <div class="flex flex-wrap">
            <div class="w-full px-4 text-center md:w-4/12">
              <router-link to="program" target="_blank">
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
              <router-link to="program" target="_blank">
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
              <router-link to="program" target="_blank">
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
          <br>
          <h1 class="px-6 mb-4 text-3xl "><b>News Update</b> | ข่าวสารล่าสุด</h1>
            <div class="flex flex-wrap">
            <div class="w-full px-4 text-center md:w-4/12">
              <router-link to="program" target="_blank">
                <div
                  class="relative flex flex-col w-full min-w-0 mb-8 break-words duration-150 ease-linear bg-white shadow-lg hover:zoom hover:text-white hover:bg-blueGray-700"
                >
                  <div class="flex-auto p-1 ">
                     <img
                  alt="..."
                  :src="bg2"
                  class="relative mx-0 shadow-lg cropped-card2"
                />
              

                  
                  </div>
                </div>
              </router-link>
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
  components: {
    MainNavbar,
    MainFooter,

    Carousel,
    Slide,
  },
  data() {
    return {
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
      news: {
        newsId: 0,
        News_Title: "",
        News_Detail: "",
        News_Picture: "",
      },

      personnel_array: [],
      q: 4,
      personnel: {
        personnelPhoto: "",
      },
    };
  },
  mounted() {
    this.getNewsData();
    this.getPersonnelData();
  },
  methods: {
    getNewsData() {
      axios({
        method: "GET",
        url: "http://wwwdev.csmju.com/api/news",
      })
        .then((response) => {
          this.news_array = response.data;
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    },
    getPersonnelData() {
      axios({
        method: "GET",
        url: "http://wwwdev.csmju.com/api/personnel/teacher",
      }).then((response) => {
        this.personnel_array = response.data;
        for (let i = 0; i <= 7; i++) {
          this.personnel_array.pop();
        }
      });
    },
  },
});
</script>
