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
              class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg"
              :class="[
                color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white',
              ]"
            >
              <!-- Header  -->
              <div class="px-4 py-3 mb-0 border-0 rounded-t">
                <div class="flex flex-wrap items-center">
                  <div class="w-full px-4 text-sm md:w-2/12">
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
                      class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none"
                      type="button"
                    >
                      <i class="fas fa-search"></i> ค้นหา
                    </button>
                    <button
                      class="px-4 py-2 mb-1 mr-4 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
                      type="button"
                    >
                      <i class="fas fa-broom"></i> ล้าง
                    </button>
                   <router-link to="addfeed" >
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
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                        ]"
                      >
                        ลำดับ
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                        ]"
                      >
                        หัวข้อข่าว
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                        ]"
                      >
                        รายละเอียด
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                        ]"
                      >
                        ประเภท
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                        ]"
                      >
                        ผู้เขียน
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                        ]"
                      >
                        การจัดการ
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                        ]"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="feed in products.data" :key="feed.newsId">
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        {{ feed.newsId }}
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        {{ feed.News_Title }}
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        {{ feed.News_Detail }}
                      </td>
                      <td
                        class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        {{ feed.News_Type }}
                      </td>
                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <img
                            :src="team1"
                            alt="..."
                            class="w-10 h-10 border-2 rounded-full shadow border-blueGray-50"
                          />
                          <span
                            class="ml-3 text-sm font-semiBold"
                            :class="[
                              color === 'light'
                                ? 'text-blueGray-600'
                                : 'text-white',
                            ]"
                          >
                            ผู้เขียน : {user 1}
                            <div class="text-xs font-normal">
                              เผยแพร่ : {{ feed.News_Date }}
                            </div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <button
                          @click="openModalEditProduct(equipment.equipmentId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          @click="onclickDelete(equipment.equipmentId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
//import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

//import moment from "moment";
export default {
  data() {
    return {

      /** ตัวแปรสำหรับเรียกใช้งาน Validation */
      

      /** ตัวแปรสำหรับเก็บข้อมูลสินค้าที่อ่านจาก API */
      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      newsId: 1,
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
    async getProducts() {
      let response = await http.get(`news`);
      let responseProduct = response;
      this.products = responseProduct;
      this.total = responseProduct.total;
    },

  },
 
  components: {},
  mounted() {
    // อ่านสินค้าจาก API
    this.getProducts();
  },
};
</script>
