<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://wwwdev.csmju.com/images/banner/thumbnail/Banner_1638264985.jpg');
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
            <div class="px-6 ">
              <div class="mt-6 text-center">
                <h3
                  class="mb-6 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  กระบวนวิชาของหลักสูตร
                </h3>
              </div>

              <div class="block w-full mb-4 overflow-x-auto">
                <!-- Projects table -->
                <table
                  class="items-center w-full bg-transparent border-collapse border-emerald-700"
                >
                  <thead>
                    <tr>
                      <th
                        class="px-6 py-3 font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-500 text-white ',
                        ]"
                      >
                        ลำดับ
                      </th>
                      <th
                        class="px-6 py-3 font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-500 text-white ',
                        ]"
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-500 text-white ',
                        ]"
                      >
                        ชื่อวิชา
                      </th>
                      <th
                        class="px-6 py-3 font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md whitespace-nowrap"
                        :class="[
                          color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-emerald-500 text-white ',
                        ]"
                      >
                        หน่วยกิต
                      </th>
                     
                     
                    </tr>
                  </thead>
                  <tbody
                    v-for="subject in subject_array"
                    v-bind:key="subject.subjectId"
                  >
                    <tr>
                      <td
                        class="items-center p-4 px-6 font-semibold text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap"
                      >
                        {{ subject.subjectId }}
                      </td>
                         <td
                        class="items-center p-4 px-6 font-semibold text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap"
                      >
                        {{ subject.Subject_Code }}
                      </td>
                         <td
                        class="p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md tems-center whitespace-nowrap"
                      >
                        
                        <div class="font-semibold">
                          {{ subject.Subject_NameTh }} 
                        </div>
                        {{ subject.Subject_NameEn }}
                      </td>
                         <td
                        class="items-center p-4 px-6 font-semibold text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap"
                      >
                        {{ subject.Subject_Credit }}
                      </td>
                        
                      
                
                    
                      
                    </tr>
                  </tbody>
                </table>
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
      subject_array: [],
      subject: {
        subjectId: 0,
        Subject_Code: "",
        Subject_NameTh: "",
        Subject_Credit: 0,
      },
    };
  },
  mounted() {
    this.getSubjectData();
  },
  methods: {
    
    getSubjectData() {
      http.get(`subject`)
        .then((response) => {
          this.subject_array = response.data;
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
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
