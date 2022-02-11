<template>
  <div>
    <main class="profile-page custom">
      <section class="relative ">
        <div class="container px-4 mx-auto">
          <div
            class="relative flex flex-col w-full min-w-0 mt-64 mb-6 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6 mt-6">
              <h1 class="py-6 text-3xl font-bold text-center">
                CSMJU | ระบบครุภัณฑ์
              </h1>

              <br class="shadow-xl" />
              <div class="flex flex-wrap items-center justify-between my-8">
                <div class="w-full md:w-2/12">
                  <h2
                    class="items-center mx-4 text-sm font-semibold text-gray-700 md:text-xl "
                  >
                    จำนวน {{ products.total }} รายการ
                  </h2>
                </div>

                <div class="w-full px-4 md:w-6/12">
                  <div class="relative w-full my-4 mr-2">
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
                  <button
                    @click="openModalAddProduct"
                    class="px-4 py-2 mb-1 ml-2 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none "
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
                class="fixed top-0 left-0 flex justify-center w-full h-full modal"
              >
                <div
                  class="absolute w-full h-full bg-gray-900 opacity-70 modal-overlay"
                ></div>
                <div
                  class="z-50 w-11/12 p-5 mx-auto overflow-y-auto bg-white rounded shadow-lg h-4/5 modal-container md:max-w-md"
                >
                  <!-- Header -->
                  <div class="flex items-center justify-center w-full h-auto">
                    <div
                      class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold"
                    >
                      เพิ่มครุภัณฑ์
                    </div>
                    <div
                      @click="closeAddModal"
                      class="flex justify-center w-1/12 h-auto cursor-pointer"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <!--Header End-->
                  </div>
                  <!-- Modal Content-->
                  <div class="w-full h-auto mb-4">
                    <form
                      ref="addProductForm"
                      @submit.prevent="onSubmit"
                      enctype="multipart/form-data"
                    >
                      <label class="block my-3 text-gray-700 text-md" for="name"
                        >รหัสครุภัณฑ์</label
                      >
                      <input
                        v-model="code"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="Product name"
                      />
                      <div
                        v-if="v$.code.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.code.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ชื่อ</label
                      >
                      <input
                        v-model="name"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.name.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.name.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ยี่ห้อ</label
                      >
                      <input
                        v-model="brand"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.brand.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.brand.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >เลขตัวเครื่อง (Serial Number)</label
                      >
                      <input
                        v-model="serial_no"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.serial_no.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.serial_no.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >วันที่จัดซื้อ</label
                      >
                      <input
                        v-model="date"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.date.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.date.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >สังกัด</label
                      >
                      <input
                        v-model="users"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.users.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.users.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ตำแหน่งจัดเก็บ</label
                      >
                      <input
                        v-model="room"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.room.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.room.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ผู้รับผิดชอบ</label
                      >
                      <input
                        v-model="caretaker"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.caretaker.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.caretaker.$errors[0].$message }}
                      </div>

                      <label class="block my-3 text-gray-700 text-md" for="slug"
                        >ประเภท</label
                      >
                      <input
                        v-model="type"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />
                      <div
                        v-if="v$.type.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.type.$errors[0].$message }}
                      </div>

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="detail"
                        >รายละเอียด</label
                      >
                      <textarea
                        v-model="detail"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        rows="5"
                        placeholder="Product description"
                      ></textarea>

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="price"
                        >ราคา</label
                      >
                      <input
                        v-model="price"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="0.00"
                      />
                      <div
                        v-if="v$.price.$error"
                        class="mt-2 text-sm text-red-500"
                      >
                        {{ v$.price.$errors[0].$message }}
                      </div>

                      <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-2">
                          <button
                            @click="submitForm"
                            class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            บันทึกรายการ
                          </button>
                        </div>

                        <div>
                          <button
                            @click="onResetForm"
                            class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                            type="button"
                          >
                            ล้าง
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <!-- Popup สำหรับการแก้ไขสินค้า -->
              <div
                v-if="showEditModal"
                id="editProductModal"
                class="fixed top-0 left-0 flex justify-center w-full h-full modal"
              >
                <div
                  class="absolute w-full h-full bg-gray-900 opacity-70 modal-overlay"
                ></div>

                <div
                  class="z-50 w-11/12 p-5 mx-auto overflow-y-auto bg-white rounded shadow-lg h-5/6 modal-container md:max-w-md"
                >
                  <!-- Header -->
                  <div class="flex items-center justify-center w-full h-auto">
                    <div
                      class="flex items-start justify-start w-full h-auto py-2 text-xl font-bold"
                    >
                      แก้ไขครุภัณฑ์
                    </div>
                    <div
                      @click="closeEditModal"
                      class="flex justify-center w-1/12 h-auto cursor-pointer"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <!--Header End-->
                  </div>
                  <!-- Modal Content-->
                  <div class="w-full h-auto mb-4">
                    <form
                      @submit.prevent="onSubmit"
                      enctype="multipart/form-data"
                    >
                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="ecode"
                        >รหัสครุภัณฑ์</label
                      >
                      <input
                        v-model="ecode"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="Product name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="ename"
                        >ชื่อ</label
                      >
                      <input
                        v-model="ename"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="ebrand"
                        >ยี่ห้อ</label
                      >
                      <input
                        v-model="ebrand"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="eserial_no"
                        >เลขตัวเครื่อง (Serial Number)</label
                      >
                      <input
                        v-model="eserial_no"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="edate"
                        >วันที่จัดซื้อ</label
                      >
                      <input
                        v-model="edate"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="eusers"
                        >สังกัด</label
                      >
                      <input
                        v-model="eusers"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="eroom"
                        >ตำแหน่งจัดเก็บ</label
                      >
                      <input
                        v-model="eroom"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="ecaretaker"
                        >ผู้รับผิดชอบ</label
                      >
                      <input
                        v-model="ecaretaker"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="etype"
                        >ประเภท</label
                      >
                      <input
                        v-model="etype"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="estatus"
                        >สภาพ</label
                      >
                      <input
                        v-model="estatus"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="product-name"
                      />

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="edetail"
                        >รายละเอียด</label
                      >
                      <textarea
                        v-model="edetail"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        rows="5"
                        placeholder="Product description"
                      ></textarea>

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="enote"
                        >หมายเหตุ</label
                      >
                      <textarea
                        v-model="enote"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        rows="5"
                        placeholder="Product description"
                      ></textarea>

                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="eprice"
                        >ราคา</label
                      >
                      <input
                        v-model="eprice"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="0.00"
                      />
                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="equantity"
                        >จำนวน</label
                      >
                      <input
                        v-model="equantity"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                        type="text"
                        placeholder="0"
                      />

                      <button
                        @click="submitFormEdit(up_equipmentId)"
                        class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        อัพเดทข้อมูล
                      </button>
                    </form>
                  </div>
                  <!-- End of Modal Content-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

