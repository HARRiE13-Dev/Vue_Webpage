<template>
  <div>
    <service-navbar />

    <main>
      <section class="relative w-full h-full min-h-screen py-16">
        <div
          class="absolute top-0 w-full h-full bg-no-repeat bg-blueGray-800 bg-full"
          :style="`background-image: url('${backgroundLogin}');`"
        ></div>
        <div>
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

            <section class="relative pt-16 bg-blueGray-200">
              <div class="container mx-auto">
                <div class="flex flex-wrap ">
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words rounded-lg shadow-xl bg-blueGray-800 lg:w-12/12"
                  >
                    <div class="px-6">
                      <div class="flex flex-wrap text-center lg:text-left">
                        <div class="w-full px-6 lg:w-4/12 ">
                          <div class="relative text-center">
                            <img
                              alt="..."
                              :src="image"
                              class="-mt-20 rounded-full shadow-lg h-200-px center-img max-w-200-px bg-emerald-500"
                            />
                          </div>
                          <div class="relative px-3 py-6 mt-2 text-center">
                            <button
                              @click="profile"
                              class="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                              type="button"
                            >
                              แก้ไขโปรไฟล์
                            </button>
                          </div>
                        </div>
                        <div class="relative w-full lg:w-4/12 ">
                          <div class="flex py-4 pt-8">
                            <div
                              class="py-3 border-l-2 text-center lg:text-left"
                            >
                              <h3
                                class="ml-3 mb-1 text-3xl font-semibold leading-normal text-blueGray-100"
                              >
                                {{ this.introduction }} {{ this.firstname }}
                                {{ this.lastname }}
                              </h3>
                              <h3
                                class="ml-3 mb-2 text-2xl font-normal leading-normal text-blueGray-100"
                              >
                                {{ this.titleEn }} {{ this.firstnameEn }}
                                {{ this.lastnameEn }}
                              </h3>
                              <h3
                                class="ml-3 mb-2 text-md font-normal leading-normal text-blueGray-100"
                              >
                                ตำแหน่ง : {{ this.position }}
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div class="relative w-full px-6 lg:w-4/12 ">
                          <div class="flex justify-center py-4 pt-6">
                            <div
                              class="p-3 mt-4 text-left border-2 rounded-lg shadow-lg bg-blueGray-100 border-blueGray-300"
                            >
                              <h3
                                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700 "
                              >
                                ข้อมูลการติดต่อ
                              </h3>
                              <div
                                class="py-1 border-t border-blueGray-300"
                              ></div>
                              <p
                                class="mb-2 font-normal leading-normal text-md text-blueGray-700"
                              >
                                เบอร์โทร : {{ this.tel }}
                              </p>
                              <p
                                class="mb-2 font-normal leading-normal text-md text-blueGray-700"
                              >
                                E-mail : {{ this.email }}
                              </p>
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
        </div>
        <router-view />
        <foot absolute />
      </section>
    </main>
  </div>
</template>
<script>
import Foot from "@/components/Footers/Foot.vue";
import ServiceNavbar from "@/components/Navbars/ServiceNavbar.vue";
import http from "@/services/APIService";

export default {
  data() {
    return {
      //team2,
      personnel_array: [],

      introduction: "",
      firstname: "",
      lastname: "",

      titleEn: "",
      firstnameEn: "",
      lastnameEn: "",

      email: "",
      tel: "",

      position: "",
      image: "",
    };
  },
  mounted() {
    this.getPersonnelData();
  },

  methods: {
    profile() {
      this.$router.push({
        name: "Profile",
      });
    },
    getPersonnelData() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));
      let userData = local_user.user;
      let idUserData = userData.id;
      idUserData = idUserData - 1;
      http
        .get(`personnelid/${idUserData}`)
        .then((response) => {
          this.personnel_array = response.data;
          //Get data from API
          this.introduction = this.personnel_array.titlePosition;
          this.firstname = this.personnel_array.firstName;
          this.lastname = this.personnel_array.lastName;

          this.titleEn = this.personnel_array.titleNameEn;
          this.firstnameEn = this.personnel_array.fistNameEn;
          this.lastnameEn = this.personnel_array.lastNameEn;

          this.email = this.personnel_array.e_mail;
          this.tel = this.personnel_array.phoneNumber;

          this.position = this.personnel_array.adminPosition;
          this.image = this.personnel_array.personnelPhoto;
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
              //Call Sweet Alert
              const Toast = this.$swal.mixin({
                position: "center",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "error",
                title: "Connection Error",
              });
            }
          }
        });
    },
  },
  components: {
    Foot,
    ServiceNavbar,
  },
};
</script>
