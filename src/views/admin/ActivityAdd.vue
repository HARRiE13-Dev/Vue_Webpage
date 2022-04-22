<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="feed">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold ">เพิ่มข้อมูลกิจกรรม</h1>
            </div>

            <br class="shadow-xl" />
            <form
              ref="addProductForm"
              @submit.prevent="onSubmit"
              enctype="multipart/form-data"
            >
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md" for="Dates"
                    >วันที่ประกาศกิจกรรม</label
                  >
                  <div class="flex w-full mt-2">
                    <v-date-picker v-model="Dates">
                      <template #default="{ inputValue, inputEvents }">
                        <input
                          class="px-3 py-1 border border-gray-500 text-gray-700 text-md focus:outline-none focus:border-blue-500"
                          :value="inputValue"
                          v-on="inputEvents"
                        />
                      </template>
                    </v-date-picker>
                  </div>
                  <div v-if="v$.Dates.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.Dates.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="Title"
                    >ชื่อกิจกรรม</label
                  >
                  <input
                    v-model="Title"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Title"
                  />
                  <div v-if="v$.Title.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.Title.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="Title"
                    >รายละเอียดกิจกรรม</label
                  >
                  <input
                    v-model="Title"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Title"
                  />
                  <div v-if="v$.Title.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.Title.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-2">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md" for="Detail"
                    >ชื่อกิจกรรม</label
                  >
                  <textarea
                    v-model="Detail"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    rows="5"
                    placeholder="Description"
                  ></textarea>
                  <div
                    v-if="v$.Detail.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.Detail.$errors[0].$message }}
                  </div>
                </div>
              </div>

              <div class="py-6 text-center">
                <button
                  @click="onResetForm"
                  class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                  type="button"
                >
                  ล้าง
                </button>
                <button
                  @click="submitForm"
                  class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
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
</template>
<script>
import http from "@/services/APIService";
import useValidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
//import axios from 'axios';
export default {
  data() {
    return {
      // รับค่าวัน-เดือน-ปี
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),

      // รับค่าเวลา 24
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),

      v$: useValidate(),

      Activity_Start: "",
      Activity_TimeStart: "",
      Activity_TimeEnd: "",
      Activity_Organizer: "",
      Activity_Location: "",
      Activity_Detail: "",
      Activity_Title: "",
      Activity_Picture: "",

      fileName: "",
      imgUrl: "",
      file: null,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = e.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    onResetForm() {
      this.$refs.addProductForm.reset();
      (this.Activity_Start = ""),
        (this.Activity_TimeStart = ""),
        (this.Activity_TimeEnd = ""),
        (this.Activity_Organizer = ""),
        (this.Activity_Location = ""),
        (this.Activity_Detail = ""),
        (this.Activity_Title = ""),
        (this.Activity_Picture = ""),
        (this.fileName = "");
      this.imgUrl = "";
      this.file = "";
      this.$refs.fileupload.value = null;
    },

    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.Dates = this.year + "-" + this.month + "-" + this.day;
        this.Time = this.hour + ":" + this.minute + ":" + this.second;
        let data = new FormData();
        data.append("Activity_Start", this.Activity_Start);
        data.append("Activity_TimeStart", this.Activity_TimeStart);
        data.append("Activity_TimeEnd", this.Activity_TimeEnd);
        data.append("Activity_Organizer", this.Activity_Organizer);
        data.append("Activity_Location", this.Activity_Location);
        data.append("Activity_Detail", this.Activity_Detail);
        data.append("Activity_Title", this.Activity_Title);
        data.append("Activity_Picture", this.Activity_Picture);
        //Post in Web
        http.post(`activity/create`, data).then(() => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: "เพิ่มข้อมูลใหม่เรียบร้อย",
          }).then(() => {
            this.$router.push({ name: "ActivityShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      Detail: {
        required: helpers.withMessage("ป้อนรายละเอียดข่าวก่อน", required),
      },
      Dates: {
        required: helpers.withMessage("ป้อนวันที่ก่อน", required),
      },

      Title: {
        required: helpers.withMessage("ป้อนหัวข้อข่าวก่อน", required),
      },

      Type: {
        required: helpers.withMessage("ป้อนประเภทข่าวก่อน", required),
      },
    };
  },
  components: {},
  mounted() {
    // อ่านสินค้าจาก API
  },
};
</script>
