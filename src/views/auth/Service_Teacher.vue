<template>
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

      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto">
          <div class="flex flex-wrap ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
            >
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div
                    class="flex justify-center w-full px-4 text-center lg:w-3/12 lg:order-1"
                  >
                    <div class="relative">
                      <img
                        alt="..."
                        :src="this.image"
                        class="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16 max-w-200-px bg-emerald-500"
                      />
                    </div>
                  </div>

                  <div
                    class="w-full px-4 lg:w-2/12 lg:order-3 lg:text-right lg:self-center"
                  >
                    <div class="px-3 py-6 mt-32 sm:mt-0">
                      <button
                        class="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none sm:mr-2"
                        type="button"
                      >
                        แก้ไขโปรไฟล์
                      </button>
                    </div>
                  </div>

                  <div class="w-full px-4 lg:w-6/12 lg:order-2">
                    <div class="flex justify-center py-4 pt-8 lg:pt-4">
                      <div class="p-3 mr-4 text-center">
                        <h3
                          class=" text-3xl font-semibold leading-normal text-blueGray-700"
                        >
                         {{this.introduction}} {{ this.firstname }} {{ this.lastname }}
                        </h3>
                        <h4
                          class="mb-2 text-2xl font-normal leading-normal text-blueGray-700"
                        >
                         {{this.titleEn}} {{ this.firstnameEn }} {{ this.lastnameEn }}
                        </h4>
                        <p
                          class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                        >
                          ตำแหน่ง : {{ this.position }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-4/12"
            >
              <div class="px-6 mt-6">
                <h3 class="text-lg font-semibold">เลือกเมนูระบบสารสนเทศ</h3>
                <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                  <ul class="flex flex-col list-none lg:ml-auto">
                    <li class="flex items-center">
                      <router-link
                        to="/"
                        class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
                      >
                        <i class="mr-2 far fa-circle fa-sm"></i>
                        ระบบจองห้องเรียน
                      </router-link>
                    </li>
                    <li class="flex items-center">
                      <router-link
                        to="/"
                        class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
                      >
                        <i class="mr-2 far fa-circle fa-sm"></i>
                        ระบบสารสนเทศ 2
                      </router-link>
                    </li>
                    <li class="flex items-center">
                      <router-link
                        to="/"
                        class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
                      >
                        <i class="mr-2 far fa-circle fa-sm"></i>
                        ระบบสารสนเทศ 3
                      </router-link>
                    </li>
                    <li class="flex items-center">
                      <router-link
                        to="/"
                        class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
                      >
                        <i class="mr-2 far fa-circle fa-sm"></i>
                        ระบบสารสนเทศ 4
                      </router-link>
                    </li>
                    <li class="flex items-center">
                      <router-link
                        to="/"
                        class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
                      >
                        <i class="mr-2 far fa-circle fa-sm"></i>
                        ระบบสารสนเทศ 5
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-8/12"
            >
              <div class="px-6"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
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

      position: "",
      image: "",


    };
  },
  mounted() {
    this.getPersonnelData();
  },

  methods: {
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

          this.position = this.personnel_array.adminPosition;
          this.image = this.personnel_array.personnelPhoto;
          

          console.log(this.personnel_array.citizenId);
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
  components: {},
};
</script>
