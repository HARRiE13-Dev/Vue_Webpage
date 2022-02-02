<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <section class="px-6 py-6">
        <div class="mt-0 text-center">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            โครงการ และกิจกรรม
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Scheme of Activities
          </p>
        </div>
      </section>
      <div class="py-6 mt-10 text-center border-t border-blueGray-200">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4 lg:w-12/12"></div>
        </div>
      </div>

      <section class="px-6 ">
        <div class="px-0">
          <div
            class="text-2xl font-semibold mb-4 border-l-2 border-blueGray-500"
          >
            <h3 class="px-4 text-blueGray-700">
              ปฏิทินรายการกิจกรรมทั้งหมด
            </h3>
          </div>
          <v-calendar
            class="max-w-full px-6 custom-calendar "
            :masks="masks"
            :attributes="attributes"
            disable-page-swipe
            is-expanded
          >
            <template v-slot:day-content="{ day, attributes }">
              <div class="z-10 flex flex-col h-full overflow-hidden ">
                <span
                  class="py-6 font-semibold text-gray-900 text-lg  day-label "
                  >{{ day.day }}</span
                >
                <div class="flex-grow overflow-x-auto overflow-y-auto">
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
      </section>

      <section class="px-6 mt-16">
        <div class="text-2xl font-semibold mb-4 border-l-2 border-blueGray-500">
          <h3 class="px-4 text-blueGray-700">
            ประกาศกิจกรรมทั้งหมด
          </h3>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full p-4 lg:w-4/12 ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg hover:zoom-xs bg-blueGray-200 h-full"
            >
              <img
                alt="..."
                src="https://wwwdev.csmju.com/images/activitypic/thumbnail/activitypic_1639988208.jpg"
                class="w-full align-middle rounded-t-lg cropped-news"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 block w-full h-95-px -top-94-px"
                ></svg>
                <h4 class="text-xl font-bold text-emerald-600">
                  การอบรมเตรียมความพร้อมก่อนออกปฏิบัติสหกิจศึกษา ประจำปีการศึกษา
                  2564 - 2565
                </h4>
                <p class="mt-2 font-light text-blueGray-500 text-md">
                  ขอเชิญนักศึกษา 4 ปี รหัส 62 / 61 / 60 / 59 / 58 / 57
                  และนักศึกษา 2 ปีรหัส 63 /62 / 61 / 60 / 59 / 58 / 57
                  เข้ารับการอบรมเตรียมความพร้อมก่อนออกปฏิบัติสหกิจศึกษา
                  ประจำปีการศึกษา 2564 - 2565
                </p>
              </blockquote>
            </div>
          </div>
          <div class="w-full p-4 lg:w-4/12 ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg hover:zoom-xs bg-blueGray-200 h-full"
            >
              <img
                alt="..."
                src="https://wwwdev.csmju.com/images/activitypic/thumbnail/activitypic_1639988490.jpg"
                class="w-full align-middle rounded-t-lg cropped-news"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 block w-full h-95-px -top-94-px"
                ></svg>
                <h4 class="text-xl font-bold text-emerald-600 ">
                  ขอให้ นศ. ปี 4 วิชา คพ492 สัมมนาวิชาการทางวิทยาการคอมพิวเตอร์
                  ทุกคน เข้าร่วมอบรม AR VR MR ของมหาวิทยาลัยแม่โจ้ รุ่นที่ 3
                </h4>
                <p class="mt-2 font-light text-blueGray-500 text-md">
                  ขอให้ นศ. ปี 4 วิชา คพ492 สัมมนาวิชาการทางวิทยาการคอมพิวเตอร์
                  ทุกคน เข้าร่วมอบรม AR VR MR ของมหาวิทยาลัยแม่โจ้ รุ่นที่ 3
                  ในวันที่ 11-12, 18 ธค 64 แบบออนไล์ผ่านโปรแกรม MS teams
                </p>
              </blockquote>
            </div>
          </div>
          <div class="w-full p-4 lg:w-4/12 ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg hover:zoom-xs bg-blueGray-200 h-full"
            >
              <img
                alt="..."
                src="https://wwwdev.csmju.com/images/activitypic/thumbnail/activitypic_1640090076.jpg"
                class="w-full align-middle rounded-t-lg cropped-news"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 block w-full h-95-px -top-94-px"
                ></svg>
                <h4 class="text-xl font-bold text-emerald-600">
                  ขอให้ นศ. ปี 4 ร่วมกิจกรรมรับน้องประจำปี 2565
                </h4>
                <p class="mt-2 font-light text-blueGray-500 text-md">
                  ขอให้ นศ. ปี 4 วิชา คพ492 สัมมนาวิชาการทางวิทยาการคอมพิวเตอร์
                  ทุกคน เข้าร่วมอบรม AR VR MR ของมหาวิทยาลัยแม่โจ้ รุ่นที่ 3
                  ในวันที่ 11-12, 18 ธค 64 แบบออนไล์ผ่านโปรแกรม MS teams
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import http from "@/services/WebpageService";

export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    // const m = 12;
    // const y = 2021;

    return {
      activity: [],
      masks: {
        weekdays: "WWW",
        month: "ธันวาคม",
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
            title: "กิจกรรมเดินขบวนทำความสะอาด เทศบาลแม่โจ้ ครั้งที่ 36",
            class: "bg-emerald-600 text-white",
          },
          dates: new Date(year, month, 26),
        },
      ],
    };
  },
  mounted() {
    this.currentPage = 1;
    // อ่านสินค้าจาก API
    this.getProducts(this.currentPage);
  },
  methods: {
    /***********************************************************************
     * ส่วนของการอ่านข้อมูลจาก API และแสดงผลในตาราง
     ************************************************************************/
    // ฟังก์ชันสำหรับดึงรายการสินค้าจาก api ทั้งหมด
    async getProducts(pageNumber) {
      let response = await http.get(`alumni?page=${pageNumber}`);
      let responseProduct = response.data;
      this.products = response.data;
      this.products.reverse();
      this.currentPage = responseProduct.current_page;
      this.perPage = responseProduct.per_page;
      this.total = responseProduct.total;
    },

    // สร้างฟังก์ชันสำหรับการคลิ๊กเปลี่ยนหน้า
    onPageClick(event) {
      this.currentPage = event;
      // เช็คว่ามีการค้นหาสินค้าอยู่หรือไม่
      if (this.keyword == "") {
        // ไม่ได้ค้นหา
        this.getProducts(this.currentPage);
      } else {
        this.getProductsSearch(this.currentPage);
      }
    },
  },

  components: {},
};
</script>
