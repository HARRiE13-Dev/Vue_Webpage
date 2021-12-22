<template>
  <div class="">
    <main class="profile-page custom">
      <section class="relative pb-16 bg-blueGray-200">
        <div class="container mx-auto">
          <div class="flex flex-wrap ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
            >
              <div class="px-6 mt-6">
                <div class="flex flex-wrap rounded-lg bg-blueGray-100">
                  <div class="w-full  lg:w-3/12">
                    <div class="bg-emerald-500 rounded-lg text-center mr-4">
                      <h3
                        class="text-6xl font-semibold leading-normal text-white"
                      >
                        MIS
                      </h3>
                    </div>
                  </div>
                  <div class="w-full  lg:w-6/12">
                    <h3 class="mt-1 text-2xl font-semibold ">
                      ระบบแจ้งซ่อมอุปกรณ์ / บำรุงรักษา
                    </h3>

                    <h3 class="text-xl font-normal ">
                      | Maintenance System
                    </h3>
                  </div>
                  <div class="w-full  lg:w-3/12">
                    <div class="text-right mt-4">
                      <a href="javascript:history.go(-1)">
                        <button
                          class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          ย้อนกลับ
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 ">
                      <form ref="addProductForm">
                        <div class="flex flex-wrap mb-2">
                          <div class="w-full px-4 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >รหัสครุภัณฑ์</label
                            >
                            <input
                              v-model="Title"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />

                            <!-- <div
                              v-if="v$.Title.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.Title.$errors[0].$message }}
                            </div> -->
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-2">
                          <div class="w-full px-4 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Dates"
                              >ชื่ออุปกรณ์</label
                            >
                            <input
                              v-model="Dates"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />
                            <!-- <div
                              v-if="v$.Dates.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.Dates.$errors[0].$message }}
                            </div> -->
                          </div>
                          <div class="w-full px-4 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Dates"
                              >ห้องเก็บอุปกรณ์ / ที่อยู่อุปกรณ์</label
                            >
                            <input
                              v-model="Dates"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />
                            <!-- <div
                              v-if="v$.Dates.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.Dates.$errors[0].$message }}
                            </div> -->
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-2">
                          <div class="w-full px-4 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Detail"
                              >รายละเอียด / ความเสียหาย</label
                            >
                            <textarea
                              v-model="Detail"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              rows="5"
                              placeholder="Product description"
                            ></textarea>
                            <!-- <div
                              v-if="v$.Detail.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.Detail.$errors[0].$message }}
                            </div> -->
                          </div>
                        </div>

                        <div class="flex flex-wrap mb-2">
                          <div class="w-full px-4 md:w-12/12">
                            <div class="mt-4">
                              <img v-if="imgUrl" :src="imgUrl" class="w-full" />
                            </div>

                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="image"
                              >อัพโหลดรูปภาพ (ถ้ามี)</label
                            >
                            <input
                              ref="fileupload"
                              @change="onFileChange"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="file"
                            />
                          </div>
                        </div>
                        <div class="py-6 text-center">
                          <button
                            class="px-6 py-3 mb-1 mr-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            ล้าง
                          </button>
                          <button
                            class="px-6 py-3 mb-1  text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            ยืนยัน
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
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
import cover1 from "@/assets/img/enroll_class.png";
import cover2 from "@/assets/img/repair.png";
import cover3 from "@/assets/img/room_rent.png";
import cover4 from "@/assets/img/activity.png";
export default {
  data() {
    return {
      cover1,
      cover2,
      cover3,
      cover4,
    };
  },
};
</script>
