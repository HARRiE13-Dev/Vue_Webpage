<template>
  <div>
    <page size="A4">
      <div id="printMe" class="bg-white border border-blueGray-300 shadow-lg ">
        <div class="bg-blueGray-100 px-0 pt-2 pb-4">
          <div class=" flex flex-warp">
            <div class="ml-0 px-0 w-full lg:w-3/12 ">
              <img
                alt="..."
                :src="image"
                class="mt-2 rounded-full shadow-lg max-w-100-px h-100-px center-img bg-emerald-500"
              />
            </div>
            <div class="ml-3 px-0 w-full lg:w-6/12 ">
              <h1 class="mt-4 font-normal text-xl text-blueGray-800">
                {{ this.position }}{{ this.first_name }}
                {{ this.last_name }}
              </h1>
              <h1 class="mt-2 font-semibold text-lg text-blueGray-800">
                {{ this.titleEn }} {{ this.first_nameEn }}
                {{ this.last_nameEn }}
              </h1>
            </div>
            <div class="text-right mt-4 mr-4 w-full lg:w-3/12 ">
              <div class="text-sm text-blueGray-400">
                <span>{{ this.address }}&nbsp; </span>
                <i class="fas fa-home text-emerald-500"></i>
              </div>
              <div class="text-sm text-blueGray-400">
                <span>{{ this.phone }}&nbsp; </span>
                <i class="fas fa-phone-alt text-emerald-500"></i>
              </div>
              <div class="text-sm text-blueGray-400">
                <span>{{ this.email }}&nbsp; </span>
                <i class="fas fa-envelope text-emerald-500"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white px-4 pt-4 pb-6">
          <div class=" flex flex-warp">
            <div class="ml-3 px-4 w-full lg:w-12/12 ">
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-user text-emerald-500"></i>
                  ประวัติโดยย่อ / Biological
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm  leading-normal break-words text-blueGray-500"
                >
                  {{ this.bio }}
                </p>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-user-graduate text-emerald-500"></i>
                  การศึกษา / Education
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  <b>{{ this.year1 }} </b>
                  {{ this.graduate1 }}
                  {{ this.institution1 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  <b>{{ this.year2 }} </b>
                  {{ this.graduate2 }}
                  {{ this.institution2 }}
                </p>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  <b>{{ this.year3 }} </b>
                  {{ this.graduate3 }}
                  {{ this.institution3 }}
                </p>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-briefcase text-emerald-500"></i>
                  ประสบการณ์การทำงาน / Experience
                </h1>
                <div class="pt-1 border-t"></div>
                <div v-for="exp_loop in experience_array" :key="exp_loop.exp">
                  <p
                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                  >
                    {{ exp_loop.exp }}
                  </p>
                </div>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-tools text-emerald-500"></i>
                  ทักษะ / Skills
                </h1>
                <div class="pt-1 border-t"></div>
                <div v-for="skill_loop in skill_array" :key="skill_loop.skill">
                  <p
                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                  >
                    {{ skill_loop.skill }}
                  </p>
                </div>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-award text-emerald-500"></i>
                  ผลงาน / Portfolio
                </h1>
                <div class="pt-1 border-t"></div>
                <div v-for="port_loop in portfolio_array" :key="port_loop.port">
                  <p
                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                  >
                    {{ port_loop.port }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </page>
  </div>
</template>

<script>
import http from "@/services/APIService";
export default {
  data() {
    return {
      position: "",
      first_name: "",
      last_name: "",
      titleEn: "",
      first_nameEn: "",
      last_nameEn: "",
      address: "",
      phone: "",
      email: "",

      bio: "",

      experience_array: [{ exp: "" }],
      skill_array: [{ skill: "" }],
      portfolio_array: [{ port: "" }],

      year1: "",
      graduate1: "",
      institution1: "",
      year2: "",
      graduate2: "",
      institution2: "",
      year3: "",
      graduate3: "",
      institution3: "",
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
          this.position = this.personnel_array.titlePosition;
          this.first_name = this.personnel_array.firstName;
          this.last_name = this.personnel_array.lastName;

          this.titleEn = this.personnel_array.titleNameEn;
          this.first_nameEn = this.personnel_array.fistNameEn;
          this.last_nameEn = this.personnel_array.lastNameEn;

          this.email = this.personnel_array.e_mail;
          this.phone = this.personnel_array.phoneNumber;

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
};
</script>

<style>
body {
  background: rgb(204, 204, 204);
}
page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
}
page[size="A4"] {
  width: 21cm;
  height: 29.7cm;
}

@media print {
  body,
  page {
    margin: 0;
    box-shadow: 0;
  }
}
</style>
