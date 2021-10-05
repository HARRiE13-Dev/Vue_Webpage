<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://3l4jojspj4-flywheel.netdna-ssl.com/wp-content/uploads/iStock-655597202-1.jpg');
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
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  อาคาร / ห้องเรียน
                </h3>
              </div>

              <div class="py-6 mt-2 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      อาคารเรียนในปัจจุบันมีอยู่ด้วยกัน 2 อาคารเรียน ได้แก่ อาคารแม่โจ้ 60 ปี และอาคารจุฬาภรณ์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ แบ่งห้องเรียนออกเป็น 2 รูปแบบได้แก่ ห้องบรรยายคอมพิวเตอร์ และปฏิบัติการคอมพิวเตอร์ <br>
                      โดยมีห้องสำนักงานตั้งอยู่ที่ ชั้น 6 อาหารแม่โจ้ 60 ปี
                      
                    </p>
                  </div>
                </div>
              </div>

              <hr />

              <div class="px-6 mt-6">
                <h3
                  class="mb-6 text-2xl font-semibold leading-normal text-blueGray-700"
                >
                  ห้องปฏิบัติการคอมพิวเตอร์
                </h3>
              </div>

              <div class="flex flex-wrap">
                <div
                  v-for="classroom in lab_array"
                  v-bind:key="classroom.ClassroomId"
                  class="w-full px-4 lg:w-4/12 "
                >
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                  >
                    <img
                      alt="..."
                      src="@/assets/img/vue.jpg"
                      class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        class="absolute left-0 block w-full h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          class="fill-current text-emerald-500"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl font-bold text-white">
                        {{ classroom.Classroom_Name }}
                      </h4>
                      <p class="mt-2 font-light text-white text-md">
                        จำนวนที่นั่ง : {{ classroom.Classroom_sit }} <br />
                        หมายเลขห้อง {{ classroom.Classroom_Number }} <br />
                        สถานที่ : {{ classroom.Classroom_Detail }}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>

              <br />
              <div class="px-6">
                <h3
                  class="mt-6 mb-6 text-2xl font-semibold leading-normal text-blueGray-700"
                >
                  ห้องบรรยายคอมพิวเตอร์
                </h3>
              </div>

              <div class="flex flex-wrap">
                <div
                  v-for="classroom in lec_array"
                  v-bind:key="classroom.ClassrooomId"
                  class="w-full px-4 lg:w-3/12 "
                >
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                  >
                    <img
                      alt="..."
                      src="@/assets/img/vue.jpg"
                      class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative p-5 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        class="absolute left-0 block w-full h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          class="fill-current text-emerald-500"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl font-bold text-white">
                        {{ classroom.Classroom_Name }}
                      </h4>
                      <p class="mt-2 font-light text-white text-md">
                        จำนวนที่นั่ง : {{ classroom.Classroom_sit }} <br />
                        หมายเลขห้อง {{ classroom.Classroom_Number }} <br />
                        สถานที่ : {{ classroom.Classroom_Detail }}
                      </p>
                    </blockquote>
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

import axios from "axios";

export default {
  data() {
    return {
      lec_array: [],
      lab_array: [],
      classroom: {
        ClassroomId: 0,
        Classroom_Name: "",
        Classroom_Type: "",
        Classroom_Number: "",
        Classroom_sit: 0,
        Classroom_Detail: "",
        Classroom_Images: "",
      },
    };
  },
  mounted() {
    this.getRoomData();
  },
  methods: {
    getRoomData() {
      axios({
        method: "GET",
        url: "http://wwwdev.csmju.com/api/classroom/ห้องปฏิบัติการ",
      })
        .then((response) => {
          this.lab_array = response.data;
          
        })
        
      axios({
        method: "GET",
        url: "http://wwwdev.csmju.com/api/classroom/ห้องบรรยาย",
      })
        .then((response) => {
          this.lec_array = response.data;
         
        })
        
    },
  },
  components: {
    Navbar,
    MainFooter,
  },
};
</script>
