<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-6 text-center">
              <h3
                class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
              >
                Feed
              </h3>
            </div>

            <div class="py-6 mt-2 border-t border-blueGray-200">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 lg:w-9/12">
                  <div class="pt-0 mb-3">
                    <p>หัวข้อเรื่อง</p>
                    <input
                      v-model="topic"
                      type="text"
                      placeholder="หัวข้อเรื่อง"
                      class="relative w-full px-2 py-1 text-sm bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div class="pt-10 mb-3 ">
                    <p>รายละเอียด</p>
                    <textarea
                      v-model="detail"
                      cols="30"
                      placeholder="เนื้อหา / รายละเอียด"
                      rows="10"
                      class="relative w-full px-3 py-1 text-base bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                    ></textarea>
                  </div>
                  <div class="mt-4 ">
                    <img v-if="imgUrl" :src="imgUrl" class="w-full" />
                  </div>
                  <div class="mb-1">
                    <span>แนบไฟล์</span>
                    <div
                      class="relative flex items-center justify-center h-32 bg-gray-100 border-2 border-blue-700 rounded-lg border-all"
                    >
                      <div class="absolute">
                        <div class="flex flex-col items-center py-10">
                          <span
                            class="block py-10 font-normal border-blueGray-300"
                          ></span>
                        </div>
                      </div>
                      <input
                        type="file"
                        @change="onFileSelected"
                        class="w-full h-full opacity-0"
                      />
                    </div>
                  </div>

                  <div class="pt-10 mb-3 text-center">
                    <!-- <vue-recaptcha
                        v-if="showRecaptcha"
                        siteKey="..."
                        size="normal"
                        theme="light"
                        :tabindex="0"
                        @verify="recaptchaVerified"
                        @expire="recaptchaExpired"
                        @fail="recaptchaFailed"
                        ref="vueRecaptcha"
                      >
                      </vue-recaptcha> -->
                  </div>

                  <div class="pt-10 mb-3 text-center">
                    <button
                      @click.prevent="commit"
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
    </div>
  </div>
</template>
<script>
// import vueRecaptcha from "vue3-recaptcha2";
import axios from "axios";
export default {
  data() {
    return {
      topic: "",
      detail: "",

      showRecaptcha: true,
      date: new Date().toString(),

      selectedFile: null,
      imgUrl: "",
    };
  },
  methods: {
    onFileSelected(event) {
      //console.log(event);
      const file = event.target.files[0];
      this.selectedFile = event.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    commit() {
      //console.log(this.topic, this.detail, this.date);
      
      axios({
        method: "POST",
        url: "http://wwwdev.csmju.com/api/newsadd",
        data: {
          News_Title: this.topic,
          News_Detail: this.detail,
          News_Picture: this.detail,
          

          
          News_File: this.detail,
          News_links: this.detail,
          News_Type: this.detail,
        },
        
   
      })
        .then((response) => {
          //console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data));

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
            console.log(error.data);
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
  components: {
    // vueRecaptcha,
  },
  // methods: {
  // //   recaptchaVerified() {},
  // //   recaptchaExpired() {
  // //     this.$refs.vueRecaptcha.reset();
  // //   },
  // //   recaptchaFailed() {},
  // // },
};
</script>
