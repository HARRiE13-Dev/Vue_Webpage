<template>
  <div class="">
    <main class="profile-page custom">
      <section class="relative pb-16 bg-blueGray-200">
        <div class="container mx-auto">
          <div class="flex flex-wrap ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
            >
              <div class="px-6 mt-6">
                <div class="flex flex-wrap rounded-lg bg-blueGray-100">
                  <div class="w-full lg:w-3/12">
                    <div class="mr-4 text-center rounded-lg bg-emerald-500">
                      <h3
                        class="text-6xl font-semibold leading-normal text-white"
                      >
                        MIS
                      </h3>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12">
                    <h3 class="mt-1 text-2xl font-semibold ">
                      ระบบจองห้องเรียน
                    </h3>

                    <h3 class="text-xl font-normal ">
                      | Room Reservation System
                    </h3>
                  </div>
                  <div class="w-full lg:w-3/12">
                    <div class="mt-4 text-right">
                      <a href="javascript:history.go(-1)">
                        <button
                          class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          ย้อนกลับ
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                  <div class="flex flex-wrap">
                    <!-- from input -->
                    <div class="w-full lg:w-6/12 pr-4">
                      <label
                        class="block text-gray-700 text-md font-normal px-2 mb-0"
                        for="date"
                        >วันที่และเวลาการจอง
                        <i class="text-red-500 text-xs"
                          >(กรุณาทำรายการจองล่วงหน้าก่อน 3 - 5 วันทำการ)</i
                        ></label
                      >
                      <form
                        class="bg-white rounded px-8 pt-2 pb-8"
                        @submit.prevent
                      >
                        <div class="flex w-full">
                          <v-date-picker
                            v-model="range"
                            mode="dateTime"
                            :masks="masks"
                            is-range
                          >
                            <template
                              v-slot="{
                                inputValue,
                                inputEvents,
                              }"
                            >
                              <div
                                class="flex flex-wrap mb-4 justify-start items-center"
                              >
                                <div class="relative w-full px-2 md:w-5/12">
                                  <input
                                    class="flex-grow px-6 text-gray-900 py-2 border rounded w-full"
                                    :value="inputValue.start"
                                    v-on="inputEvents.start"
                                  />
                                </div>
                                <div
                                  class="relative text-center w-full px-2 md:w-2/12"
                                >
                                  <i
                                    class="fas fa-long-arrow-alt-right fa-lg"
                                  ></i>
                                </div>
                                <div class="relative w-full px-2 md:w-5/12">
                                  <input
                                    class="flex-grow px-6 py-2 text-gray-900 border rounded w-full"
                                    :value="inputValue.end"
                                    v-on="inputEvents.end"
                                  />
                                </div>
                              </div>
                            </template>
                          </v-date-picker>
                        </div>
                      </form>
                      <label
                        class="block px-2 my-3 text-gray-700 text-md"
                        for="Title"
                        >ห้องเรียน
                      </label>
                      <div class="flex flex-wrap mt-1 mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <select
                            v-model="room"
                            id="classroom"
                            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                          >
                          </select>
                        </div>
                      </div>
                      <label
                        class="block px-2 my-3 text-gray-700 text-md"
                        for="Title"
                        >ใช้ในรายวิชา / กิจกรรม / โครงการ
                      </label>
                      <div class="flex flex-wrap mt-1 mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <input
                            v-model="topic"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border rounded shadow"
                            type="text"
                            placeholder="ชื่อโครงการ"
                          />
                        </div>
                      </div>
                      <label
                        class="block px-2 my-3 text-gray-700 text-md"
                        for="Title"
                        >คำอธิบาย
                      </label>
                      <div class="flex flex-wrap mt-1 mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <textarea
                            v-model="detail"
                            cols="30"
                            placeholder="รายละเอียดการจอง"
                            rows="5"
                            class="relative w-full px-3 py-1 border rounded shadow text-base bg-white outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                          ></textarea>
                        </div>
                      </div>
                      <label
                        class="block px-2 my-3 text-gray-700 text-md"
                        for="Title"
                        >ผู้รับผิดชอบ
                      </label>
                      <div class="flex flex-wrap mt-1 mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <select
                            v-model="advisor"
                            id="advisor"
                            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                          >
                          </select>
                        </div>
                      </div>
                      <label
                        class="block px-2 my-3 text-red-500 italic text-sm text-md"
                        for="Title"
                        >*หมายเหตุ :
                        เมื่อใช้งานห้องเสร็จเรียบร้อยแล้วกรุณาปิดเครื่องใช้ไฟฟ้าทุกอย่างภายในห้อง
                        รักษาความสะอาด และจัดห้องให้อยู่ในสภาพเดิม
                        ทั้งนี้หากมีอุปกรณ์สูญหายหรือเกิดความเสียหายภายในห้อง
                        ผู้ขอใช้ห้องต้องรับผิดชอบตามความเสียหายที่เกิดขึ้นทั้งหมด
                      </label>
                      <div class="py-6 text-center">
                        <button
                          @click="submit"
                          class="px-6 py-3 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          ยืนยันการจอง
                        </button>
                      </div>
                    </div>
                    <!-- Simulator  -->
                    <div class="w-full lg:w-6/12">
                      <div class="px-0">
                        <v-calendar
                          class="max-w-full px-6 custom-calendar "
                          :masks="masks"
                          :attributes="attributes"
                          disable-page-swipe
                          is-expanded
                        >
                          <template v-slot:day-content="{ day, attributes }">
                            <div
                              class="z-10 flex flex-col h-full overflow-hidden "
                            >
                              <span
                                class="py-6 font-semibold text-gray-900 text-lg  day-label "
                                >{{ day.day }}</span
                              >
                              <div
                                class="flex-grow overflow-x-auto overflow-y-auto"
                              >
                                <p
                                  v-for="attr in attributes"
                                  :key="attr.key"
                                  class="p-2 custom mt-0 font-semibold mb-1 text-md leading-normal rounded-lg "
                                  :class="attr.customData.class"
                                >
                                  {{ attr.customData.title }}
                                </p>
                              </div>
                            </div>
                          </template>
                        </v-calendar>
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
</template>
<script>
import http from "@/services/APIService";
export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const date = new Date().getDate();
    // const m = 12;
    // const y = 2021;

    return {
      timezone: "",
      dateInput: null,
      dateInputTo: null,
      activity: [],
      range: {
        start: new Date(year, month, date + 1),
        end: new Date(year, month, date + 1),
      },
      masks: {
        weekdays: "WWW",
        month: "ธันวาคม",
        input: "YYYY-MM-DD h:mm A",
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: "กิจกรรมทำความสะอาด อาคาร 60 ปี ม.แม่โจ้ ครั้งที่ 36",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 14),
        },
        {
          key: 2,
          customData: {
            title: "กิจกรรมทำความสะอาด อาคาร 60 ปี ม.แม่โจ้ ครั้งที่ 36",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 14),
        },
      ],
      room_array: [],
      advisor_array: [],
      room: "",
      advisor: "",
      topic: "",
      detail: "",
    };
  },
  methods: {
    Classroom() {
      let dateDropdown = document.getElementById("classroom");
      http.get(`classroom`).then((response) => {
        this.room_array = response.data;
        for (let i = 0; i <= this.room_array.length; i++) {
          let dateOption = document.createElement("option");
          dateOption.text = `${this.room_array[i].Classroom_Name} - จำนวน ${this.room_array[i].Classroom_sit} คน`;
          dateOption.value = this.room_array[i].Classroom_Name;
          dateDropdown.add(dateOption);
          this.room_array[i].Classroom_Name -= 1;
        }
      });
    },
    Personnal() {
      let dateDropdown = document.getElementById("advisor");
      http.get(`personnel/teacher`).then((response) => {
        this.advisor_array = response.data;
        for (let i = 0; i <= this.advisor_array.length; i++) {
          let dateOption = document.createElement("option");
          dateOption.text = `${this.advisor_array[i].titlePosition} ${this.advisor_array[i].firstName} ${this.advisor_array[i].lastName} `;
          dateOption.value = `${this.advisor_array[i].titlePosition} ${this.advisor_array[i].firstName} ${this.advisor_array[i].lastName} `;
          dateDropdown.add(dateOption);
          this.advisor_array[i].Classroom_Name -= 1;
        }
      });
    },

    submit() {
      //   let data = {
      //     start: this.range.start,
      //     end: this.range.end,
      //     room: this.room,
      //     advisor: this.advisor,
      //     topic: this.topic,
      //     detail: this.detail,
      //   };
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          title: "font-weight-bold",
          confirmButton:
            "px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          cancelButton:
            "px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "ตรวจสอบข้อมูล",

          html:
            `<p class="custom text-left font-normal text-sm"> <b>ตั้งแต่ :</b> ${this.range.start} <br><b>ถึง :</b>  ${this.range.end}</p>` +
            ` <p class="custom text-left font-normal text-sm"> <b>ห้องเรียน :</b> ${this.room}</p>` +
            ` <p class="custom text-left font-normal text-sm">  <b>โครงการ :</b> ${this.topic} </p>` +
            ` <p class="custom text-left font-normal text-sm"> <b>ผู้รับผิดชอบ :</b> ${this.advisor}</p>`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "จองเรียบร้อย!",
              "ระบบกำลังส่งข้อมูลการจองไปยังผู้ดูแลระบบ",
              "success"
            );
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "ยกเลิกเรียบร้อย!",
              "คุณได้ยกเลิกการจอง",
              "error"
            );
          }
        });
      //this.$router.push({ name: "CVPrint" });
    },
  },
  mounted() {
    this.Classroom();
    this.Personnal();
  },
};
</script>
