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
                      รายการแจ้งซ่อมอุปกรณ์ / บำรุงรักษา
                    </h3>

                    <h3 class="text-xl font-normal ">
                      | Maintenance List
                    </h3>
                  </div>
                  <div class="w-full lg:w-3/12">
                    <div class="mt-4 text-right">
                      <a href="javascript:history.go(-2)">
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

                <div class="py-6 mt-2 text-left ">
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 lg:order-2">
                      <div class="block w-full overflow-x-auto">
                        <!-- Projects table -->
                        <table
                          class="items-center w-full bg-transparent border-collapse"
                        >
                          <thead>
                            <tr>
                              <th
                                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                              >
                                ลำดับ
                              </th>
                              <th
                                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                              >
                                หัวข้อรายการ
                              </th>
                              <th
                                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                              >
                                รายละเอียด
                              </th>
                              <th
                                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                              >
                                ไฟล์แนบ / รูปภาพ
                              </th>

                              <th
                                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                              >
                                สถานะ
                              </th>
                              <th
                                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                              ></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                              >
                                <!-- {{ feed.complainId }} -->
                                1
                              </td>
                              <td
                                class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 "
                              >
                                <h5 class="w-48 font-semibold truncate text-md">
                                  <!-- {{ feed.Complain_Title }} -->1
                                </h5>
                                <p class="w-48 font-normal">
                                  <!-- วันที่ : {{ feed.Complain_Date }} -->
                                </p>
                              </td>
                              <td
                                class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 "
                              >
                                <div>
                                  <p class="w-48 font-normal :truncate">
                                    <!-- {{ feed.Complain_Detail }} -->1
                                  </p>
                                </div>
                              </td>
                              <td
                                class="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                              >
                                <img
                                  class="w-24 h-24 bg-gray-200 shadow-lg border"
                                  :src="cover"
                                  alt=""
                                />
                              </td>

                              <td
                                class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                              >
                                <button
                                  class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                                  type="button"
                                >
                                  <i class="mr-1 fas fa-tools"></i>
                                  <span>รอดำเนินการ</span>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!-- แสดงผลตัวแบ่งหน้าเพจ-->
                        <VueTailwindPagination
                          :current="currentPage"
                          :total="total"
                          :per-page="perPage"
                          @page-changed="onPageClick($event)"
                        />
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
import cover from "@/assets/img/repair.png";
export default {
  data() {
    return {
      cover,
    };
  },
  methods: {},
};
</script>