import http from "@/services/APIService";

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
      code: "",
      quantity: "1",
      name: "",
      brand: "",
      serial_no: "",
      price: "",
      date: "",
      room: "",
      users: "",
      caretaker: "",
      status: "ดี",
      note: "-",
      type: "",
      detail: "",

      /** ตัวแปรสำหรับการแก้ไขข้อมูลสินค้า */
      up_equipmentId: 0,
      ecode: "",
      equantity: "",
      ename: "",
      ebrand: "",
      eserial_no: "",
      eprice: "",
      edate: "",
      eroom: "",
      eusers: "",
      ecaretaker: "",
      estatus: "",
      enote: "-",
      etype: "",
      edetail: "",

      /** ตัวแปรสำหรับเปิด/ปิด popup */
      showAddModal: false, // popup เพิ่มสินค้า
      showEditModal: false, // popup แก้ไขสินค้า
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
      (this.code = ""),
        (this.name = ""),
        (this.brand = ""),
        (this.serial_no = ""),
        (this.price = ""),
        (this.date = ""),
        (this.room = ""),
        (this.users = ""),
        (this.Caretaker = ""),
        (this.type = ""),
        (this.detail = "");
    },
    // สร้างฟังก์ชันสำหรับ submit form สินค้า
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // ถ้าไม่มี error ในฟอร์ม

        // alert('succcess')
        // ใช้ FormData ของ HTML 5 API ในการรับค่าจากฟอร์มที่มีการแนบไฟล์
        let data = new FormData();
        data.append("Equipment_Code", this.code);
        data.append("Equipment_Name", this.name);
        data.append("Equipment_Brand", this.brand);
        data.append("Equipment_Serialnumber", this.serial_no);
        data.append("Equipment_Price", this.price);
        data.append("Equipment_Date", this.date);
        data.append("Equipment_Room", this.room);
        data.append("Equipment_Users", this.users);
        data.append("Equipment_Caretaker", this.caretaker);
        data.append("Equipment_Type", this.type);
        data.append("Equipment_Detail", this.detail);

        data.append("Equipment_Note", this.note);
        data.append("Equipment_Status", this.status);
        data.append("Equipment_Quantity", this.quantity);
        // console.log(data)
        // ส่งค่าไปยัง Laravel API Product Add
        http.post("equipmentadd", data).then((response) => {
          console.log(response.data);
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
     * ส่วนของการแก้ไขข้อมูลสินค้า
     ************************************************************************/
    // สร้างฟังก์ชันสำหรับเปิด popup แก้ไขสินค้า
    openModalEditProduct(equipmentId) {
      http.get(`equipment/${equipmentId}`).then((response) => {
        // console.log(response.data)
        this.up_equipmentId = response.data.equipmentId;
        this.ecode = response.data.Equipment_Code;
        this.equantity = response.data.Equipment_Quantity;
        this.ename = response.data.Equipment_Name;
        this.ebrand = response.data.Equipment_Brand;
        this.eserial_no = response.data.Equipment_Serialnumber;
        this.eprice = response.data.Equipment_Price;
        this.edate = response.data.Equipment_Date;
        this.eroom = response.data.Equipment_Room;
        this.eusers = response.data.Equipment_Users;
        this.ecaretaker = response.data.Equipment_Caretaker;
        this.estatus = response.data.Equipment_Status;
        this.enote = response.data.Equipment_Note;
        this.etype = response.data.Equipment_Type;
        this.edetail = response.data.Equipment_Detail;
        this.showEditModal = !this.showEditModal;
      });
    },
    // สร้างฟังก์ชันสำหรับปิด popup แก้ไขสินค้า
    closeEditModal() {
      this.showEditModal = false;
    },
    // สร้างฟังก์ขันสำหรับอัพเดทข้อมูล
    submitFormEdit(equipmentId) {
      // console.log(id)
      let data = new FormData();

      data.append("Equipment_Code", this.ecode);
      data.append("Equipment_Name", this.ename);
      data.append("Equipment_Brand", this.ebrand);
      data.append("Equipment_Serialnumber", this.eserial_no);
      data.append("Equipment_Price", this.eprice);
      data.append("Equipment_Date", this.edate);
      data.append("Equipment_Room", this.eroom);
      data.append("Equipment_Users", this.eusers);
      data.append("Equipment_Caretaker", this.ecaretaker);
      data.append("Equipment_Type", this.etype);
      data.append("Equipment_Detail", this.edetail);

      data.append("Equipment_Note", this.enote);
      data.append("Equipment_Status", this.estatus);
      data.append("Equipment_Quantity", this.equantity);

      // Send Patch request to laravel
      data.append("_method", "PUT");
      http
        .post(`equipmentedit/${equipmentId}`, data)
        .then((response) => {
          console.log(response.data);
          // เมื่อแก้ไขรายการเสร็จทำการ ดึงสินค้าล่าสุดมาแสดง
          if (this.keyword == "") {
            this.getProducts(this.currentPage);
          } else {
            this.getProductsSearch(this.currentPage);
          }
          // เรียกใช้งาน popup ของ sweetalert2
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
            title: "อัพเดทข้อมูลเรียบร้อย",
          }).then(() => {
            this.showEditModal = false; // ปิดหน้าต่าง popup modal แก้ไข
          });
        })
        .catch((error) => {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        });
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
          cancelButtonText: `ยกเลิก`,
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
      code: {
        required: helpers.withMessage("ป้อนรหัสครุภัณฑ์ก่อน", required),
      },
      name: {
        required: helpers.withMessage("ป้อนชื่อครุภัณฑ์ก่อน", required),
      },
      brand: {
        required: helpers.withMessage("ป้อนยี่ห้อก่อน", required),
      },
      serial_no: {
        required: helpers.withMessage("ป้อนเลขตัวเครื่องก่อน", required),
      },
      date: {
        required: helpers.withMessage("ป้อนวันที่ก่อน", required),
      },
      room: {
        required: helpers.withMessage("ป้อนสถานที่จัดเก็บก่อน", required),
      },
      users: {
        required: helpers.withMessage("ป้อนสังกัดก่อน", required),
      },
      caretaker: {
        required: helpers.withMessage("ป้อนผู้ดูแลก่อน", required),
      },
      type: {
        required: helpers.withMessage("ป้อนประเภทก่อน", required),
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
<style scoped>
/* @import "@ocrv/vue-tailwind-pagination/styles"; */
.rotate-45 {
  --tw-rotate: 90deg !important;
}
.-rotate-45 {
  --tw-rotate: -90deg !important;
}
</style>
