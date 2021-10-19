<template>
  <div class="flex flex-wrap custom">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
      >
        <div class="container px-4 mx-auto">
          <div class="px-6">
            <div class="mt-6 text-center">
              <h1 class="py-6 text-3xl font-bold ">CSMJU | ประกาศข่าวสาร</h1>
            </div>
              <br class="shadow-xl">
              <div
    class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="px-4 py-3 mb-0 border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex-1 flex-grow w-full max-w-full px-4">
          <h3
            class="text-lg font-semibold"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            search taps
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              ลำดับ
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              หัวข้อข่าว
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              รายละเอียด
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              ผู้เขียน
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              การจัดการ
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              class="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              <img
                :src="bootstrap"
                class="w-12 h-12 bg-white border rounded-full"
                alt="..."
              />
              <span
                class="ml-3 font-bold"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
                ข่าว 1
              </span>
            </th>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              xxx
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              <i class="mr-2 text-orange-500 fas fa-circle"></i> xxxx
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              <div   class="flex items-center text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 border-2 rounded-full shadow border-blueGray-50"
                />
                  <span
                class="ml-3 text-sm font-bold"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
               user 1 
               <div class="text-xs font-normal">
                 12 ตุลาคม 2564
               </div>
              </span>
              
               
              </div>
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              <div class="flex items-center">
                <span class="mr-2">60%</span>
                <div class="relative w-full">
                  <div
                    class="flex h-2 overflow-hidden text-xs bg-red-200 rounded"
                  >
                    <div
                      style="width: 60%;"
                      class="flex flex-col justify-center text-center text-white bg-red-500 shadow-none whitespace-nowrap"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td
              class="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            >
              <table-dropdown />
            </td>
          </tr>
        
        </tbody>
      </table>
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
