<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-6 text-center">
              <h1 class="py-6 text-3xl font-bold ">CSMJU | ประกาศข่าวสาร</h1>
            </div>
            <br class="shadow-xl" />
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 shadow-lg break-wordsrounded"
            >
              <!-- Header  -->
              <div class="px-4 py-3 mb-0 border-0 rounded-t">
                <div class="flex flex-wrap items-center">
                  <div class="w-full px-4 font-bold text-md md:w-2/12">
                    จำนวน {{ products.total }} รายการ
                  </div>

                  <div class="w-full px-4 py-4 md:w-6/12">
                    <form @submit.prevent="onSubmit">
                      <input
                        v-model="keyword"
                        class="w-full py-2 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-200 border-0 rounded-md"
                        type="text"
                        placeholder="ป้อนชื่อที่ต้องการค้นหา"
                        aria-label="Search"
                      />
                      <button
                        @click="submitSearchForm"
                        type="submit"
                        class="hidden"
                      >
                        Submit
                      </button>
                    </form>
                  </div>

                  <div class="w-full px-4 text-center md:w-4/12">
                    <button
                      @click="submitSearchForm"
                      class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none"
                      type="button"
                    >
                      <i class="fas fa-search"></i> ค้นหา
                    </button>
                    <button
                      @click="resetSearchForm"
                      class="px-4 py-2 mb-1 mr-4 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
                      type="button"
                    >
                      <i class="fas fa-broom"></i> ล้าง
                    </button>
                    <router-link to="addfeed">
                      <button
                        @click="openModalAddProduct"
                        class="px-4 py-2 mb-1 ml-2 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none "
                        type="button"
                      >
                        <i class="fas fa-plus"></i> เพิ่ม
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- News Feeds table -->
              <div class="block w-full overflow-x-auto">
                <!-- Projects table -->
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead>
                    <tr>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                      >
                        ลำดับ
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                      >
                        หัวข้อ
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                      >
                        รายละเอียด
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                      >
                        ไฟล์แนบ / รูปภาพ
                      </th>

                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                      >
                        สถานะ
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="feed in products" :key="feed.complainId">
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        {{ feed.complainId }}
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 "
                      >
                        <h5 class="w-48 font-semibold truncate text-md">
                          {{ feed.Complain_Title }}
                        </h5>
                        <p class="font-normal  w-48">
                          วันที่ : {{ feed.Complain_Date }}
                        </p>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 "
                      >
                        <div>
                          <p class="font-normal :truncate w-48">
                            {{ feed.Complain_Detail }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <img
                          class="w-24 h-24"
                          src="@\assets\img\no-img.png"
                          alt=""
                        />
                      </td>

                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <button
                          @click="toggleDropdown(feed.complainId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-tools mr-1"></i>
                          <span>รอดำเนินการ</span>
                        </button>
                        <div
                          ref="popoverDropdownRef"
                          class="bg-yellow-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
                          v-bind:class="{
                            hidden: !dropdownPopoverShow,
                            block: dropdownPopoverShow,
                          }"
                        >
                          <a
                            href="#pablo"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                          >
                            รอดำเนินการ
                          </a>
                          <a
                            href="#pablo"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                          >
                            ดำเนินการแล้ว
                          </a>
                          <a
                            href="#pablo"
                            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                          >
                            ปฏิเสธการแจ้ง
                          </a>
                         
                        </div>
                       
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- แสดงผลตัวแบ่งหน้าเพจ-->
                <VueTailwindPagination
                  :current="currentPage"
                  :total="total"
                  :per-page="perPage"
                  @page-changed="onPageClick($event)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/services/APIService";
//import '@ocrv/vue-tailwind-pagination/styles'
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import moment from "moment";
//import { createPopper } from "@popperjs/core";

//import moment from "moment";
export default {
  data() {
    return {
      /** ตัวแปรสำหรับเก็บข้อมูลสินค้าที่อ่านจาก API */
      dropdownPopoverShow: false,

      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      newsId: 0,
      News_Detail: "",
      News_Date: "",
      News_Time: "",
      News_Picture: "",
      News_Title: "",
      News_File: "",
      News_links: "",
      News_Type: "",
    };
  },
  methods: {
    Edit(newsId) {
      this.$router.push({ name: "EditFeed" });
      this.$store.state.newsEdit = newsId;
    },

    toggleDropdown: function(complainId) {

     this.dropdownPopoverShow = !this.dropdownPopoverShow;
     console.log(complainId);
    
      // if (this.dropdownPopoverShow) {
      //   this.dropdownPopoverShow = false;
      // } else {
      //   this.dropdownPopoverShow = true;
      //   createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
      //     placement: "bottom-start",
      //   });
      // }
    },
    /***********************************************************************
     * ส่วนของการอ่านข้อมูลจาก API และแสดงผลในตาราง
     ************************************************************************/
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api ทั้งหมด
    async getProducts() {
      let response = await http.get(`complain`);
      let responseProduct = response.data;
      this.products = responseProduct;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
    },
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api เมื่อมีการค้นหา (search)
    async getProductsSearch(pageNumber) {
      let response = await http.get(`news/${this.keyword}?page=${pageNumber}`);
      let responseProduct = response.data;
      this.products = responseProduct;
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
    /***********************************************************************
     * ส่วนของการลบสินค้า
     ************************************************************************/
    // สร้างฟังก์ชันสำหรับลบสินค้า
    onclickDelete(id) {
      this.$swal
        .fire({
          title: "ยืนยันการลบรายการนี้",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: `ยืนยัน`,
          cancelButtonText: `ปิดหน้าต่าง`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            http
              .delete(`newsdelete/${id}`)
              .then(() => {
                this.$swal.fire("ลบรายการเรียบร้อย!", "", "success");
                // เมื่อแก้ไขรายการเสร็จทำการ ดึงสินค้าล่าสุดมาแสดง
                if (this.keyword == "") {
                  this.getProducts(this.currentPage);
                } else {
                  this.getProductsSearch(this.currentPage);
                }
              })
              .catch((error) => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              });
          }
        });
    },
    /***********************************************************************
     * ส่วนของการค้นหาสินค้า
     ************************************************************************/
    // สร้างฟังก์ชันค้นหาสินค้า
    submitSearchForm() {
      if (this.keyword != "") {
        // เรียกค้นไปยัง api ของ laravel
        http.get(`news/${this.keyword}`).then((response) => {
          let responseProduct = response.data;
          this.products = responseProduct;
          this.currentPage = responseProduct.current_page;
          this.perPage = responseProduct.per_page;
          this.total = responseProduct.total;
        });
      } else {
        this.$swal.fire("ป้อนชื่อสินค้าที่ต้องการค้นหาก่อน");
      }
    },
    // สร้างฟังก์ชันสำหรับเคลียร์ข้อมูลการค้นหา
    resetSearchForm() {
      this.currentPage = 1;
      this.getProducts(this.currentPage);
      this.keyword = "";
    },
    // สร้างฟังก์ชันสำหรับจัดรูปแบบวันที่ด้วย moment.js
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY hh:mm:ss");
      }
    },
    // สร้างฟังก์ชันแปลงยอดเงินให้เป็นรูปแบบสกุลเงิน (10,000.50)
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },

  components: { VueTailwindPagination },
  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    this.getProducts(this.currentPage);
  },
};
</script>
