<template>
  <div>
    <main class="profile-page custom">
      <section class="relative ">
        <div class="container px-4 mx-auto">
          <div
            class="relative flex flex-col w-full min-w-0 mt-64 mb-6 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6">
              <h1 class="py-6 text-2xl text-center">ระบบครุภัณฑ์</h1>

              <!-- ตารางแสดงสินค้า -->
              <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                  <table class="w-full whitespace-no-wrap">
                    <thead>
                      <tr
                        class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                      >
                        <th class="px-4 py-3">รหัสครุภัณฑ์</th>
                        <th class="px-4 py-3">ชื่อ</th>
                        <th class="px-4 py-3">ราคา</th>
                        <th class="px-4 py-3">วันที่จัดซื้อ</th>
                        <th class="px-4 py-3">ประเภท</th>
                        <th class="px-4 py-3">สภาพ</th>
                      </tr>
                    </thead>
                    <tbody
                      v-for="equipments in equipment_array"
                      v-bind:key="equipments.equipmentId"
                      class="bg-white divide-y dark:divide-gray-700 "
                    >
                      <tr class="text-black dark:text-gray-400 ">
                        <td class="px-4 py-3 text-sm">
                          {{ equipments.Equipment_Code }}
                        </td>
                        <td class="px-4 py-3 text-sm">
                          {{ equipments.Equipment_Name }}
                        </td>

                        <td class="px-4 py-3 text-sm">
                          {{ equipments.Equipment_Price }}
                        </td>
                        <td class="px-4 py-3 text-sm">
                          {{ equipments.Equipment_Date }}
                        </td>
                        <td class="px-4 py-3 text-sm">
                          {{ equipments.Equipment_Type }}
                        </td>
                        <td class="px-4 py-3 text-sm">
                          {{ equipments.Equipment_Status }}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- แสดงผลตัวแบ่งหน้าเพจ-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div
       v-if="showAddModal"
                id="addProductModal"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
    >
      <div class="relative w-auto max-w-sm mx-auto my-6">
        <!--content-->
        <div
          class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200"
          >
            <h3 class="text-3xl font-semibold">
               เพิ่มสินค้าใหม่
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
            <form
              ref="addProductForm"
              @submit.prevent="onSubmit"
              enctype="multipart/form-data"
            >
              <label class="block my-3 text-gray-700 text-md" for="name"
                >ชื่อสินค้า</label
              >
              <input
                v-model="name"
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                type="text"
                placeholder="Product name"
              />
              <div v-if="v$.name.$error" class="mt-2 text-sm text-red-500">
                {{ v$.name.$errors[0].$message }}
              </div>

              <label class="block my-3 text-gray-700 text-md" for="slug"
                >สลัก</label
              >
              <input
                v-model="slug"
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                type="text"
                placeholder="product-name"
              />
              <div v-if="v$.slug.$error" class="mt-2 text-sm text-red-500">
                {{ v$.slug.$errors[0].$message }}
              </div>

              <label class="block my-3 text-gray-700 text-md" for="description"
                >รายละเอียด</label
              >
              <textarea
                v-model="description"
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                rows="5"
                placeholder="Product description"
              ></textarea>

              <label class="block my-3 text-gray-700 text-md" for="price"
                >ราคา</label
              >
              <input
                v-model="price"
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                type="text"
                placeholder="0.00"
              />
              <div v-if="v$.price.$error" class="mt-2 text-sm text-red-500">
                {{ v$.price.$errors[0].$message }}
              </div>

              <div class="mt-4">
                <img v-if="imgUrl" :src="imgUrl" class="w-ful" />
              </div>

              <label class="block my-3 text-gray-700 text-md" for="image"
                >ภาพสินค้า</label
              >
              <input
                ref="fileupload"
                @change="onFileChange"
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                type="file"
              />

              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2">
                  <button
                    @click="submitForm"
                    class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    บันทึกรายการ
                  </button>
                </div>

                <div>
                  <button
                    @click="onResetForm"
                    class="w-full px-4 py-2 mt-4 font-medium leading-5 text-white transition-colors duration-150 bg-gray-500 border border-transparent rounded-lg text-md active:bg-purple-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-purple"
                  >
                    ล้าง
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      equipment_array: [],
      equipments: {
        equipmentId: 0,
        Equipment_Code: "",
        Equipment_Name: "",
        Equipment_Price: "",
        Equipment_Date: "",
        Equipment_Type: "",
        Equipment_Status: "",
      },
    };
  },
  mounted() {
    this.getEquipmentData();
  },
  methods: {
    getEquipmentData() {
      axios({
        method: "GET",
        url: "https://wwwdev.csmju.com/api/equipment",
      })
        .then((response) => {
          this.equipment_array = response.data;
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    },
  },
  components: {},
};
</script>
