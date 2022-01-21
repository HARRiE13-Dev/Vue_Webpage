<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://wwwdev.csmju.com/images/banner/thumbnail/Banner_1639385731.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="absolute w-full h-full bg-black opacity-50"
          ></span>
        </div>

        <div
          class="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="fill-current text-blueGray-200"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      <section class="relative py-16 bg-blueGray-200">
        <div class="container px-4 mx-auto">
          <div
            class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6">
              <div class="mt-6 text-center">
                <h3
                  class="text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  ติดต่อเรา
                </h3>
                <p
                  class="font-semibold leading-normal text-md text-blueGray-500"
                >
                  Contact Us
                </p>
              </div>

              <div class="py-5 mt-10 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap">
                  <div class="w-full px-6 mb-4 lg:w-3/12">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-full shadow-lg bg-emerald-400"
                    >
                      <i class="fas fa-phone-alt fa-2x"></i>
                    </div>

                    <p class="text-lg text-blueGray-500">
                      สามารถติดต่อได้ที่เบอร์ :
                    </p>
                    <h3
                      class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                    >
                      <a href="tel:+6653873890-3">(+66) 053 873890-3</a>
                    </h3>

                    <p class="mb-4 text-xs text-red-500">
                      *หมายเหตุ : กรุณาติดต่อภายในวัน และเวลาราชการ
                    </p>
                  </div>
                  <div class="w-full px-6 mb-4 lg:w-3/12">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-full shadow-lg bg-emerald-400"
                    >
                      <i class="fas fa-envelope fa-2x"></i>
                    </div>
                    <p class="text-lg text-blueGray-500">
                      ติดต่อทางอีเมลของเรา :
                    </p>
                    <h3
                      class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                    >
                      <a href="mailto:csmju@gmail.com">csmju@gmail.com </a>
                    </h3>
                  </div>
                </div>
                <div class="flex flex-wrap mt-10">
                  <div class="w-full px-6 mb-4 lg:w-3/12">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-full shadow-lg bg-emerald-400"
                    >
                      <i class="fab fa-facebook-f fa-2x"></i>
                    </div>

                    <p class="text-lg text-blueGray-500">
                      ติดต่อทาง Facebook :
                    </p>
                    <h3
                      class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                    >
                      <a href="https://www.facebook.com/computersciencemju"
                        >วิทยาการคอมพิวเตอร์ ม.แม่โจ้</a
                      >
                    </h3>
                  </div>
                  <div class="w-full px-6 mb-4 lg:w-3/12">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-full shadow-lg bg-emerald-400"
                    >
                      <i class="fab fa-line fa-3x"></i>
                    </div>
                    <p class="text-lg text-blueGray-500">
                      ติดต่อทาง Line Offical :
                    </p>
                    <h3
                      class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                    >
                      <a href="https://line.me/R/ti/p/%40053vfccm">CSMJU </a>
                    </h3>
                  </div>
                  <div class="w-full border-blueGray-300 px-6 border-l mb-4 text-left lg:-mt-48 lg:w-6/12">
                    <h3
                      class="mb-6 text-2xl font-normal leading-normal text-center text-blueGray-700"
                    >
                      แจ้งปัญหาของท่านให้เราทราบ
                    </h3>
                    <div class="pt-0 mb-3 text-lg text-blueGray-500">
                      <p>หัวข้อเรื่อง</p>
                      <input
                        v-model="topic"
                        type="text"
                        placeholder="หัวข้อเรื่อง"
                        class="relative w-full px-2 py-1 text-sm bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div class="pt-2 mb-3 text-lg text-blueGray-500">
                      <p>รายละเอียด</p>
                      <textarea
                        v-model="detail"
                        cols="30"
                        placeholder="เนื้อหา / รายละเอียด"
                        rows="5"
                        class="relative w-full px-3 py-1 text-base bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                      ></textarea>
                    </div>

                    <div class="mt-4 ">
                      <img
                        v-if="imgUrl"
                        :src="imgUrl"
                        class="w-full cropped-card1 round-lg"
                      />
                    </div>

                    <div class="mb-1 text-lg text-blueGray-500">
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

                    <div class="pt-2 mb-3">
                      <vue-recaptcha
                        v-if="showRecaptcha"
                        siteKey="6Le4YCUeAAAAAO0lm_yXaykPaveKVJCipX7I_M8u"
                        size="normal"
                        theme="light"
                        :tabindex="0"
                        @verify="recaptchaVerified"
                        @expire="recaptchaExpired"
                        @fail="recaptchaFailed"
                        ref="vueRecaptcha"
                      >
                      </vue-recaptcha>
                    </div>

                    <div class="pt-2 mb-3 text-center ">
                      <button
                        @click.prevent="clear"
                        class="px-6 py-3 mb-1 mr-1 font-semibold text-sm text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-teal-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        ล้าง
                      </button>
                      <button
                        @click.prevent="sd"
                        class="px-6 py-3 mb-1 mr-1 font-semibold text-sm text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-emerald-500 active:bg-teal-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        ยืนยัน
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap mt-10">
                  <div
                    class="w-full px-4 mb-0 text-left border-t border-blueGray-200 lg:w-12/12"
                  >
                    <h3
                      class="mt-2 mb-6 text-2xl font-normal leading-normal text-left text-blueGray-700"
                    >
                      ดาวน์โหลดแบบฟอร์มเอกสารราชการ
                    </h3>
                  </div>
                  <div class="flex flex-wrap mt-4">
                    <div class="w-full px-2 lg:w-2/12 ">
                      <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                      >
                        <img
                          alt="..."
                          :src="icon"
                          class="w-full  align-middle rounded-t-lg text-blueGray-500"
                        />
                        <blockquote class="relative">
                          <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            class="absolute left-0 block w-full h-95-px -top-94-px"
                          >
                            <polygon
                              points="-30,95 583,95 583,65"
                              class="fill-current text-blueGray-100"
                            ></polygon>
                          </svg>
                        </blockquote>
                        <div class="relative p-4 ">
                          <h4 class="text-xl font-bold ">
                            ใบลาสำหรับนักศึกษา / บุคคลากร
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <button
                              class="px-4 py-2 mt-2 mb-1 mr-1 text-xs font-semibold text-white uppercase transition-all duration-150 ease-linear rounded-full shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                              type="button"
                            >
                              ดาวน์โหลด
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full px-2 lg:w-2/12 ">
                      <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                      >
                        <img
                          alt="..."
                          :src="icon"
                          class="w-full  align-middle rounded-t-lg text-blueGray-500"
                        />
                        <blockquote class="relative">
                          <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            class="absolute left-0 block w-full h-95-px -top-94-px"
                          >
                            <polygon
                              points="-30,95 583,95 583,65"
                              class="fill-current text-blueGray-100"
                            ></polygon>
                          </svg>
                        </blockquote>
                        <div class="relative p-4 ">
                          <h4 class="text-xl font-bold ">
                            แบบแสดงความจำนงบริจาคเงิน
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <button
                              class="px-4 py-2 mt-2 mb-1 mr-1 text-xs font-semibold text-white uppercase transition-all duration-150 ease-linear rounded-full shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                              type="button"
                            >
                              ดาวน์โหลด
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full px-2 lg:w-2/12 ">
                      <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                      >
                        <img
                          alt="..."
                          :src="icon"
                          class="w-full  align-middle rounded-t-lg text-blueGray-500"
                        />
                        <blockquote class="relative">
                          <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            class="absolute left-0 block w-full h-95-px -top-94-px"
                          >
                            <polygon
                              points="-30,95 583,95 583,65"
                              class="fill-current text-blueGray-100"
                            ></polygon>
                          </svg>
                        </blockquote>
                        <div class="relative p-4 ">
                          <h4 class="text-xl font-bold ">
                            แบบฟอร์มลาสำหรับนักศึกษา
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <button
                              class="px-4 py-2 mt-2 mb-1 mr-1 text-xs font-semibold text-white uppercase transition-all duration-150 ease-linear rounded-full shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                              type="button"
                            >
                              ดาวน์โหลด
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full px-2 lg:w-2/12 ">
                      <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                      >
                        <img
                          alt="..."
                          :src="icon"
                          class="w-full  align-middle rounded-t-lg text-blueGray-500"
                        />
                        <blockquote class="relative">
                          <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            class="absolute left-0 block w-full h-95-px -top-94-px"
                          >
                            <polygon
                              points="-30,95 583,95 583,65"
                              class="fill-current text-blueGray-100"
                            ></polygon>
                          </svg>
                        </blockquote>
                        <div class="relative p-4 ">
                          <h4 class="text-xl font-bold ">
                            ใบรับรองเวลาปฏิบัติงาน
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <button
                              class="px-4 py-2 mt-2 mb-1 mr-1 text-xs font-semibold text-white uppercase transition-all duration-150 ease-linear rounded-full shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                              type="button"
                            >
                              ดาวน์โหลด
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full px-2 lg:w-2/12 ">
                      <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                      >
                        <img
                          alt="..."
                          :src="icon"
                          class="w-full  align-middle rounded-t-lg text-blueGray-500"
                        />
                        <blockquote class="relative">
                          <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            class="absolute left-0 block w-full h-95-px -top-94-px"
                          >
                            <polygon
                              points="-30,95 583,95 583,65"
                              class="fill-current text-blueGray-100"
                            ></polygon>
                          </svg>
                        </blockquote>
                        <div class="relative p-4 ">
                          <h4 class="text-xl font-bold ">
                            แบบฟอร์มใบเบิกค่ารักษาพยาบาล
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <button
                              class="px-4 py-2 mt-2 mb-1 mr-1 text-xs font-semibold text-white uppercase transition-all duration-150 ease-linear rounded-full shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                              type="button"
                            >
                              ดาวน์โหลด
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
        </div>
      </section>
    </main>
    <main-footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import MainFooter from "@/components/Footers/MainFooter.vue";
import vueRecaptcha from "vue3-recaptcha2";
import icon from "@/assets/img/paper.png";
import axios from "axios";
export default {
  data() {
    return {
      topic: "",
      detail: "",
      icon,

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
      const formData = new FormData();
      formData.append("image", this.selectedFile, this.selectedFile.name);
      axios({
        method: "POST",
        url: "http://wwwdev.csmju.com/api/complainadd",
        data: {
          Complain_Title: this.topic,
          Complain_Detail: this.detail,
          Complain_Picture: this.selectedFile.name,
          Complain_Date: this.date,
        },
        formData,
        onUploadProgress: (uploadEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round((uploadEvent.loaded / uploadEvent.tolal) * 100) +
              "%"
          );
        },
      })
        .then((response) => {
          //console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data));

          const Swal = this.$swal.mixin({
            position: "center",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
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
    recaptchaVerified() {},
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {},
  },
  components: {
    Navbar,
    MainFooter,
    vueRecaptcha,
  },

};
</script>
