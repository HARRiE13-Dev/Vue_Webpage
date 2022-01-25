<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
         :style="`background-image: url('${bgupdate}');`"
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
                <p
                  class="font-semibold leading-normal text-md text-blueGray-500"
                >
                  Classroom Building
                </p>
              </div>

              <div class="py-6 mt-2 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      อาคารเรียนในปัจจุบันมีอยู่ด้วยกัน 2 อาคารเรียน ได้แก่
                      อาคารแม่โจ้ 60 ปี และอาคารจุฬาภรณ์ คณะวิทยาศาสตร์
                      มหาวิทยาลัยแม่โจ้ แบ่งห้องเรียนออกเป็น 2 รูปแบบได้แก่
                      ห้องบรรยายคอมพิวเตอร์ และปฏิบัติการคอมพิวเตอร์ <br />
                      โดยมีห้องสำนักงานตั้งอยู่ที่ ชั้น 6 อาหารแม่โจ้ 60 ปี
                    </p>
                  </div>
                </div>
              </div>

              <hr>

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
                  class="w-full px-2 lg:w-3/12 "
                >
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-200"
                  >
                    <img
                      alt="..."
                      :src="classroom.Classroom_Images"
                      class="w-full align-middle rounded-t-lg cropped-card1"
                    />
                    <blockquote class="relative py-8 px-4 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        class="absolute left-0 block w-full h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          class="fill-current text-blueGray-200"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl h-12 font-bold text-emerald-600">
                        {{ classroom.Classroom_Name }}
                      </h4>
                      <div class="mt-2 px-2 py-1 font-normal rounded-md bg-blueGray-100 text-blueGray-700 text-md">
                        <p class="mt-1">
                          จำนวนที่นั่ง : {{ classroom.Classroom_sit }}
                        </p>
                        <p class="mt-1">
                          หมายเลขห้อง {{ classroom.Classroom_Number }}
                        </p>
                        <p class="mt-1">
                          สถานที่ : {{ classroom.Classroom_Detail }}
                        </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div class="my-6 border-t border-blueGray-200"></div>
              <div class="px-6 mt-10">
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
                  class="w-full px-2 lg:w-3/12 "
                >
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-200"
                  >
                    <img
                      alt="..."
                      :src="classroom.Classroom_Images"
                      class="w-full align-middle rounded-t-lg cropped-card1"
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
                          class="fill-current text-blueGray-200"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl h-16 font-bold text-emerald-600">
                        {{ classroom.Classroom_Name }}
                      </h4>
                     <div class="mt-2 px-2 py-1 font-normal rounded-md bg-blueGray-100 text-blueGray-700 text-md">
                        <p class="mt-1">
                          จำนวนที่นั่ง : {{ classroom.Classroom_sit }}
                        </p>
                        <p class="mt-1">
                          หมายเลขห้อง {{ classroom.Classroom_Number }}
                        </p>
                        <p class="mt-1">
                          สถานที่ : {{ classroom.Classroom_Detail }}
                        </p>
                      </div>
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
import bgupdate from "@/assets/img/bg-update.jpg";
import http from "@/services/APIService";

export default {
  data() {
    return {
      bgupdate,
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
      http
        .get(`classroom/ห้องปฏิบัติการ`)
        .then((response) => {
          this.lab_array = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
      http
        .get(`classroom/ห้องบรรยาย`)
        .then((response) => {
          this.lec_array = response.data;
          console.log(response.data);
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
