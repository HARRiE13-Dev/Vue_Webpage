<template>
  <div>
    <navbar />
    <main class="profile-page">
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
        <div class="container px-4 mx-auto custom">
          <div
            class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6 ">
              <div class="mt-10 mb-6 text-center ">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  คณาจารย์สาขาวิชาวิทยาการคอมพิวเตอร์
                </h3>
                <h3
                  class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                >
                  คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                </h3>
              </div>
              <hr />
              <div class="flex flex-wrap py-6">
                <div
                  v-for="personnel in personnel_array"
                  v-bind:key="personnel.personnelId"
                  class="w-full px-4 text-center lg:w-3/12"
                >
                  <div class="relative px-12 py-12 ">
                    <img
                      :src="personnel.personnelPhoto"
                      class="h-auto center-img max-w-full align-middle bg-teal-500 border-none rounded-full shadow-xl"
                    />
                  </div>

                  <h3
                    class="mb-0 text-lg font-semibold leading-normal text-blueGray-700 "
                  >
                    {{ personnel.titlePosition }} {{ personnel.firstName }} <br> {{ personnel.lastName }}
                  </h3>
                  <div class="mb-4 text-sm font-semibold text-blueGray-500">
                    {{ personnel.fistNameEn }} {{ personnel.lastNameEn }}
                  </div>

                  <div class="mt-3 mb-0 text-blueGray-400">
                    <div class="mb-2">
                      <i
                        class="mr-2 text-lg fas fa-briefcase "
                      ></i>
                      ตำแหน่งการบริหาร
                      <p class="text-blueGray-700">{{ personnel.adminPosition }}</p>
                    </div>

                    <div class="mb-2">
                      <i
                        class="mr-2 text-lg fas fa-university "
                      ></i>
                      การศึกษา
                      <p class="text-blueGray-700">{{ personnel.education }} {{ personnel.major }}</p>
                      <p class="text-blueGray-700">{{ personnel.university }}</p>
                      
                    
                    </div>

                    <div class="mb-2">
                      <i
                        class="mr-2 text-lg fas fa-phone-alt "
                      ></i>
                      การติดต่อ
                      <p class="text-blueGray-700">{{ personnel.phoneNumber }}</p>
                      <p class="text-blueGray-700">{{ personnel.e_mail }}</p>
                      
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

import http from "@/services/APIService";

export default {
  data() {
    return {
      //team2,
      personnel_array: [],
      personnel: {
        personnelId: 0,

        //Name Thai Top
        titlePosition: "",
        firstName: "",
        lastName: "",

        //Name English sub
        fistNameEn: "",
        lastNameEn: "",

        //Position
        adminPosition: "",

        //Education
        education: "",
        major: "",
        university: "",

        //tel
        phoneNumber: "",

        //email
        e_mail: "",

        //profile picture
        personnelPhoto: "",
      },
    };
  },
  mounted() {
    this.getPersonnelData();
  },

  methods: {
    getPersonnelData() {
      http
        .get(`personnel/teacher`)
        .then((response) => {
          this.personnel_array = response.data;
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
    Navbar,
    MainFooter,
  },
};
</script>
