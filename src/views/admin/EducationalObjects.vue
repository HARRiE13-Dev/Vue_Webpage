<template>
  <div>
    <main class="profile-page custom">
      <section class="relative ">
        <div class="container px-4 mx-auto">
          <div
            class="relative flex flex-col w-full min-w-0 mt-64 mb-6 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6">
              <h1 class="py-6 text-2xl text-center">CSMJU | ระบบครุภัณฑ์</h1>
              <div class="flex items-center justify-between my-8">
                <h2
                  class="items-center mx-4 my-6 text-sm font-semibold text-gray-700 md:text-xl "
                >
                  จำนวน {{ products.total }} รายการ
                </h2>

                <div class="flex justify-center flex-1 ">
                  <div class="relative w-full mr-2">
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
                </div>

                <div class="flex justify-center">
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
                  <button
                    @click="openModalAddProduct"
                    class="px-4 py-2 mb-1 ml-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                    type="button"
                  >
                    <i class="fas fa-plus"></i> เพิ่ม
                  </button>
                </div>
              </div>

              <!-- ตารางแสดงสินค้า -->
              <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                  <table class="w-full whitespace-no-wrap">
                    <thead>
                      <tr
                        class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                      >
                        <th class="px-4 py-3">ลำดับ</th>
                        <th class="px-4 py-3">รหัสครุภัณฑ์</th>
                        <th class="px-4 py-3">ชื่อ</th>
                        <th class="px-4 py-3">ราคา</th>
                        <th class="px-4 py-3">วันที่จัดซื้อ</th>
                        <th class="px-4 py-3">แก้ไข / นำออก</th>
                      </tr>
                    </thead>
                    <tbody
                      class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                    >
                      <tr
                        v-for="equipment in products.data"
                        :key="equipment.equipmentId"
                        class="text-gray-700 dark:text-gray-400 hover:bg-blue-100"
                      >
                        <td class="px-4 py-3 text-sm">
                          {{ equipment.equipmentId }}
                        </td>
                        <td class="px-4 py-3 text-sm">
                          {{ equipment.Equipment_Code }}
                        </td>
                        <td class="px-4 py-3">
                          <div class="flex items-center text-sm">
                            <div>
                              <p class="font-semibold">
                                {{ equipment.Equipment_Name }}
                              </p>
                              <p
                                class="text-xs text-gray-600 dark:text-gray-400"
                              >
                                Brand : {{ equipment.Equipment_Brand }}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-3 text-sm">
                          {{ equipment.Equipment_Price }}
                        </td>
                        <td class="px-4 py-3 text-sm">
                          <div class="flex items-center text-sm">
                            <div>
                              <p class="font-semibold">
                                {{ equipment.Equipment_Date }}
                              </p>
                              <p
                                class="text-xs text-gray-600 dark:text-gray-400"
                              >
                                ผู้รับผิดชอบ :
                                {{ equipment.Equipment_Caretaker }}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-3 text-sm">
                          <button
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

                  <!-- แสดงผลตัวแบ่งหน้าเพจ-->
                  <VueTailwindPagination
                    :current="currentPage"
                    :total="total"
                    :per-page="perPage"
                    @page-changed="onPageClick($event)"
                  />
                </div>
              </div>

              <!-- Popup สำหรับเพิ่มรายการสินค้าใหม่ -->
              <div
                v-if="showAddModal"
                id="addProductModal"
                class="fixed top-0 items-center justify-center w-1/2 h-full overflow-x-hidden overflow-y-auto shadow-xl outline-none modal focus:outline-none"
              >
                <div class="relative w-auto max-w-3xl mx-auto my-6">
                  <!--content-->
                  <div
                    class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
                  >
                    <!--header-->
                    <div
                      class="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200"
                    >
                      <h3 class="text-3xl font-semibold">
                        เพิ่มข้อมูลครุภัณฑ์
                      </h3>
                      <button
                        class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                        v-on:click="toggleModal()"
                      >
                        <span
                          class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none"
                        >
                          ×
                        </span>
                      </button>
                    </div>
                    <!--body-->
                    <div class="relative flex-auto p-6">
                      <p class="my-4 text-lg leading-relaxed text-blueGray-500">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their
                        perception of themselves! They're slowed down by their
                        perception of themselves. If you're taught you can’t do
                        anything, you won’t do anything. I was taught I could do
                        everything.
                      </p>
                    </div>
                    <!--footer-->
                    <div
                      class="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200"
                    >
                      <button
                        class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                        type="button"
                        v-on:click="toggleModal()"
                      >
                        Close
                      </button>
                      <button
                        class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                        type="button"
                        v-on:click="toggleModal()"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Popup สำหรับการแก้ไขสินค้า -->
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import http from "@/services/EquipmentService";
//import '@ocrv/vue-tailwind-pagination/styles'
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import useValidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import moment from "moment";
export default {
  data() {
    return {
      /** ตัวแปรสำหรับเรียกใช้งาน Validation */
      v$: useValidate(),
      /** ตัวแปรสำหรับเก็บข้อมูลสินค้าที่อ่านจาก API */
      products: [],
      currentPage: 0,
      perPage: 0,
      total: 0,

      equipmentId: 0,
      Equipment_Code: "",
      Equipment_Name: "",
      Equipment_Price: "",
      Equipment_Date: "",
      Equipment_Type: "",
      Equipment_Status: "",

      /** ตัวแปรสำหรับค้นหาข้อมูล */
      keyword: "",

      /** ตัวแปรสำหรับผูกกับฟอร์มเพิ่มสินค้า */
      name: "",
      description: "",
      slug: "",
      price: "",
      imgSrc: "",
      fileName: "",
      imgUrl: "",
      file: null,

      /** ตัวแปรสำหรับเปิด/ปิด popup */
      showAddModal: false, // popup เพิ่มสินค้า
    };
  },
  components: {
    VueTailwindPagination,
  },
  methods: {
    /***********************************************************************
     * ส่วนของการอ่านข้อมูลจาก API และแสดงผลในตาราง
     ************************************************************************/
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api ทั้งหมด
    async getProducts(pageNumber) {
      let response = await http.get(`equipment?page=${pageNumber}`);
      let responseProduct = response.data;
      this.products = responseProduct;
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
    },
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api เมื่อมีการค้นหา (search)
    async getProductsSearch(pageNumber) {
      let response = await http.get(
        `equipments/${this.keyword}?page=${pageNumber}`
      );
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
     * ส่วนของการเพิ่มสินค้าใหม่
     ************************************************************************/
    // สร้างฟังก์ชันสำหรับเปิด popup เพิ่มสินค้า
    openModalAddProduct() {
      this.showAddModal = !this.showAddModal;
    },
    // สร้างฟังก์ชันสำหรับปิด popup เพิ่มสินค้า
    closeAddModal() {
      this.showAddModal = false;
      this.onResetForm();
    },

    // สร้างฟังก์ชันสำหรับเคลียร์ข้อมูลในฟอร์มเพิ่มสินค้า
    onResetForm() {
      // การเคลียร์ค่าทั้งหมดในฟอร์ม เราจะต้อง ref
      // ล้างข้อมูลในฟอร์ม
      this.$refs.addProductForm.reset();
      this.name = "";
      this.description = "";
      this.slug = "";
      this.price = "";
      this.imgSrc = "";
      this.fileName = "";
      this.imgUrl = "";
      this.file = "";
      this.$refs.fileupload.value = null;
    },
    // สร้างฟังก์ชันสำหรับ submit form สินค้า
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // ถ้าไม่มี error ในฟอร์ม

        // alert('succcess')
        // ใช้ FormData ของ HTML 5 API ในการรับค่าจากฟอร์มที่มีการแนบไฟล์
        let data = new FormData();
        data.append("Equipment_Code", this.name);
        data.append("Equipment_Name", this.description);
        data.append("Equipment_Type", this.slug);
        data.append("Equipment_Price", this.price);

        // console.log(data)
        // ส่งค่าไปยัง Laravel API Product Add
        http.post("equipmentadd", data).then((response) => {
          console.log(response);
          // เพิ่มเสร็จทำการเคลียร์ค่าในฟอร์ม
          this.onResetForm();
          // เมื่อเพิ่มสินค้าแล้วให้ดึงรายการล่าสุดมาแสดง
          this.getProducts(this.currentPage);
          // เรียกใช้งาน popup ของ sweetalert 2
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", this.$swal.stopTimer);
              toast.addEventListener("mouseleave", this.$swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "เพิ่มข้อมูลใหม่เรียบร้อย",
          });
        });
      }
    },

    /***********************************************************************
     * ส่วนของการค้นหาสินค้า
     ************************************************************************/
    // สร้างฟังก์ชันค้นหาสินค้า
    submitSearchForm() {
      if (this.keyword != "") {
        // เรียกค้นไปยัง api ของ laravel
        http.get(`equipments/${this.keyword}`).then((response) => {
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
    /***********************************************************************
     * ส่วนของการลบสินค้า
     ************************************************************************/
    // สร้างฟังก์ชันสำหรับลบสินค้า
    onclickDelete(equipmentId) {
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
              .delete(`equipmentdelete/${equipmentId}`)
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
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage("ป้อนชื่อสินค้าก่อน", required),
      },
      slug: {
        required: helpers.withMessage("ป้อนสลักก่อน", required),
      },
      price: {
        required: helpers.withMessage("ป้อนราคาก่อน", required),
      },
    };
  },
  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    this.getProducts(this.currentPage);
  },
};
</script>
<style lang="css">
.rotate-45 {
  --tw-rotate: 90deg !important;
}
.-rotate-45 {
  --tw-rotate: -90deg !important;
}
</style>
