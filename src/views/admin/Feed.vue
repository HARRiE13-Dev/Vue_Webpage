<template>
  <div>
    <main class="profile-page custom">
      <section class="relative ">
        <div class="container px-4 mx-auto">
          <div
            class="relative flex flex-col w-full min-w-0 mt-64 mb-6 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6">
              <div class="mt-6 text-center">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  ข่าวสาร
                </h3>
              </div>

              <div class="py-6 mt-2 border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12">
                    <div class="pt-0 mb-3">
                      <p>หัวข้อเรื่อง</p>
                      <input
                        v-model="n_title"
                        type="text"
                        placeholder="หัวข้อเรื่อง"
                        class="relative w-full px-2 py-1 text-sm bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div class="pt-10 mb-3 ">
                      <p>รายละเอียด</p>
                      <textarea
                        v-model="n_detail"
                        cols="30"
                        placeholder="เนื้อหา / รายละเอียด"
                        rows="10"
                        class="relative w-full px-3 py-1 text-base bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                      ></textarea>
                    </div>

                    <div class="pt-10 mb-3 text-center">
                      <button
                        v-on:click="enter()"
                        class="px-6 py-3 mb-1 mr-1 text-sm text-white uppercase transition-all duration-150 ease-linear bg-teal-500 rounded-full shadow outline-none active:bg-teal-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        ยืนยันส่งข้อความ
                      </button>
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
import axios from "axios";
export default {
  data() {
    return {
      n_title: "",
      n_detail: "",
    };
  },
  methods: {
    enter() {
      axios({
        method: "POST",
        url: "http://wwwdev.csmju.com/api/newsadd",
        data: {
          News_Detail: this.n_title,
          News_Date: "2021-09-08",
          News_Time: "13:33:25",
          News_Picture: "abc",
          News_Title: this.n_detail,
          News_File: "1",
          News_links: "1",
          News_Type: "1",
        },
      })
        .then((response) => {
          console.log(response);
          

          const Swal = this.$swal.mixin({
            position: "center",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", this.$swal.stopTimer);
              toast.addEventListener("mouseleave", this.$swal.resumeTimer);
            },
          });

          Swal.fire({
            icon: "success",
            title: "บันทึกข้อมูลเรียบร้อย",
          });
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
              //Call Sweet Alert
              const Toast = this.$swal.mixin({
                position: "center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", this.$swal.stopTimer);
                  toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                },
              });

              Toast.fire({
                icon: "error",
                title: "ไม่สามารถบันทึกข้อมูลได้",
              });
            }
          }
        });
    },
  },
};
</script>
