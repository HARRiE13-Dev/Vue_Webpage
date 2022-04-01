<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-6 text-center">
              <h1 class="py-6 text-3xl font-bold ">
                CSMJU | การแสดงข้อมูลเกี่ยวกับเรา
              </h1>
            </div>
            <br class="shadow-xl" />
            <div
              class="relative flex flex-col w-full mb-2 break-words rounded"
            >
              <!-- Simulator  -->
              <div class="w-full lg:w-12/12 ">
                <div class="px-2">
                  <label
                    class="block mt-4 mb-2 text-gray-500 text-lg font-semibold"
                    >การจัดการข้อมูลเกี่ยวกับเราบนหล้าเว็บไซต์หลัก</label
                  >
                  <div class="flex flex-wrap mb-4">
                    <div
                      v-for="about in about_array"
                      :key="about.AboutId"
                      class="w-full px-4 md:w-12/12 border rounded-lg pt-2 pb-4 my-2"
                    >
                      <label
                        class="block mb-5  mt-3 text-gray-700 text-xl"
                        for="Title"
                        ><b>หัวข้อ :</b> {{ about.Topic }}</label
                      >
                      <label
                        class="block my-3 text-gray-700 text-md"
                        for="Title"
                        ><b>คำอธิบาย :</b> {{ about.Detail }}
                      </label>
                      <div
                        class="text-sm text-gray-500 font-normal text-right mt-4"
                      >
                        <label class="mr-2">
                          แก้ไขล่าสุด : {{ about.Update_Date }}
                        </label>
                        <button
                          @click="Edit(student.studentId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-lg shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          @click="onclickDelete(student.studentId)"
                          class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-lg shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt-4 pb-4">
                    <button
                      @click="addPicture"
                      class="px-6 py-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow-lg outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="button"
                    >
                      <i class="fas fa-plus-circle"></i>
                      เพิ่ม
                    </button>
                  </div>
                </div>
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

export default {
  data() {
    return {
      first_name: "",
      about_array: [],
    };
  },
  methods: {
    getAbout() {
      http.get(`about`).then((response) => {
        this.about_array = response.data;
      });
    },

    addPicture() {
      var date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      let today = year + "-" + month + "-" + day;
      let time = hour + ":" + minute + ":" + second;

      if (this.file != null) {
        const swalWithBootstrapButtons = this.$swal.mixin({
          customClass: {
            title: "font-weight-bold",
            confirmButton:
              "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
            cancelButton:
              "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          },
          buttonsStyling: false,
        });

        swalWithBootstrapButtons
          .fire({
            title: "ยืนยันการอัพโหลดรูปภาพ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              const formData = new FormData();
              formData.append("Banner_Date", today);
              formData.append("Banner_Time", time);
              formData.append("Banner_File", this.file);
              http.post(`banner/create`, formData).then(() => {
                swalWithBootstrapButtons
                  .fire("การอัพโหลดรูปภาพสำเร็จ!", "", "success")
                  .then(() => {
                    today = null;
                    time = null;
                    this.file = "";
                    this.$refs.fileupload.value = null;
                    window.location.reload();
                  });
              });
            } else if (result.dismiss === this.$swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                "ยกเลิกการอัพโหลดรูปภาพ!",
                "",
                "error"
              );
            }
          });
      } else {
        const Toast = this.$swal.mixin({
          position: "center",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "warning",
          title: "เพิ่มรูปภาพการแสดงผลก่อน",
        });
      }
    },

    deleteBanner(id) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          title: "font-weight-bold",
          confirmButton:
            "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          cancelButton:
            "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "ยืนยันการลบรูปภาพ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            http.delete(`banner/delete/${id}`).then(() => {
              swalWithBootstrapButtons
                .fire("ลบรูปภาพเรียบร้อย!", "", "success")
                .then(() => {
                  this.file = "";
                  this.$refs.fileupload.value = null;
                  window.location.reload();
                });
            });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "ยกเลิกการลบรูปภาพเรียบร้อย!",
              "",
              "error"
            );
          }
        });
    },
  },

  mounted() {
    this.getAbout();
  },
};
</script>
