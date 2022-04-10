<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-4 text-right ">
              <router-link to="StudentShow">
                <i
                  class="relative duration-150 ease-linear hover:zoom fas fa-times fa-2x"
                ></i>
              </router-link>
            </div>
            <div class="text-center ">
              <h1 class="py-6 text-3xl font-bold border-b">
                CSMJU | เพิ่มข้อมูลรายวิชา
              </h1>
            </div>

            <br class="shadow-xl border-t" />

            <form @submit.prevent="onSubmit" enctype="multipart/form-data">
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-4/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >รหัสรายวิชา</label
                  >
                  <input
                    v-model="code"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    maxlength="8"
                    placeholder="Subject Code"
                  />
                  <div v-if="v$.code.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.code.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ชื่อรายวิชา (ภาษาไทย)</label
                  >
                  <input
                    v-model="nameTh"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Subject name (Thai)"
                  />
                  <div
                    v-if="v$.nameTh.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.nameTh.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-12/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >ชื่อรายวิชา (ภาษาอังกฤษ)</label
                  >
                  <input
                    v-model="nameEn"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    placeholder="Subject name (English)"
                  />
                  <div
                    v-if="v$.nameEn.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.nameEn.$errors[0].$message }}
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mb-4 mt-8 ">
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >หน่วยกิต</label
                  >
                  <input
                    v-model="credit"
                    class="w-full px-3 py-2 leading-tight text-gray-700"
                    type="text"
                    maxlength="3"
                    placeholder="Subject Credit"
                  />
                  <div
                    v-if="v$.credit.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.credit.$errors[0].$message }}
                  </div>
                </div>
                <div class="w-full px-4 md:w-6/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >กลุ่มรายวิชา</label
                  >
                  <select
                    v-model="detail"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option value="กลุ่มวิชาความรู้พื้นฐานทางวิทยาการคอมพิวเตอร์ (Fundamental Computer Science)">กลุ่มวิชาความรู้พื้นฐานทางวิทยาการคอมพิวเตอร์ (Fundamental Computer Science)</option>
                    <option value="กลุ่มวิชาแนวคิดการวิเคราะห์และออกแบบ (System Analysis)">กลุ่มวิชาแนวคิดการวิเคราะห์และออกแบบ (System Analysis)</option>

                   
                  </select>
                  <div
                    v-if="v$.detail.$error"
                    class="mt-2 text-sm text-red-500"
                  >
                    {{ v$.detail.$errors[0].$message }}
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap mb-4">
                <div class="w-full px-4 md:w-2/12">
                  <label class="block my-3 text-gray-700 text-md"
                    >แสดงรายวิชาในเทอม</label
                  >
                  <select
                    v-model="term"
                    class="w-full px-3 py-2 leading-tight text-gray-700 "
                  >
                    <option v-for="i in 8" :key="i" :value="i">{{ i }}</option>
                  </select>
                  <div v-if="v$.term.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.term.$errors[0].$message }}
                  </div>
                </div>
              </div>

              <div class="py-6 text-center">
                <button
                  @click="submitFormAdd"
                  class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  บันทึกข้อมูล
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
export default {
  data() {
    return {
      v$: useValidate(),

      id: "",

      code: "",
      nameTh: "",
      nameEn: "",
      credit: "",
      detail: "",
      term: "",

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
    submitFormAdd() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let data = new FormData();
        data.append("studentCode", this.code);
        data.append("nameTh", this.first_nameTh);
        data.append("surnameTh", this.last_nameTh);
        data.append("nameEn", this.first_nameEn);
        data.append("surnameEn", this.last_nameEn);
        data.append("EmailStudent", this.email);
        data.append("mobile", this.phone);
        data.append("Address", this.address);
        data.append("PictureProfile", this.file);
        http.post(`student/create`, data).then(() => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: "เพิ่มข้อมูลเรียบร้อย",
          }).then(() => {
            this.$router.push({ name: "StudentShow" });
          });
        });
      }
    },
  },
  validations() {
    return {
      code: {
        required: helpers.withMessage("ป้อนรหัสนักศึกษาก่อน", required),
      },
      nameTh: {
        required: helpers.withMessage("ป้อนชื่อภาษาไทยก่อน", required),
      },
      nameEn: {
        required: helpers.withMessage("ป้อนชื่อภาษาอังกฤษก่อน", required),
      },

      credit: {
        required: helpers.withMessage("ป้อนนามสกุลภาษาอังกฤษก่อน", required),
      },
      detail: {
        required: helpers.withMessage("ป้อนอีเมลส่วนตัวก่อน", required),
      },
      term: {
        required: helpers.withMessage("ป้อนเบอร์ติดต่อก่อน", required),
      },
    };
  },
  components: {},
  mounted() {},
};
</script>
