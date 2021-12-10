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
                  ศิษย์เก่า
                </h3>
                <p
                  class="font-semibold leading-normal text-md text-blueGray-500"
                >
                  Student Alumnus
                </p>
              </div>

              <div class="py-6 mt-10 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12">
                   
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap ">
                <div
                  v-for="alum in products.data"
                  :key="alum.AlumniId"
                  class=" w-full h-full px-2 pb-4 lg:w-2/12"
                >
                  <div
                    class="flex flex-col w-full duration-150 ease-linear min-w-0 break-words rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom"
                  >
                    <img
                      alt="..."
                      :src="alum.Alumni_Picture"
                      class="w-full align-middle  "
                    />
                  </div>
                  <div
                    class="max-w-alum absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 opacity-90 contentshow"
                  >
                    <div class="relative py-4 ">
                      <p class="font-bold mb-1 text-center text-blueGray-800 text-lg bg-emerald-400 rounded-lg">
                        {{ alum.Job_Title }}
                      </p>
                         <p class="font-normal  text-white text-md border-b border-white mb-2">
                         สังกัด :
                        {{ alum.Workplace }}
                      </p>


                      <h4 class="text-md font-bold text-center text-blueGray-800">
                        {{ alum.Firstname_Alumni }}
                        {{ alum.Lastname_Alumni }}
                      </h4>
                      <p class="mb-2 font-semibold text-center text-blueGray-700 text-md">
                        {{ alum.StudentCode_Alumni }}
                      </p>
                       

                    </div>
                  </div>
                </div>
              </div>
              <VueTailwindPagination
                :current="currentPage"
                :total="total"
                :per-page="perPage"
                @page-changed="onPageClick($event)"
              />
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
//import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default {
  data() {
    return {
      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,
    };
  },
  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    this.getProducts(this.currentPage);
  },
  methods: {
    /***********************************************************************
     * ส่วนของการอ่านข้อมูลจาก API และแสดงผลในตาราง
     ************************************************************************/
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api ทั้งหมด
    async getProducts(pageNumber) {
      let response = await http.get(`alumni?page=${pageNumber}`);
      let responseProduct = response.data;
      this.products = response.data;
      this.products.reverse();
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
    },

    

    // สร้างฟังก์ชันสำหรับการคลิ๊กเปลี่ยนหน้า
    onPageClick(event) {
      this.currentPage = event;
      // เช็คว่ามีการค้นหาสินค้าอยู่หรือไม่
      if (this.keyword == "") {
        // ไม่ได้ค้นหา
        this.getProducts(this.currentPage);
      } else {
        this.getProductsSearch(this.currentPage);
      }
    },
  },
  components: {
    Navbar,
    MainFooter,
    VueTailwindPagination,
  },
};
</script>
