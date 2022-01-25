<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="`background-image: url('${bgupdate}');`"
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
                  class="mb-2 text-3xl font-semibold leading-normal text-blueGray-700"
                >
                  {{ this.eTitle }}
                </h3>
                <p
                  class="font-semibold leading-normal text-md text-blueGray-500"
                >
                  วันที่ประกาศ : {{ this.eDates }} | ประเภทข่าว :
                  {{ this.eType }}
                </p>
              </div>

              <div
                class="pt-6 mt-10 text-center border-t border-blueGray-200"
              ></div>

              <div class="flex flex-wrap">
                <div class="w-full px-2 pb-4 lg:w-12/12 ">
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words max-h-news h-full"
                  >
                    <div class="px-0 mt-2 lg:px-10 ">
                      <img
                        v-if="eimgUrl"
                        :src="eimgUrl"
                        class="max-h-400-px  rounded-lg center-img shadow-lg border"
                      />
                      <h3 class="mt-8 font-semibold mb-4">
                        รายละเอียดข่าว :
                      </h3>
                      <p
                        class="rem2 whitespace-normal text-justify leading-norma"
                      >
                        {{ this.eDetail }}
                      </p>
                      <h3 class="mt-8 font-semibold mb-4">
                        ลิงค์ที่เกี่ยวข้อง :
                      </h3>
                      <a
                        :href="elinks"
                        target="_blank"
                        class="whitespace-normal text-justify leading-norma"
                      >
                        {{ this.elinks }}
                      </a>
                      <div class="mt-10 text-center">
                        <a href="javascript:history.go(-1)">
                          <button
                            class=" px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            ย้อนกลับ
                          </button>
                        </a>
                        <button
                          @click="topFunction()"
                          id="myBtn"
                          class=" px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          ขึ้นด้านบน
                        </button>
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
import http from "@/services/APIService";
import bgupdate from "@/assets/img/bg-update.jpg";
export default {
  data() {
    return {
      bgupdate,
      enewsId: 0,
      eTitle: "",
      eType: "",
      eDates: "",
      eDetail: "",
      elinks: "",
      eimgUrl: "",
      mybutton: false,
    };
  },
  mounted() {
    this.getPersonnelData();
    this.mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      this.scrollFunction();
    };
  },
  methods: {
   

    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    getPersonnelData() {
      http;
      this.newsId = this.$store.state.newsShowAll;
      http.get(`news/id/${this.newsId}`).then((response) => {
        this.enewsId = response.data.newsId;
        this.eTitle = response.data.News_Title;
        this.eType = response.data.News_Type;
        this.eDates = response.data.News_Date;
        this.eDetail = response.data.News_Detail;
        this.elinks = response.data.News_links;
        this.eimgUrl = response.data.News_Picture;
      });
    },
  },
  components: {
    Navbar,
    MainFooter,
  },
};
</script>
